import React, {useState}from 'react'
import { SafeAreaView, 
         ScrollView, 
         TextInput,
         View, 
         Modal,
         Text, 
         DatePicker, 
         StyleSheet, 
         Pressable,
         Alert } from 'react-native'  
import DatePicker from 'react-native-date-picker'

const Formulario = (modalVisible,setModalVisible) => {
  const [paciente, setPaciente]  =useState ('')
  const [propietario, setPropietario]  =useState ('')
  const [telefono, setTelefono]  =useState ('')
  const [sintomas, setSintomas]  =useState ('')
  const [fecha, setFecha]  =useState (new Date ()) //Se maneja diferente poner New Date

  const SavePacienteHandle = ()=> {
    if ([pacioente,propietario,telefono,fecha,sintomas].includes('')) { //.includes funcion que sea diferente a vacio 
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios'
        )
    return        
    }
        const nuevoPaciente = { //objeto llamado nuevo paciente aca guardara todo 
            id:Date.now,
            paciente,
            propietario,
            telefono,
            sintomas,
            fecha
        }
        setPaciente ([...paciente,nuevoPaciente])
        setModalVisible (!modalVisible)
        setPaciente ('')
        setPropietario ('')
        setTelefono ('')
        setFecha(new Date ())
        setSintomas('')
  }
  const CerrarModal=()=>{

  }
  return ( //Modal que esta en la principal, aca todo va dentro del modal 
    <Modal
        animationType='slide'
        visible =  {modalVisible} 
    > 
      <SafeAreaView style={style.contenido}>
        <ScrollView>  // ScrollView es para que suba y baje
          <View>
            <Text style={style.label}>Nombre del Paciente</Text>
            <TextInput 
                style = {style.input}
                placeholder ='Nombre del paciente'
                placeholderTextColor={'#666'}
                value={paciente} // poner el valor que recibira
                onChangeText={setPaciente} //captura y cambia el valor 
            />
          </View>

          <View>
            <Text style={style.label}>Nombre del Propietario</Text>
            <TextInput 
                style = {style.input}
                placeholder ='Nombre del propietario'
                placeholderTextColor={'#666'}
                value={propietario} 
                onChangeText={setPropietario}
            />
          </View>

          <View>
            <Text style={style.label}>Teléfono Propietario</Text>
            <TextInput 
                style = {style.input}
                placeholder ='Telefono del Propietario'
                placeholderTextColor={'#666'}
                keyboardType='number-pad'//Solo para que salga numeros con esta propiedad
                maxLength={10} //Maximo numero de caracteres
                value={sintomas} 
                onChangeText={setSintomas}
                
            />
          </View>

          <View>
            <Text style={style.label}>Fecha de alta</Text>
            <View style={style.fechaContenedor}>
                <DatePicker 
                    date={fecha} //Propiedades del Date Picker
                    locale='es'
                    modo = 'Date'
                    onDateChange = {(date)=> setFecha(date)} // se maneja con una ryfuncion para que traiga la fecha
                />
            </View>
          </View>

          <View>
            <Text style={style.label}>Sintomas</Text>
            <TextInput 
                 style = {[style.input, style.inputSintomas]}
                 placeholder ='Sintomas'
                 placeholderTextColor={'#666'}
                 numberOfLines={6}
            />
          </View>
          <View>
            <Pressable style={style.btnGuardar}
                onPress={SavePacienteHandle}// La funcion SavePacienteHandle se crea debajo de los HOOKS
            >
              <Text>GUARDAR</Text>
            </Pressable>

            <Pressable style={style.btnCancelar}
                onLongPress={() => setModalVisible = (!modalVisible)}
            >
              <Text>CANECELAR</Text>
            </Pressable>
            
            <Pressable style={style.btnGuardar}
                onPress={() => setModalVisible = (!modalVisible)}
            >
              <Text>EDITAR</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const style = StyleSheet.create({
  contenido:{
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo:{},
  tituloBold:{},
  campo:{},
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  label:{
    color: '#FFF',  
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  input:{
    backgroundColor:'FFF',
    padding: 15,
    borderRadius:10,
  },
  inputSintomas:{
    fontWeight:'100'
  },
  btnGuardar:{
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal:30,
    marginVertical:50,
    paddingVertical: 10,
    width: 'auto'
  },
  btnTextoGuardar:{},
});
export default Formulario;

//rafce 
//ffc crear una funcion vacia
