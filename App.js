import React, {Component} from "react"
import { View, Text, Image } from 'react-native'; 
class App extends Component{

    render(){

        let nome = 'Leocassio';

        return(
            <View>
                <Text>Olá Mundo!!!!</Text>
                <Text>Meu Quarto App!!!</Text>    
                <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
                    Programar é Bom demais!
                </Text>

        <Text style={{ fontSize: 50 }}> {nome} </Text>

        <Jobs largura={10} altura={200} fulano="Jobs" />

      </View>
        );
    }
}

export default App;

class Jobs extends Component{
    render(){
        
    
        //fonte:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.depositphotos.com%2Fstock-photos%2Ffutebol.html&psig=AOvVaw0T-Ggt2XkWBELtqhAWZ99h&ust=1625080709827000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjTscTHvfECFQAAAAAdAAAAABAN';

      let img = './img.jpg'
      return(
        <View>
          <Image 
            source={{ uri: img }}
            style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text> {this.props.fulano} </Text>
       </View>
      );
    }
  }