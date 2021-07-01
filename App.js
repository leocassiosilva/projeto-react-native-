import { StatusBar } from 'expo-status-bar';
import React, {Component} from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({nome:'Bem Vindo ' + texto});
    }else{
      this.setState({nome:''});
    }
    
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Informe seu nome" underlineColorAndroid="transparent" onChangeText={this.pegaNome}>
                    
        </TextInput>
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor:'#222',
    margin:30,
    fontSize:20,
    padding:10
  }, 
  texto:{
    textAlign:'center',
    fontSize:25
  }
});

export default App;