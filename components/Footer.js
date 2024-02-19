import {View,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
      <Text style={styles.creditos}>2024 Fernando de Noronha Turismo</Text>
  

    </View>
  )
}


const styles = StyleSheet.create({
  creditos: {

   textAlign: 'center',
   marginTop:10,
},


})