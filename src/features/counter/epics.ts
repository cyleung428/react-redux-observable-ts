import { Epic, combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { InitAsync } from './actions';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { RootState, RootActions } from '..';

export const initAsyncEpic: Epic<RootActions, RootActions, RootState> = (action$, state$) =>
    
    action$.pipe(
        filter(isActionOf(InitAsync.request)),
        mergeMap(action => 
            from(of(612)).pipe(
                map(InitAsync.success),
                catchError(error => of(InitAsync.failure(error as Error)))
            )
        )
    );

export default combineEpics(
    initAsyncEpic
);