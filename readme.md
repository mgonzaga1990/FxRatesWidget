# Demo

![Demo](https://github.com/mgonzaga1990/fxRatesWidget/blob/master/images/demo-1.gif)

# Steps to replicate
- run the project
- navigate to `http://localhost:4200`
- Since this demo application has no validation, Please select **the currencies first** by selecting the 2 dropdown (AOA and USD in the above slide)
- **The conversion happens everytime you lost focus on the input field**. In the above slide, I entered a value from the **AOA** field then when I lost focus the conversion happened.
- Same goes in reverse; If you lost focus on the **Selling field** or the 2nd field (USD in this example). If you want to check the buying amount.

**NOTE** : The conversion is not comming from the endpoint provided as I'm not allowed to invoke it due to my subscription
![](https://github.com/mgonzaga1990/fxRatesWidget/blob/master/images/image2.PNG)
**As a workaround, In the backend I randomly generate an equivalent convertion rate regardless of the currency being requested.**

## prerequisite 
In order to run docker-compose must have `Docker` installed
## for Windows : https://docs.docker.com/docker-for-windows/install/

## How to run
1. clone the project
2. run `docker-compose up --build -d`
3. navigate to the UI : `http://localhost:4200/`

## swagger ui
url : `http://localhost:8080/swagger-ui.html`
![](https://github.com/mgonzaga1990/fxRatesWidget/blob/master/images/swagger.PNG)

# Technology Stack
## Backend
- `java-11`,`spring-boot` and `spring-webflux`

## Front-end
- `angular 10` and `ngrx` for state management

## Other
- `Docker` and `docker-compose`

# Limitation
- No field and API validation
- **Cannot use the actual conversion endpoint**
- No Junit

## Last Note:
- **When the page loads**, It calls an api from the backend which then pulls all the symbols(currency code) from `api.exchange`
- **Everytime the user lost focus from the input field** and invocation of an API happened.
- If possible, Please test accordingly as I'm not able to add validation due to time constraint. 
