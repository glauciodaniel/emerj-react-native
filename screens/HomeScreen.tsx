import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styled from 'styled-components/native';
import HomeItemsComponents from '../components/HomeItemsComponents';
import { Button } from 'react-native';
import biometricAuth from '../utils/local-authentication';
import { InputValueContext } from '../context/InputValueContext';
import { useContext, useEffect } from 'react';


const Container = styled.View`
  height: 100%;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
const {state, dispatch} = useContext(InputValueContext);
  

  const authLocal = async()=>{
    if(await biometricAuth()){
      navigation.navigate('User');
    }
  }
  return (
    <Container>
      <View>
        <Text>Valor: {state.inputValue}</Text>
      </View>
      <Button
       title="Login"
       color="#1e2d3e"
       onPress={authLocal}
       />

      <Button
       title="Mudar valor"
       color="#1e2d3e"
       onPress={()=> dispatch({type:"SET_INPUT_VALUE_TO_200"}) }
       />

      
      <HomeItemsComponents />
    </Container>
  );
}
