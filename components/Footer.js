import {SafeAreaView,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <SafeAreaView>
      <Text style={styles.creditos}>2024 Fernando de Noronha Turismo</Text>
  

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  creditos: {

   textAlign: 'center'
},


})