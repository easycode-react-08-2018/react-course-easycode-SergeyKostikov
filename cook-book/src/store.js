import {applyMiddleware, createStore,} from "redux";
import {mainReducer} from "./features/reducers/main-reducer";
import ReduxThunk from 'redux-thunk';

export const store = createStore(mainReducer,applyMiddleware(ReduxThunk))