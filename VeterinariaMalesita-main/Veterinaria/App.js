import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import Formulario from './componets/Formulario';
import Panciente from './componets/Panciente';

const App = () =>{
//Aqui deben de ir los hooks

const [modalVisible, setModalVisible] = useState(false)
const [pacientes, setPacientes] = useState([])

const cerrarModal = () => {
  setModalVisible(false)
} 
  return(
    <SafeAreaView style={style.contains}>
      <Text style={style.title}>Administración de {' '}</Text>
      <Text style={style.title}>veterinaria</Text>

      <Pressable
        style = {style.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)} //onPress propiedad 
      >
        <Text
          style = {style.btnTextoNuevaCita}
        > CREAR CITA</Text>
      </Pressable>

      {pacientes.length === 0 ?   //Traer el objeto de paciente y manejamos un SI resumido 
      <Text style = {style.noPacientes} > NO HAY CITAS </Text>:
      <FlatList                   // flatlist
        style ={style.listado} 
        data = {pacientes}
        keyExtractor = {item => item} // Llave para extraer informacion no se cambia el nombre de item
        renderItem ={(item)=> {      //

          return (
            <Panciente
              item = {item}
            /> 
          )
        }}

      />

      }
      

      <Formulario
        modalVisible = {modalVisible}
        setModalVisible = {setModalVisible}  
        pacientes = {pacientes}   
        setPacientes ={setPacientes}
      />      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  contains:{
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  title:{
    fontSize: 25,
    color:'#5195FF',
    textAlign: 'center',
  },
  label: {
    color: '#5195FF',  
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
},
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10
  },

  btnNuevaCita:{

  },
  btnTextoNuevaCita:{
    
  },
  noPacientes:{

  },
  listado:{

  },
});
export default App;
