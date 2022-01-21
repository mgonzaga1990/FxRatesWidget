import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FxWidgetModel } from "./model/fxWidget.model";

@Injectable({
    providedIn:'root'
})
export class AppService {
    private REST_API_SERVER = "http://localhost:8080/api";

    constructor(private httpClient: HttpClient) { }

    public fetchCodes():Observable<string[]>{
        return this.httpClient.get<string[]>(this.REST_API_SERVER + '/symbols')
    }

    public convert(transaction: string, fromCode: string,toCode: string, amount: number):Observable<FxWidgetModel>{
        var data : FxWidgetModel = {
            transaction: transaction,
            fromCode: fromCode,
            fromAmount: amount,
            toCode : toCode,
            toAmount: amount
        }
        return this.httpClient.post<FxWidgetModel>(this.REST_API_SERVER + '/exchange',data)
    }
}