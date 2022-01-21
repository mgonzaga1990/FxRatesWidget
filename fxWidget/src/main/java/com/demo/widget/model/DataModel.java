package com.demo.widget.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PACKAGE)
@ToString()
public class DataModel {
    public enum Transaction{
        BUY,SELL
    }

    Transaction transaction;

    String fromCode;
    BigDecimal fromAmount;


    String toCode;
    BigDecimal toAmount;

    String rateDescription;
}
