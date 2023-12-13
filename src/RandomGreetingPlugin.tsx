import { RandomgreetingPage } from '@strawberryjam/plugin-randomgreeting';
import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import React from 'react';
import { Route } from 'react-router';
export const RandomGreetingPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
          <Route path="/randomgreeting" element={<RandomgreetingPage />} />
        )
        sidebarItemSurface.addMainItem(
          <SidebarItem icon={AttachFileIcon} to='randomgreeting' text='greeting' />
        );
      }
    );
  }