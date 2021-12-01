import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
   loadRemoteEntry('https://mfe-1.netlify.app/remoteEntry.js', 'mfe1')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));



