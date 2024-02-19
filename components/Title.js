import {View,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
      <Text style={styles.titulo}>Bem-vindo a Fernando de Noronha</Text>
      <Text style={styles.texto}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  titulo: {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    height: 90,
  
   padding:10,
   textAlign:'center',
   
   
    
},

 texto: {
    margin: 10,
    marginTop:-2,
    marginBottom:20,

  },



})