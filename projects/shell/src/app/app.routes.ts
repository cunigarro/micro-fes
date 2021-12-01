import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COLLECTION_URL = 'http://localhost:3000/remoteEntry.js';
const ADMIN_URL = 'http://localhost:4000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'cobranza',
      loadChildren: () => loadRemoteModule({
          remoteEntry: COLLECTION_URL,
          remoteName: 'collection',
          exposedModule: './Collection'
        })
        .then(m => m.CollectionCoreModule)
    },
    {
      path: 'admin',
      loadChildren: () => loadRemoteModule({
          remoteEntry: ADMIN_URL,
          remoteName: 'admin',
          exposedModule: './Admin'
        })
        .then(m => m.AdminCoreModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

