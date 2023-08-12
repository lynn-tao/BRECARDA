import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { makeCall } from './Api'

export default function MainScreen ({
  navigation,
  lifestyleInfoFlag,
  geneticFile,
  setGeneticFile,
  selectedAge,
  selectedSmokingStatus,
  selectedAlcoholStatus,
  alcoholFrequency,
  bmi,
  fastingGlucose,
  selectedHypertensionStatus,
  selectedDiabeticStatus,
  selectedStrokeStatus,
  highDensityLipo,
  cholesterol,
  triglycerides,
  setRiskPrediction
}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <View style={styles.mainView}>
        <Text style={styles.helperText}>
          Welcome to BRECARDA! In order to generate a risk prediction, we need
          some information from you:
        </Text>
        <View style={styles.dataInputView}>
          <TouchableOpacity
            style={styles.dataButton}
            onPress={() => {
              navigation.navigate('Lifestyle', {})
            }}
          >
            {lifestyleInfoFlag ? (
              <Text>Data ready</Text>
            ) : (
              <Text>Provide data</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.dataText}>Lifestyle Info</Text>
        </View>
        <View style={styles.dataInputView}>
          <TouchableOpacity
            style={styles.dataButton}
            onPress={() => {
              DocumentPicker.getDocumentAsync().then(file => {
                setGeneticFile(file.uri)
              })
            }}
          >
            {geneticFile ? <Text>Data ready</Text> : <Text>Provide data</Text>}
          </TouchableOpacity>
          <Text style={styles.dataText}>Genetic Info</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text
          style={styles.submitText}
          onPress={() => {
            if (!geneticFile || !lifestyleInfoFlag) {
              return
            }
            makeCall(
              selectedAge,
              selectedSmokingStatus,
              selectedAlcoholStatus,
              alcoholFrequency,
              bmi,
              fastingGlucose,
              selectedHypertensionStatus,
              selectedDiabeticStatus,
              selectedStrokeStatus,
              highDensityLipo,
              cholesterol,
              triglycerides,
              geneticFile
            ).then(riskPrediction => {
              setRiskPrediction(riskPrediction)
              navigation.navigate('RiskDisplay', {})
            })
          }}
        >
          Predict Risk
        </Text>
      </TouchableOpacity>
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
  },
  dataButton: {
    backgroundColor: 'pink',
    marginTop: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 60,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataText: {
    marginLeft: '5%',
    marginTop: '5%',
    fontSize: 20,
    width: 120
  },
  submitButton: {
    backgroundColor: 'fuchsia',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    margin: '5%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: 'white',
    fontSize: 40
  }
})
