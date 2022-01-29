import { StyleSheet } from 'react-native';

import UserInfo from '../components/UserInfo';
import { Text, View } from '../components/Themed';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuário</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <UserInfo path="/screens/UserScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
