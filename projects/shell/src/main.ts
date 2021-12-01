import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

Promise.all([
   loadRemoteEntry('https://mfes-collection.netlify.app' + '/remoteEntry.js', 'collection'),
   loadRemoteEntry('https://mfes-admin.netlify.app' + '/remoteEntry.js', 'admin')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));



