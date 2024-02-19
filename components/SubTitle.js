import {View,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
      <Text style={styles.subtitulo}>Explore as Maravilhosas Praias</Text>
      <Text style={styles.texto}>Visite as praias de Fenando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  subtitulo: {
    backgroundColor: 'darkorange',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
   display:'flex',
    justifyContent:'center',
    alignItems:'center',
      fontSize: 18,

        
   padding:15,
   textAlign:'center',
   
   
    
  },

  texto: {
    margin: 10,
    marginTop:-2,
    marginBottom:15,
  } 
})

