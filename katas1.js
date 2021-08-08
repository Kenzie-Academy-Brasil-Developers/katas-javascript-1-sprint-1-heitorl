function oneThroughTwenty() {
    let umAteVinte = [];
    for(let i = 1; i <= 20; i++){
      umAteVinte.push(i)
    }
    return umAteVinte;    
}
console.log(oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty(){
    let numerosPares = [];
    for(let i = 1; i <= 20; i++){
      i % 2 === 0 ? numerosPares.push(i) : "";
    }
    return numerosPares;  
}
console.log(evensToTwenty());
//call function evensToTwenty

function oddsToTwenty() {
  
  let numerosImpares = [];
  for(let i = 1; i <= 20; i++){
    i % 2 !== 0 ? numerosImpares.push(i) : "";
  }
  return numerosImpares;   
}
console.log(oddsToTwenty());
//call function oddsToTwenty

function multiplesOfFive() {
  let multDeCinco = [];
  for(let i = 1; i <= 100; i++){
    i % 5 === 0 ? multDeCinco.push(i) : "";
  }
  return multDeCinco;
}
console.log(multiplesOfFive());

//call function multiplesOfFive

function squareNumbers() {
  let numerosQuadrados = [];
  
  for(let i = 1; i <= 10; i++){
    numerosQuadrados.push(i*i)
  }
  return numerosQuadrados;    
}
console.log(squareNumbers());

//call function squareNumbers

function countingBackwards() {
  let VinteReverso = [];
  for(let i = 20; i >= 1; i--){    
    VinteReverso.push(i);
  }
  return VinteReverso;
}
console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
  let paresReverso = [];
  for(let i = 20; i >= 1; i--){
    i % 2 === 0 ? paresReverso.push(i) : "";
  }   
  return paresReverso; 
}
console.log(evenNumbersBackwards());

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let imparReverso = [];
  for(let i = 20; i >= 1; i--){
    i % 2 !== 0 ? imparReverso.push(i) : "";   
  }
  return imparReverso
}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let multCincoReverso = [];
  for(let i = 100; i >= 1; i--){
    i % 5 === 0 ? multCincoReverso.push(i) : "";   
  }
  return multCincoReverso;
}
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    let quadradosReverso = [];
    for(let i = 10; i >= 1; i--){
      quadradosReverso.push(i * i)
    }
  return quadradosReverso;
}
console.log(squareNumbersBackwards())

