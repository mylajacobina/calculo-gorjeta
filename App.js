import React, {useState} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


const Tela = styled.View`
  flex: 1;
  aling-items: center;
`

const Titulo = styled.Text`
  margin-top: 30px;
  fonte-size: 25px;
 
`

const Input = styled.TextInput`
  width: 90px;
  background-color: #eee;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 10px;

`

const BotaoCalcular =  styled.Button`
  margin-top: 20px;
`

const Resultado = styled.View`
  background-color: #eee;
  width: 100px;
  margin-top: 10px;
  justify-content: center;
  aling-items: center;

`

const TituloResultado = styled.Text`
   fonte-size: 20px;
   margin-top: 15px; 
`

const ItemResultado = styled.Text`
  fonte-size: 16px;
`


  export default function App() {
    const [conta, alteraConta] = useState('123');
    const [gorjeta, alteraGorjeta] = useState(0);


    return(
      <Tela>
        <Titulo>Calculadora de Gorjeta</Titulo>
        <Input keyboardType="numeric" placeholder="Digite o valor da conta" value={conta} onChangeText={ (textoDigitado) => {alteraConta(textoDigitado)} }/>
        <BotaoCalcular title="Calcular 10%" onPress={ () => {} } />
        <Resultado>
          <TituloResultado>Valor da Conta</TituloResultado>
          <ItemResultado> {conta} </ItemResultado>

          <TituloResultado>Valor da Gorjeta</TituloResultado>
          <ItemResultado> {conta*0.1} </ItemResultado>

          <TituloResultado>Valor Total</TituloResultado>
          <ItemResultado> {(conta*1.1).toFixed(2)} </ItemResultado>
        </Resultado>  

      </Tela>  
    )
  



}