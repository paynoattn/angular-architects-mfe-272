import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: '**',
    component: WebComponentWrapper,
    // canActivate: [MarketplaceGuard],
    data: {
      type: 'script',
      remoteEntry: '/mfe-marketplace/remoteEntry.js',
      remoteName: 'mfe-marketplace',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
