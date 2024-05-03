import { Injectable } from '@nestjs/common';
import { Request as ExpressRequest, Router } from 'express';

@Injectable()
export class RoutesService {
  public getRoutes(req: ExpressRequest) {
    const routes = this.findAllRoutes(req);

    const allowedMethods = ['GET'];
    const filteredMethods = this.filterMethods(routes, allowedMethods);

    const allowedUrls = ['/docs', '/health-check', '/users', '/routes'];
    const filteredUrls = this.filterUrlsToRemove(filteredMethods, allowedUrls);

    return this.getOrganizedRoutes(filteredUrls);
  }

  private getOrganizedRoutes(routes: string[]): any {
    const organizedRoutes = {};

    routes.forEach((route) => {
      const parts = route.split('/');

      if (parts.length > 2) {
        const database = parts[1];
        const option = parts[2].split(':')[0];

        if (option) {
          if (!organizedRoutes[database]) organizedRoutes[database] = [];

          if (!organizedRoutes[database].includes(option))
            organizedRoutes[database].push(option);
        }
      }
    });

    return organizedRoutes;
  }

  private filterMethods(routes: string[], allowedMethods: string[]): string[] {
    return routes.filter((route) => {
      const method = route.split(' ')[0];
      return allowedMethods.includes(method);
    });
  }

  private filterUrlsToRemove(
    routes: string[],
    disallowedUrls: string[],
  ): string[] {
    return routes.filter((route) => {
      const url = route.split(' ')[1];
      return !disallowedUrls.some((disallowedUrl) =>
        url.includes(disallowedUrl),
      );
    });
  }

  private findAllRoutes(req: ExpressRequest) {
    const router = req.app._router as Router;

    return router.stack
      .map((layer) => {
        if (layer.route) {
          const path = layer.route?.path;
          const method = layer.route?.stack[0].method;
          return `${method.toUpperCase()} ${path}`;
        }
      })
      .filter((item) => item !== undefined);
  }
}
