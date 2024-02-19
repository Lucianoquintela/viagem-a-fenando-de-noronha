import {SafeAreaView,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <SafeAreaView>
      <Text style={styles.botao}>Reserve sua Viagem</Text>
  

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'lightblue',
    color: 'blue',
    fontWeight: 'bold',
    height: 45,
    textAlign: 'center',
    padding: 10,
    margin: 10,
},


})