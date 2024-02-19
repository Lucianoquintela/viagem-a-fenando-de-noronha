import {SafeAreaView,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <SafeAreaView>
      <Text style={styles.titulo}>Bem-vindo a Fernando de Noronha</Text>
      <Text style={styles.texto}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  titulo: {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    height: 60,
    textAlign: 'center',
    padding:17,
},

 texto: {
    margin: 10,
    marginTop:-2,
        marginBottom:20,
  } 

})