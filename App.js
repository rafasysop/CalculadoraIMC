import * as React from 'react';
import { Text,  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    //valores de variaveis global
    peso: 80,
    altura: 1.67,
    imc: 0,
    legenda: 'indeterminado',
    cor: '#ccc'
  }
// calculo do imc = peso / altura 2
  calcularIMC = () => {

    // altura replace (',','.')


      const resultadoCalc = this.state.peso / (this.state.altura * this.state.altura);
     

      this.setState({
        imc: Math.ceil(resultadoCalc),
      });
    //imprime o resultado da legenda
     if(resultadoCalc < 18.5){
        this.setState({
        legenda: 'Magro' ,
        cor: '#cc0000'       
      });

      } else if(resultadoCalc < 24.9){
        this.setState({
        legenda: 'Normal' , 
        cor: '#00FF00'        
      });
      } else if(resultadoCalc < 29.9){
        this.setState({
        legenda: 'Sobrepeso' ,
        cor: '#FFA500'         
      });
      } else if(resultadoCalc < 39.9){
        this.setState({
        legenda: 'Obesidade' ,
        cor: '#FF3500'         
      });
      } else if(resultadoCalc > 40){
        this.setState({
        legenda: 'Obesidade Grave'  ,
        cor: '#8B0000'       
      });
      }

  }
  
  
  render(){
      
    



    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        <View style={[styles.resultado, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultadoText}>{this.state.imc}</Text>
          <Text style={styles.resultadoText2}>{this.state.legenda}</Text>
        </View>

        <View style={styles.painel}>
          <TextInput label='Peso' style={styles.peso} onChangeText={valor => {
            this.setState({
              peso: valor.replace(',','.')       
            });
          }} />
          <TextInput label='Altura' style={styles.altura} onChangeText={valor => {
            this.setState({
              altura: valor.replace(',','.')    
            });
          }} />
          <Button style={styles.calcular} mode='contained' onPress={this.calcularIMC} > Calcular</Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  legenda: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  resultado: {
    
    padding: 8,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
    width: 160,
  },
 
  resultadoText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 28,
  },
   resultadoText2: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 22,
  },
   painel: {
    

  },
  peso: {
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
    borderRadius: 8
    
  },
   altura: {
     marginVertical: 10,
     width: 200,
     alignSelf: 'center',
     borderRadius: 8

  },
calcular:{
  borderRadius: 8,
  fontWeight: 'bold',
  marginVertical: 10,
     width: 130,
     alignSelf: 'center'
}

});
