const  taxa  =  documento . getElementById ( 'inputTX' ) ;
const  real  =  documento . getElementById ( 'inputRD' ) ;
const  dolar  =  documento . getElementById ( 'inputDR' ) ;

const  botaoconfirmar  =  document . getElementById ( 'botaoconfirmar' ) ;
const  botaolimpar  =  documento . getElementById ( 'botaolimpar' ) ;
const  botaoRD  =  document . getElementById ( 'botaoRD' ) ;
const  botaoDR  =  document . getElementById ( 'botaoDR' ) ;

botaoRD . desabilitado  =  verdadeiro ;
botaoDR . desabilitado  =  verdadeiro ;
botaolimpar . desabilitado  =  verdadeiro ;
real . desabilitado  =  verdadeiro ;
dólar . desabilitado  =  verdadeiro ;

função  confirmaTaxa ( )  {
  if  ( taxa . value  ===  '' )  {
    return  alert ( 'Digite a taxa de conversão para continuar' ) ;
  }
  taxa . desabilitado  =  verdadeiro ;
  botaoconfirmar . desabilitado  =  verdadeiro ;
  botaolimpar . desabilitado  =  falso ;
  real . desabilitado  =  falso ;
  dólar . desabilitado  =  falso ;
  botaoRD . desabilitado  =  falso ;
  botaoDR . desabilitado  =  falso ;
}

função  limpar ( )  {
  taxa . valor  =  '' ;
  botaoconfirmar . desabilitado  =  falso ;
  botaoRD . desabilitado  =  verdadeiro ;
  botaoDR . desabilitado  =  verdadeiro ;
  taxa . desabilitado  =  falso ;
  real . valor  =  '' ;
  dólar . valor  =  '' ;
}

função  conversorRD ( )  {
  deixe  dolares  =  0 ;
  dolares  =  reais . valor  /  taxa . valor ;
  consola . log ( dolares ) ;
  alerta ( dolares  +  'dolares' ) ;
}

função  conversorDR ( )  {
  deixe  real  =  0 ;
  real  =  dólar . valor  *  taxa . valor ;
  consola . log ( real ) ;
  alerta ( real  +  'reais' ) ;
}