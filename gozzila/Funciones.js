const parImpar = (numero) => {
  if(numero%2 == 0)
    r= "es par"
  else
    r= "es impar"
  return r
}


n=parseInt(prompt("ingrese un numero"))

console.log(parImpar(n))

