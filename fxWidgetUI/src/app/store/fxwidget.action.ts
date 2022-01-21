import { createAction, props } from '@ngrx/store';
import { FxWidgetModel } from '../model/fxWidget.model';

export const loadCode = createAction('[Load Country Codes] Load Country Codes');
export const loadCodeOK = createAction('[Load Country Codes OK] Load Country Codes OK',props<{ codes: string[] }>());
export const loadCodeFAIL = createAction('[Load Country Codes FAIL] Load Country Codes FAIL',props<{ error: any }>());


export const convert = createAction('[Convert] Convert',props<{transaction: string; fromCode: string; toCode: string ; amount: number}>());
export const convertOK = createAction('[Convert OK] Convert OK',props<{ data: FxWidgetModel }>());
export const convertFAIL = createAction('[Convert FAIL] Convert FAIL',props<{ error: any }>());