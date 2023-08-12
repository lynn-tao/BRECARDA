import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'

export default function RiskDisplayScreen ({ navigation, riskPrediction }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          You are{' '}
          <Text style={{ color: 'pink', fontWeight: 'bold' }}>
            {riskPrediction}
          </Text>{' '}
          for break cancer.
        </Text>
        {riskPrediction == 'HIGH RISK' ? (
          <Text style={styles.helperText}>
            **Please consult with a medical professional for diagnostic
            screening at your earliest convenience.
          </Text>
        ) : (
          <View />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tinyLogo: {
    width: '100%',
    height: '25%'
  },
  mainText: {
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '10%',
    fontSize: 30
  },
  helperText: {
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '10%',
    fontSize: 20
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

