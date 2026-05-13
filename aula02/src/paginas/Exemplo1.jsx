export default function Exemplo1 ({numero})
{
  let quadrado,cubo;
  quadrado = Number(numero) * Number(numero);
  cubo = Number(numero) * Number(numero) * Number(numero)
  
  return (
    <div>
      O quadrado do número {numero} é {quadrado}, e o cubo dele é {cubo}
    </div>

    
  )
}