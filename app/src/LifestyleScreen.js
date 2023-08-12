import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { makeCall } from './Api'

export default function LifestyleScreen ({
  navigation,
  selectedAlcoholStatus,
  setAlcoholStatus,
  alcoholFrequency,
  setAlcoholFrequency,
  bmi,
  setBMI,
  fastingGlucose,
  setFastingGlucose,
  selectedHypertensionStatus,
  setHypertensionStatus,
  selectedDiabeticStatus,
  setDiabeticStatus,
  selectedStrokeStatus,
  setStrokeStatus,
  highDensityLipo,
  setHighDensityLipo,
  cholesterol,
  setCholesterol,
  triglycerides,
  setTriglycerides,
  setLifestyleInfoFlag
}) {
  var ages = []
  for (var i = 18; i <= 100; i++) {
    ages.push(<Picker.Item label={i + ''} value={i + ''} key={i + ''} />)
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
        <Text style={styles.headerText}>Lifestyle Info</Text>
        <ScrollView style={styles.mainView}>
          <View style={styles.pickerRow}>
            <Text style={styles.label}>Age</Text>
            <Picker
              selectedValue={selectedAge}
              onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
              style={styles.pickerInput}
            >
              {ages}
            </Picker>
          </View>
          <View style={styles.pickerRow}>
            <Text style={styles.label}>Smoking Status</Text>
            <Picker
              selectedValue={selectedSmokingStatus}
              onValueChange={(itemValue, itemIndex) =>
                setSmokingStatus(itemValue)
              }
              style={styles.pickerInput}
            >
              <Picker.Item label='Never' value='Never' />
              <Picker.Item label='Previous' value='Previous' />
              <Picker.Item label='Current' value='Current' />
            </Picker>
          </View>
          <View style={styles.pickerRow}>
            <Text style={styles.label}>Alcohol Status</Text>
            <Picker
              selectedValue={selectedAlcoholStatus}
              onValueChange={(itemValue, itemIndex) =>
                setAlcoholStatus(itemValue)
              }
              style={styles.pickerInput}
            >
              <Picker.Item label='Never' value='Never' />
              <Picker.Item label='Previous' value='Previous' />
              <Picker.Item label='Current' value='Current' />
            </Picker>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Alcohol Frequency</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setAlcoholFrequency(text)}
              keyboardType='numeric'
            >
              {alcoholFrequency}
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>BMI %</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setBMI(text)}
              keyboardType='numeric'
            >
              {bmi}
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fasting Glucose (in mm/L)</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setFastingGlucose(text)}
              keyboardType='numeric'
            >
              {fastingGlucose}
            </TextInput>
          </View>
          <View style={styles.pickerRow}>
            <Text style={styles.label}>Experiencing Hypertension</Text>
            <Picker
              selectedValue={selectedHypertensionStatus}
              onValueChange={(itemValue, itemIndex) =>
                setHypertensionStatus(itemValue)
              }
              style={styles.pickerInput}
            >
              <Picker.Item label='No' value='No' />
              <Picker.Item label='Yes' value='Yes' />
            </Picker>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Type 2 Diabetic</Text>
            <Picker
              selectedValue={selectedDiabeticStatus}
              onValueChange={(itemValue, itemIndex) =>
                setDiabeticStatus(itemValue)
              }
              style={styles.pickerInput}
            >
              <Picker.Item label='No' value='No' />
              <Picker.Item label='Yes' value='Yes' />
            </Picker>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Experienced Stroke</Text>
            <Picker
              selectedValue={selectedStrokeStatus}
              onValueChange={(itemValue, itemIndex) =>
                setStrokeStatus(itemValue)
              }
              style={styles.pickerInput}
            >
              <Picker.Item label='No' value='No' />
              <Picker.Item label='Yes' value='Yes' />
            </Picker>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>High Density Lipoproteins</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setHighDensityLipo(text)}
              keyboardType='numeric'
            >
              {highDensityLipo}
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Cholesterol Level</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setCholesterol(text)}
              keyboardType='numeric'
            >
              {cholesterol}
            </TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Triglycerides</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setTriglycerides(text)}
              keyboardType='numeric'
            >
              {triglycerides}
            </TextInput>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            setLifestyleInfoFlag(true)
            navigation.dispatch(StackActions.pop(1))
          }}
        >
          <Text style={styles.submitText}>Save Info</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
  headerText: {
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    marginBottom: '3%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink'
  },
  mainView: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: '1%',
    marginBottom: '1%',
    height: 45
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: 45
  },
  label: {
    width: 120
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    flex: 1,
    marginLeft: 7,
    paddingLeft: 5,
    paddingRight: 5
  },
  pickerInput: {
    height: 30,
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  submitButton: {
    backgroundColor: 'fuchsia',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    margin: '5%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: 'white',
    fontSize: 40
  }
})
