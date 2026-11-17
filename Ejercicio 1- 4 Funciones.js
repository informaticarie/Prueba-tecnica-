let datos = "Hola como estas";
let ContieneNum = [2, 2, 3, 4, 5, 6, 8, 15, 12];
let ArrEnte = [2, 5, 8, 44, 1, 7];
let obje = 9;
ejercicio1(datos);
ejercicio2(ContieneNum);
ejercicio3(100, 150);
ejercicio4(ArrEnte, obje);

function ejercicio1(dat) {
  let palabra = dat.split(" ");
  let resultado = [];

  for (let i = 0; i < palabra.length; i++) {
    let palabraAct = palabra[i];
    let contenedor = "";

    for (let a = palabraAct.length - 1; a >= 0; a--) {
      contenedor += palabraAct[a];
    }
    resultado.push(contenedor);
  }
  console.log(resultado.join(" "));
}

function ejercicio2(ContNum) {
  let contieneResp = [];

  for (let i = 0; i < ContNum.length; i++) {
    ContNum[i] % 2 === 0 && !contieneResp.includes(ContNum[i])
      ? contieneResp.push(ContNum[i])
      : "";
  }
  console.log(contieneResp);
}

function ejercicio3(inicio, fin) {
  let resultado = [];

  function Primo(num) {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = inicio; i <= fin - 2; i++) {
    if (Primo(i) && Primo(i + 2)) {
      resultado.push([i, i + 2]);
    }
  }

  console.log(resultado);
}

function ejercicio4(ArrEnte, obje) {
  let almacenando = [];
  function busca(a, sum) {
    if (sum === obje) {
      return true;
    }

    if (a >= ArrEnte.length) {
      return false;
    }

    let agrega = busca(a + 1, sum + ArrEnte[a]);

    if (agrega) {
      almacenando.push(ArrEnte[a]);
      return true;
    }

    let noAgrega = busca(a + 1, sum);
    return noAgrega;
  }
  console.log(
    busca(0, 0),
    "(Porque la suma de estos numero: " + almacenando.join("+") + " = " + obje + ")",
  );
}
