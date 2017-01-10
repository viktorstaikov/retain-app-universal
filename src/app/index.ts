import { ApiService, AuthService, NoteService, StoreHelperService } from './services';
import { Store } from './store';
export * from './app.component';
export { routes } from './routes';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);
// const Services: any[] = mapValuesToArray(services);
// export const providers = [
//     Store,
//     ...Services
// ];

export const providers = [Store, ApiService, AuthService, NoteService, StoreHelperService];
