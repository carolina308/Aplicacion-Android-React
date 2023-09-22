import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Pressable,
    Modal,
    FlatList,
    View,
  } from 'react-native';
  
const Panciente = ({item}) => {
        const {paciente,fecha} = item
        const formateoFecha = fecha => {
            const nuevaFecha = new Daate (fecha)
            const opciones = {
                 weekday: 'long',
                 year  :'numeric',
                 month:'long',
                    day:'numeric',
             }    

        return nuevaFecha.toLocaleDateString('es-ES',opciones)
        }
  return (

    <View>
        <Text> {paciente}</Text>
        <Text> {formateoFecha(fecha)}</Text>


    </View>
  )
 }

export default Panciente
  
