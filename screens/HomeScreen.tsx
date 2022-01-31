import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styled from 'styled-components';
import HomeItemsComponents from '../components/HomeItemsComponents';


const Container = styled.View`
  height: 100%;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <Container>
      
      <HomeItemsComponents />
    </Container>
  );
}
