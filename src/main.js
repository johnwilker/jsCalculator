let horasDiarias = document.querySelector('#horasDiarias');
let diasMes = document.querySelector('#diasMes');
let despesas = document.querySelector('#despesas');
let equipamento = document.querySelector('#equipamento');

let resultado = document.querySelector('#valorTotal');

let hidden = document.querySelector('#resultado');

const enviar = document.querySelector('#calcular');

enviar.addEventListener('click', function(event){
  event.preventDefault();

  if (horasDiarias.value == '' || diasMes.value == '' || despesas == '' ){
    alert('Preencha os campos vazios');
  } else {
    // Valor do equipamento pago por mês
    let equipamentMes = (Number(equipamento.value/12));
    // Despesas mensais + equipamento mensal
    let despesasTotais = Number(despesas.value) + equipamentMes;
    // Horas trabalhadas por mês
    let horasMes = Number(horasDiarias.value) * Number(diasMes.value);

    const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2);

    hidden.classList.remove('hidden');

    resultado.innerText = `R$ ${valorHora}`;
  }
})
