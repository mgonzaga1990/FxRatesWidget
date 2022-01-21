import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, delay, map, mergeMap, switchMap } from "rxjs/operators";
import { AppService } from "../app-service";
import { FxWidgetModel } from "../model/fxWidget.model";
import * as fromActions from './fxwidget.action';

@Injectable()
export class FxWidgetEffect{

    constructor(private action$:Actions,
        private service : AppService){}
    
    /**
     * load country currency codes
     * 
     *  */        
    loadCodes$ = createEffect(()=> 
        this.action$.pipe(
            ofType(fromActions.loadCode),
            switchMap(() =>
                this.service.fetchCodes()
                    .pipe(
                        delay(1000),
                        map((data: string[]) => {
                            return fromActions.loadCodeOK({codes: data});
                        }),
                        catchError(err => of(fromActions.loadCodeFAIL({error: err})))
                    )
            )
        )
    );

    getAmount = createEffect(()=> this.action$.pipe(
        ofType(fromActions.convert),
        switchMap((action) =>
            {
                return this.service.convert(action.transaction,action.fromCode,action.toCode,action.amount)
                .pipe(
                    map((data: FxWidgetModel) => {
                        return fromActions.convertOK({data: data});
                    }),
                    catchError(err => of(fromActions.convertFAIL({error: err})))
                )
            }
        )
    )
    );
}