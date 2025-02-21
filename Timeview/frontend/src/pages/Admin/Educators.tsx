import React from 'react';

const clientAction = () => async () => {};
import { ReduxStore } from '@/lib/store';

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user;
  return null;
};

const Educators = () => {
  return <div>Educators</div>;
};

export default Educators;
