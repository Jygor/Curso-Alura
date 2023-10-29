import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native"

export default function Detalhes({ nome, nomeFazenda, descriçao, preço, logoFazenda, botao}) {
  return <>
  <Text style={estilos.nome}>{nome}</Text>
    <View style={estilos.fazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda} />
      <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
    </View>
    <Text style={estilos.descriçao}>{descriçao}</Text>
    <Text style={estilos.preço}>{preço}</Text>
    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
      <Text style={estilos.textoBotao}>{ botao }</Text>
    </TouchableOpacity> 
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 20,
    lineHeight: 42,
    fontWeight: "bold",

  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height :32
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12
  },
  descriçao: {
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26

  },
  preço: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8 
  },
   botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
   },
   textoBotao: {
      textAlign: "center",
      color: "white",
      fontSize: 16,
      lineHeight: 26,
      fontWeight: 'bold'
   }
})