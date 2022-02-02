import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styled from 'styled-components';
import HomeItemsComponents from '../components/HomeItemsComponents';
import { Button } from 'react-native';
import biometricAuth from '../utils/local-authentication';


const Container = styled.View`
  height: 100%;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  
  const authLocal = async()=>{
    if(await biometricAuth()){
      navigation.navigate('User');
    }
  }
  return (
    <Container>
      <Button
       title="Login"
       color="#1e2d3e"
       onPress={authLocal}
       />
      <HomeItemsComponents />
    </Container>
  );
}
