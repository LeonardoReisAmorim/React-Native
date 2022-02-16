import React, {Component} from 'react';
import { Text, Button, TextInput, StyleSheet, View } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tipoconta: '',
      n1: '',
      n2: '',
      resposta: '',
    }

    this.tipoconta = this.tipoconta.bind(this);
    this.conta = this.conta.bind(this);
  }

  tipoconta(tipo){
    switch(tipo){
      case 1:
        this.setState({tipoconta: '+'});
        break;
      case 2:
        this.setState({tipoconta: '-'});
        break;
      case 3:
        this.setState({tipoconta: '/'});
        break;
      case 4:
        this.setState({tipoconta: '*'});
        break;
      default:
        this.setState({tipoconta: ''});
        break
    }
  }

  conta(){
    if(this.state.tipoconta==='+'){
      this.setState({resposta: this.state.n1+this.state.n2});
    }
    else if(this.state.tipoconta==='-'){
      this.setState({resposta: this.state.n1-this.state.n2});
    }
    else if(this.state.tipoconta==='/'){
      this.setState({resposta: this.state.n1/this.state.n2});
    }
    else if(this.state.tipoconta==='*'){
      this.setState({resposta: this.state.n1*this.state.n2});
    }
    else{
      this.setState({resposta: ''});
    }
  }

  render(){
    return(
      <View style={style.container_principal}>
        <Text style={style.textoPrincipal}> Meu primeiro App com react native / Calculadora </Text>

        <Text style={style.textoPrincipal}> Digite 1 = soma, 2 = subtração, 3 = divisão, 4 = multiplicação </Text>
        <View style={style.containerInput}>
          <TextInput 
            style={style.inputTipo}
            onChangeText={ (tipo)=> this.tipoconta(parseInt(tipo)) }
          />
        </View>
        

        <View style={style.containerText}>
          <Text style={style.text}>Digite o numero 1</Text> 
          <Text style={style.text}>Digite o numero 2</Text>
        </View>

        <View style={style.containerInput}>
          <TextInput 
            style={style.input}
            onChangeText={(n1) => this.setState({n1: parseInt(n1)})}
          />
          <Text style={style.sinal}>{this.state.tipoconta}</Text>
          <TextInput 
            style={style.input}
            onChangeText={(n2) => this.setState({n2: parseInt(n2)})}
          />
        </View>

        <View style={style.containerButton}>
          <Button 
            title='Clique para realizar a conta'
            onPress={ this.conta }
          />
        </View>

        
          <Text style={style.resposta}>{this.state.resposta}</Text>

        
      </View>
    );
  }
}

const style = StyleSheet.create({
  container_principal: {
    flex: 1
  },
  textoPrincipal: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  containerText:{
    marginTop: 30,
    padding: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    fontSize: 20,
    margin: 20
  },
  input:{
    height: 45,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 20,
    padding: 10
  },
  containerInput:{
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sinal:{
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },
  inputTipo:{
    height: 45,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  containerButton:{
    justifyContent: 'center',
    marginTop: 20,
  },
  resposta:{
    margin: 60,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;