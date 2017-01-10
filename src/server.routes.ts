/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
import { routes as clientRoutes } from './app/routes';
export const routes: string[] = clientRoutes.map(r => r.path);
