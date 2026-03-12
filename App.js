import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ 
        backgroundColor: '#eb5e0c', 
        height: '12%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'monospace' }}>Streaming</Text>
        <Text style={{ color: 'white', fontSize: 12, marginLeft: 8, marginTop: 10, fontFamily: 'sans-serif-condensed' }}>Para você</Text>
      </View>

      <View style={{ backgroundColor: '#ff9f31', height: '4%' }}>
      </View>

      <View style={{ 
        height: '70%', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 50
      }}>
        <Image 
          source={require('./img/myfamily.png')} 
          style={{ width: 180, height: 180, borderRadius: 90, marginBottom: 40 }} 
        />
        <Text style={{ fontSize: 18, textAlign: 'center', color: '#333333', fontWeight: 'bold', lineHeight: 28, fontFamily: 'cursive' }}>
          Seja independente, tenha o controle total das suas séries. Dê um adeus a Netflix!
        </Text>
      </View>

      <View style={{ backgroundColor: '#eb5e0c', height: '15%' }}>
      </View>

    </View>
  );
}

export default App;