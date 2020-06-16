import { createAction, createAsyncAction } from 'typesafe-actions';

export const Increment = createAction('COUNTER/INCREMENT')<number>();
export const Decrement = createAction('COUNTER/DECREMENT')<number>();

export const InitAsync = createAsyncAction('COUNTER/INIT', 'COUNTER/INIT/SUCCESS', 'COUNTER/INIT/FAILURE', 'COUNTER/INIT/CANCEL')<undefined, number, Error, undefined>();