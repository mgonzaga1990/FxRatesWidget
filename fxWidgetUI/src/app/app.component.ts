import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { convert, loadCode } from './store/fxwidget.action';
import { FxState } from './store/fxwidget.reducer';
import { fromAmount, isLoading, rateDescription, selectCodes, toAmount } from './store/fxwidget.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Fx Widget';

  isLoading$ = this.store.select(isLoading);
  codes$ = this.store.select(selectCodes);


  fromAmount$ = this.store.select(fromAmount);
  toAmount$ = this.store.select(toAmount);
  rateDescription$ = this.store.select(rateDescription);


  //variable to get values from inputs
  fromCode : any;
  toCode : any;

  constructor(private store:Store<FxState>){}

  ngOnInit(): void {
    this.store.dispatch(loadCode())
  }

  buyInput(e: any){
    var amount  = e.target.value;
    this.store.dispatch(convert({transaction:'SELL',amount:amount,fromCode: this.fromCode,toCode:this.toCode}))
  }

  sellInput(e: any){
    var amount  = e.target.value;
    this.store.dispatch(convert({transaction:'BUY',amount:amount,fromCode: this.fromCode,toCode:this.toCode}))
  }
}
