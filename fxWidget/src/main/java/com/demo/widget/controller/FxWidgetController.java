package com.demo.widget.controller;

import com.demo.widget.model.DataModel;
import com.demo.widget.service.FxWidgetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@Slf4j
@RestController
@RequestMapping("/api")
public class FxWidgetController {

    @Autowired
    FxWidgetService fxWidgetService;

    /**
     * API to do the conversion.
     *
     * @param dataModel
     * @return
     */
    @PostMapping(value = "/exchange")
    public Mono<ResponseEntity> exchange(@RequestBody DataModel dataModel){
        return this.fxWidgetService.exchange(dataModel)
                .map(s-> ResponseEntity.ok(s));
    }

    /**
     * Reactive Endpoint to retrieve the symbols.
     *
     * @return
     */
    @GetMapping(value="/symbols")
    public Mono<ResponseEntity> symbols(){
        return this.fxWidgetService.symbols()
                .map(o -> ResponseEntity.ok(o));
    }
}
