//Variaveis 
const buttonConvert = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select");

//Função
function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert",); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // ouitras moedas
  

  const dolarToday = 5.22;
  const euroToday =  6.22;
  const libraToday = 7.10;

  // const converteValue = inputCurrencyValue / dolarToday;

  if(currencySelect.value =="dolar"){
    //Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(inputCurrencyValue / dolarToday);
  }
  if(currencySelect.value =="euro"){
     //Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue / euroToday);
  }
  if(currencySelect.value =="libra"){
     //Se o select estiver selecionado o valor de libra, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue /libraToday );
  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);

}
function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if(currencySelect.value =="dolar"){
     currencyName.innerHTML = "Dólar Americano"
     currencyImage.src = "./assests/dolar-unidos .png"
  }

  if(currencySelect.value =="euro"){
     currencyName.innerHTML = "Euro"
     currencyImage.src = "./assests/euro.png"
  }
  if(currencySelect.value =="libra"){
     currencyName.innerHTML = "Libra"
     currencyImage.src = "./assests/libra 1.png"
  }
 

 convertValues() 

}

currencySelect.addEventListener("change", changeCurrency);
buttonConvert.addEventListener("click", convertValues);
