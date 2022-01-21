
    export interface FxWidgetModel {
        transaction: string;

        fromCode: string;
        fromAmount?: number;
        
        toCode: string;
        toAmount?: number;
        
        rateDescription?: string;
    }