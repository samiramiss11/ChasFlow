import React from 'react';

const clientAction = () => async () => {};
import { ReduxStore } from '@/lib/store';

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user;
  return null;
};

const TimeReports = () => {
  return <div>TimeReports</div>;
};

export default TimeReports;
