import React from 'react';

const clientAction = () => async () => {};
import { ReduxStore } from '@/lib/store';

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user;
  return null;
};

const Settings = () => {
  return <div>Settings</div>;
};

export default Settings;
