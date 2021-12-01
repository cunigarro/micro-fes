import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

Promise.all([
   loadRemoteEntry(environment.collectionUrl + '/remoteEntry.js', 'collection'),
   loadRemoteEntry(environment.adminUrl + '/remoteEntry.js', 'admin')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));



