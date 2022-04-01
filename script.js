const  taxa  =  documento . getElementById ( 'inputTX' ) ; 
const  real  =  documento . getElementById ( 'inputRD' ) ; 
const  dolar  =  documento . getElementById ( 'inputDR' ) ; 

const  bconfirmar  =  document . getElementById ( 'bconfirmar' ) ; 
const  blimpar  =  documento . getElementById ( 'blimpar' ) ; 
const  botaoRD  =  document . getElementById ( 'botaoRD' ) ; 
const  botaoDR  =  document . getElementById ( 'botaoDR' ) ;

botaoRD . desabilitado  =  verdadeiro ;
botaoDR . desabilitado  =  verdadeiro ;
blimpar . desabilitado  =  verdadeiro ;
real . desabilitado  =  verdadeiro ;
dólar . desabilitado  =  verdadeiro ;

função;  confirmarTaxa ( )  ;{
  if  ( taxa . value  ===  '' )  {
    return  alert ( 'Informe a taxax de conversão' ) ;
  }
  taxa . desabilitado  =  verdadeiro ;
  bconfirmar . desabilitado  =  verdadeiro ;
  blimpar . desabilitado  =  falso ;
  real . desabilitado  =  falso ;
  dólar . desabilitado  =  falso ;
  botaoRD . desabilitado  =  falso ;
  botaoDR . desabilitado  =  falso ;
}
função;  limpar ( )  ;{
  taxa . valor  =  '' ;
  bconfirmar . desabilitado  =  falso ;
  botaoRD . desabilitado  =  verdadeiro ;
  botaoDR . desabilitado  =  verdadeiro ;
  taxa . desabilitado  =  falso ;
  real . valor  =  '' ;
  dólar . valor  =  '' ;
}
função;  conversorRD ( )  ;{
  deixe  ;dolares  =  0 ;
  dólares  =  reais . valor  /  taxa . valor ;
  consolo . log ( dolares ) ;
  alerta  ( dolares  +  'dolares' ) ;
}
função;  conversorDR ( )  ;{
  deix  ;real  =  0 ;
  real  =  dólar . valor  *  taxa . valor ;
  consolo . log ( real ) ; 
  alerta ( real  +  'reais' ) ;
}
