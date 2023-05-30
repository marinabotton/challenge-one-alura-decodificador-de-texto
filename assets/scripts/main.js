let opcao = "";

  function codificar(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }

  function decodificar(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }

  function escolherOpcao(valor) {
    opcao = valor;
    processar();
  }

  function processar() {
    const texto = document.getElementById("texto").value.toLowerCase();
    let resultado = "";

    if (opcao === "codificar") {
        resultado = codificar(texto);
    } else if (opcao === "decodificar") {
        resultado = decodificar(texto);
    }
    document.getElementById("resultado").value = resultado;
    document.querySelector(".dados__a").style.display = "none";
    document.querySelector(".dados__b").style.display = "flex";  
  }



  function copiarTexto() {
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
      document.execCommand("copy");
  }

