const saldoAtual = document.getElementById("saldoAtual");
const extratoConta = document.getElementById("extratoConta");
const valorInput = document.getElementById("valor");
const btnSacar = document.querySelector("#btn-sacar");
const btnDepositar = document.querySelector("#btn-depositar");

function getCurrentTime() {
  const data = new Date();
  const hora = data.getHours();
  const minuto = String(data.getMinutes()).padStart(2, "0");
  const segundo = String(data.getSeconds()).padStart(2, "0");
  const dia = data.toLocaleDateString();

  return { hora, minuto, segundo, dia };
}
function saldoAtualDeposito() {
  let valor = Number(prompt("Digite o valor total do seu dinheiro: "));
  saldoAtual.innerHTML = valor.toFixed(2);
}

btnSacar.addEventListener("click", () => {
  const valor = Number(valorInput.value);
  const saldo = Number(saldoAtual.innerHTML);
  const currentTime = getCurrentTime();

  if (valorInput.value === "") {
    alert("Digite um valor!!");
    return;
  }

  if (saldo > 0 && saldo >= valor) {
    saldoAtual.innerHTML = (saldo - valor).toFixed(2);
    extratoConta.innerHTML += `<p class="saque" >Sacou R$${valor.toFixed(
      2
    )} às ${currentTime.hora}:${currentTime.minuto}:${
      currentTime.segundo
    } do dia ${currentTime.dia}</p>`;
    valorInput.value = "";
    valorInput.focus();
  } else {
    alert("Saldo insuficiente ou valor inválido.");
  }
});
btnDepositar.addEventListener("click", () => {
  const valor = Number(valorInput.value);
  const saldo = Number(saldoAtual.innerHTML);
  const currentTime = getCurrentTime();

  saldoAtual.innerHTML = (saldo + valor).toFixed(2);
  extratoConta.innerHTML += `<p class="depos" >Depositou R$${valor.toFixed(
    2
  )} às ${currentTime.hora}:${currentTime.minuto}:${
    currentTime.segundo
  } do dia ${currentTime.dia}</p>`;
  valorInput.value = "";
  valorInput.focus();
});

saldoAtualDeposito();
