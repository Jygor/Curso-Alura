import logo from "../../assets/logo.png";

import tomate from "../../assets/frutas/Tomate.png"
import batata from "../../assets/frutas/Batata.png"
import abobora from "../../assets/frutas/Abóbora.png"
import brocolis from "../../assets/frutas/Brócolis.png"
import pepino from "../../assets/frutas/Pepino.png"

const cesta ={
  topo: {
    titulo: "Detalhe de cesta "
  },

  detalhes: {
    nome: "Cesta De Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descriçao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha",
    preço: "R$: 40,00",
    botao: "Comprar"

  },
  
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Batata",
        imagem: batata,
    },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },

    ]
  }
}
export default cesta;