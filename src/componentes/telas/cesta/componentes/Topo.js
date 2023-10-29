import React from "react";
import { Image, StyleSheet, Text, Dimensions } from 'react-native'

import topo from '../../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return <>
  <Image source={topo} style={estilos.topo} />
  <Text style={estilos.titulo}>{titulo}</Text>
    </>

}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width
  },
  titulo: {
    width: "100%",
    color: 'white',
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 22,
  },
  
})