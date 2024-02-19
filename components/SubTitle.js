import {SafeAreaView,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <SafeAreaView>
      <Text style={styles.subtitulo}>Explore as Maravilhosas Praias</Text>
      <Text style={styles.texto}>Visite as praias de Fenando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  subtitulo: {
    backgroundColor: 'darkorange',
    fontWeight: 'bold',
    color: 'white',
    height: 45,
    textAlign: 'center',
    padding: 10,
    
  },

  texto: {
    margin: 10,
    marginTop:-2,
    marginBottom:15,
  } 
})

