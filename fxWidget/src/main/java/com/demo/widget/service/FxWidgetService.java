package com.demo.widget.service;

import com.demo.widget.model.DataModel;
import com.fasterxml.jackson.databind.JsonNode;
import io.netty.util.internal.StringUtil;
import java.security.SecureRandom;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Random;

@Slf4j
@Service
public class FxWidgetService {

    @Value("${api.key}")
    String accesskey;

    @Value("${exchangerate.api}")
    String api;

    /**
     * Here I just create a random currency exchange as my subscription is not allowing
     * me to call the actual convert API.
     *
     * @param dataModel
     * @return
     */
    public Mono<DataModel> exchange(DataModel dataModel){
        return Mono.fromSupplier(() -> {
            //here i'm just mocking the conversion rate
            var rnd = new SecureRandom();
            var copyOfData = dataModel;
            final var newConversionAmount = new BigDecimal(rnd.nextDouble());

            //check what data has been supplied in the request
            if(dataModel.getTransaction().equals(DataModel.Transaction.SELL)){
                //means the buy data was supplied need to return the sell amount
                copyOfData.setToAmount(convert(newConversionAmount, dataModel.getFromAmount()));
                copyOfData.setRateDescription(rateDescription(newConversionAmount, dataModel.getFromCode(), dataModel.getToCode())
                );
            }else{
                //means the sell data was supplied need to return the buy amount
                copyOfData.setFromAmount(convert(newConversionAmount, dataModel.getToAmount()));
                copyOfData.setRateDescription(rateDescription(newConversionAmount, dataModel.getToCode(), dataModel.getFromCode())
                );
            }
            return copyOfData;
        });
    }

    /**
     * Retrieve all available symbol.
     *
     * @return
     */
    public Mono<Object> symbols() {
        WebClient client = WebClient.create(this.api);
        return client.get()
                .uri("/symbols?access_key=".concat(this.accesskey))
                .retrieve()
                .bodyToMono(JsonNode.class)
                .map(s-> s.path("symbols").fieldNames());

    }

    private BigDecimal convert(BigDecimal newConversionAmount, BigDecimal amount) {
        return newConversionAmount.multiply(amount);
    }

    private String rateDescription(BigDecimal newConversionAmount, String code1, String code2) {
        return new StringBuilder().append("1")
                .append(StringUtil.SPACE)
                .append(code1)
                .append(StringUtil.SPACE)
                .append("=").append(new DecimalFormat("##.00").format(newConversionAmount))
                .append(StringUtil.SPACE).append(code2).toString();
    }
}
