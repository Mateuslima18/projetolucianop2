function tabuada(num, limite) {
    let resultado = '';
    
    
for (let i = 1; i <= limite; i++) {
        resultado += 
        resultado += 
`${num} x ${i} = ${num * i}\n`;
    }
    
    }
    retur
return resultado;




fu
function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    
   
const limite = document.getElementById('limite').value;

    if (numero && limite) {
        
        con
const resultado = tabuada(Number(numero), Number(limite));
        
    
document.getElementById('resultado').textContent = resultado;
    } 
    } else
{
        
      
}