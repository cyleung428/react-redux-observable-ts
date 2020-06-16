import { createReducer } from "typesafe-actions";
import { CounterActions } from ".";
import { CounterState } from "./state";
import { Decrement, Increment, InitAsync } from "./actions";

const initialState = {
    count: 0
};

const reducers = createReducer<CounterState, CounterActions>(initialState)
    .handleAction(InitAsync.success, (state, action) => ({ ...state, count: action.payload }))
    .handleAction(Increment, (state, action) => ({ count: state.count + action.payload }))
    .handleAction(Decrement, (state, action) => ({ count: state.count - action.payload }))

export default reducers;