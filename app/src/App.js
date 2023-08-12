import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import LifestyleScreen from './LifestyleScreen'
import MainScreen from './MainScreen'
import React, { useState } from 'react'
import RiskDisplayScreen from './RiskDisplayScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  // Variables for lifestyle info
  const [selectedAge, setAge] = useState()
  const [selectedSmokingStatus, setSmokingStatus] = useState()
  const [selectedAlcoholStatus, setAlcoholStatus] = useState()
  const [alcoholFrequency, setAlcoholFrequency] = useState()
  const [bmi, setBMI] = useState()
  const [fastingGlucose, setFastingGlucose] = useState()
  const [selectedHypertensionStatus, setHypertensionStatus] = useState()
  const [selectedDiabeticStatus, setDiabeticStatus] = useState()
  const [selectedStrokeStatus, setStrokeStatus] = useState()
  const [highDensityLipo, setHighDensityLipo] = useState()
  const [cholesterol, setCholesterol] = useState()
  const [triglycerides, setTriglycerides] = useState()

  const [geneticFile, setGeneticFile] = useState()
  const [lifestyleInfoFlag, setLifestyleInfoFlag] = useState()
  const [riskPrediction, setRiskPrediction] = useState()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main'>
          {props => (
            <MainScreen
              navigation={props.navigation}
              lifestyleInfoFlag={lifestyleInfoFlag}
              geneticFile={geneticFile}
              setGeneticFile={setGeneticFile}
              selectedAge={selectedAge}
              selectedSmokingStatus={selectedSmokingStatus}
              selectedAlcoholStatus={selectedAlcoholStatus}
              alcoholFrequency={alcoholFrequency}
              bmi={bmi}
              fastingGlucose={fastingGlucose}
              selectedHypertensionStatus={selectedHypertensionStatus}
              selectedDiabeticStatus={selectedDiabeticStatus}
              selectedStrokeStatus={selectedStrokeStatus}
              highDensityLipo={highDensityLipo}
              cholesterol={cholesterol}
              triglycerides={triglycerides}
              setRiskPrediction={setRiskPrediction}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='Lifestyle'>
          {props => (
            <LifestyleScreen
              navigation={props.navigation}
              selectedAge={selectedAge}
              setAge={setAge}
              selectedSmokingStatus={selectedSmokingStatus}
              setSmokingStatus={setSmokingStatus}
              selectedAlcoholStatus={selectedAlcoholStatus}
              setAlcoholStatus={setAlcoholStatus}
              alcoholFrequency={alcoholFrequency}
              setAlcoholFrequency={setAlcoholFrequency}
              bmi={bmi}
              setBMI={setBMI}
              fastingGlucose={fastingGlucose}
              setFastingGlucose={setFastingGlucose}
              selectedHypertensionStatus={selectedHypertensionStatus}
              setHypertensionStatus={setHypertensionStatus}
              selectedDiabeticStatus={selectedDiabeticStatus}
              setDiabeticStatus={setDiabeticStatus}
              selectedStrokeStatus={selectedStrokeStatus}
              setStrokeStatus={setStrokeStatus}
              highDensityLipo={highDensityLipo}
              setHighDensityLipo={setHighDensityLipo}
              cholesterol={cholesterol}
              setCholesterol={setCholesterol}
              triglycerides={triglycerides}
              setTriglycerides={setTriglycerides}
              setLifestyleInfoFlag={setLifestyleInfoFlag}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='RiskDisplay'>
          {props => <RiskDisplayScreen riskPrediction={riskPrediction} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}

