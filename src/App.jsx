import { useState } from "react";

function App() {
  let [saldoDisp, setSaldoDisp] = useState((10000).toFixed(2));
  let [saquesSucessoTotal, setSaquesSucessoTotal] = useState(0);
  let [saquesSucesso, setSaquesSucesso] = useState([]);
  let [saquesInvalidos, setSaquesInvalidos] = useState([]);
  let [saque, setSaque] = useState("");

  function sacar() {
    if (saldoDisp < +saque) {
      alert("Você não tem saldo suficiente para realizar o saque!");
      setSaquesInvalidos(saquesInvalidos.concat(+saque));
    } else {
      if (+saque % 50 == 0) {
        alert("Saque realizado com sucesso!")
        setSaldoDisp((saldoDisp - +saque).toFixed(2));
        setSaquesSucesso(saquesSucesso.concat(+saque));
        setSaquesSucessoTotal(+saquesSucessoTotal + +saque);
      } else {
        alert(
          "Nao temos notas disponiveis para este valor, no momento só temos notas de 50 reais"
        );
        setSaquesInvalidos(saquesInvalidos.concat(+saque));
      }
    }
  }

  return (
    <>
      <header className="d-flex align-items-center justify-content-around bg-primary text-white">
        <h1 className="my-2">Caixa Eletrônico</h1>
        <h2 className="my-2">Saldo Disponível: R$ {saldoDisp}</h2>
      </header>
      <main className=" container m-5">
        <div className="d-flex main">
          <div className="mx-5">
            <img
              src="./src/images/main.png"
              alt="Menino jogando dinheiro para cima"
            />
          </div>
          <div>
            <div className="d-flex justify-content-around">
              <input
                className="w-50 p-3"
                placeholder="Valor do Saque R$"
                type="text"
                value={saque}
                onChange={(e) => setSaque(e.target.value)}
              />
              <input
                className=" w-25 btn btn-primary px-5"
                type="button"
                value="Sacar"
                onClick={sacar}
              />
            </div>
            <div className="d-flex justify-content-around mt-4 border border-1 border-black p-2">
              <h3 className="mx-5">Saques com Sucesso</h3>
              <h3 className="mx-5">R$: {saquesSucessoTotal}</h3>
            </div>
            <div className="border border-black py-3 px-1">
              <ul>
                {saquesSucesso.map((saque, index) => (
                  <li className="text-primary" key={index}>
                    {saque.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex align-items-center" >
            <h3 className="text-danger">Saques Invalidos: </h3>
            <ol className="d-flex listaInvalidos">
              {saquesInvalidos.map((saque, index) => (
                <li className="text-danger inline-list" key={index}>
                  {saque.toFixed(2)+"; "}
                </li>
              ))}
            </ol>
            </div>

            
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
