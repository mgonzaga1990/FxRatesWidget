import { Action, createReducer, on } from '@ngrx/store';
import { FxWidgetModel } from '../model/fxWidget.model';
import * as fxActions from '../store/fxwidget.action';

//define the state
export interface FxState {
  isLoading: boolean,  
  codes: string[],
  error?: any
}

export interface FxConversionState{
    isLoading: boolean, 
    error?: any
    data? : FxWidgetModel
}

//set the initial state
export const initialState: FxState = {
    codes: [],
    isLoading: false,
    error:undefined
};

export const initialConversionState : FxConversionState = {
    isLoading: false,
    error:undefined
}

//create reducer
const appReducer = createReducer(
    initialState,
    on(fxActions.loadCode,state => ({...state,isLoading:true})),
    on(fxActions.loadCodeOK,(state,{codes}) => ({...state,codes:codes,isLoading:false,error:undefined})),
    on(fxActions.loadCodeFAIL,(state,{error}) => ({...state,user:undefined,isLoading:false,error:error})),


    //conversion reducer
    on(fxActions.convert,state => ({...state,isLoading:true})),
    on(fxActions.convertOK,(state,{data}) => ({...state,data:data,isLoading:false,error:undefined})),
    on(fxActions.convertFAIL,(state,{error}) => ({...state,data:undefined,isLoading:false,error:error})),
)


//expose reducer
export function reducer(state : FxState | undefined, action : Action){
    return appReducer(state,action);
}