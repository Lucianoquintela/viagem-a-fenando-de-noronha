import {View,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
      <Text style={styles.botao}>Reserve sua Viagem</Text>
  

    </View>
  )
}



const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'lightblue',
    color: 'blue',
    fontWeight: 'bold',
    height: 60,
    fontSize: 22,
    
  
    margin: 10,
  

     
   padding:14,
   textAlign:'center',
},


})