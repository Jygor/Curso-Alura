import { StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from './src/componentes/telas/cesta/index';
import mock from "./src/mocks/cesta"


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Cesta {...mock}/>
      <StatusBar />
    </SafeAreaView>
  );
}