import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FxConversionState, FxState } from './fxwidget.reducer';

export interface AppState {
    fxState: FxState,
    conversionState : FxConversionState
}

export const selectAppState = createFeatureSelector<FxState>('app')
export const selectAppConversionState = createFeatureSelector<FxState>('app')

export const isLoading = createSelector(
    selectAppState,(state : FxState) => state.isLoading
)

export const selectCodes = createSelector(
    selectAppState,(state : FxState) => state.codes
)

// selectors for the conversion state
export const isLoadingConversion = createSelector(
    selectAppState,(state : FxConversionState) => state.isLoading
)

export const data = createSelector(
    selectAppState,(state : FxConversionState) => state.data
)
export const fromAmount = createSelector(
    data, data=>data?.fromAmount
)
export const toAmount = createSelector(
    data, data=>data?.toAmount
)
export const rateDescription = createSelector(
    data, data=>data?.rateDescription
)
