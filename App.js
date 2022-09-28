import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import styles from './Styles';

//https://youtube.com/shorts/OxuigR8E3IQ?feature=share

export default function App() {

  const [weight, setWeight]= useState(0);
  const [bottles, setBottles]= useState(0);
  const [time, setTime]= useState(0);
  const [gender, setGender]= useState(0);
  const [promilles, setPromilles]= useState(0);

  const genders =[
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const amount = [
    {label: '1 bottle', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7},
    {label: '8 bottles', value: 8},
    {label: '9 bottles', value: 9},
    {label: '10 bottles', value: 10},
    {label: '11 bottles', value: 11},
    {label: '12 bottles', value: 12},
    {label: '13 bottles', value: 13},
    {label: '14 bottles', value: 14},
    {label: '15 bottles', value: 15},
    {label: '16 bottles', value: 16},
    {label: '17 bottles', value: 17},
    {label: '18 bottles', value: 18},
    {label: '19 bottles', value: 19},
    {label: '20 bottles', value: 20}
  ];

  const hours = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
    {label: '6 hours', value: 6},
    {label: '7 hours', value: 7},
    {label: '8 hours', value: 8},
    {label: '9 hours', value: 9},
    {label: '10 hours', value: 10},
    {label: '11 hours', value: 11},
    {label: '12 hours', value: 12},
    {label: '13 hours', value: 13},
    {label: '14 hours', value: 14},
    {label: '15 hours', value: 15},
    {label: '16 hours', value: 16},
    {label: '17 hours', value: 17},
    {label: '18 hours', value: 18},
    {label: '19 hours', value: 19},
    {label: '20 hours', value: 20}
  ];
  
  const calculate = () =>{
    console.log(time)
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let promillesMale = gramsLeft / (weight * 0.7);
    let promillesFemale = gramsLeft / (weight * 0.6);
    
    if (gender === 'male'){
      setPromilles(promillesMale);
      if(promillesMale < 0 ){
        setPromilles(0);
      }
    }
    if (gender === 'female'){
      setPromilles(promillesFemale);
      if(promillesFemale < 0 ){
        setPromilles(0);
      }
    }
    if(weight.length == 0) {
      alert('Set the weight please');
  } };

  return (
    <View style={styles.container}>
    <ScrollView>
    <StatusBar style="auto" />

    <Text style={styles.title}>Alcometer</Text>

    <View>
      <Text style={styles.subTitle}>Weight</Text>
      <TextInput style={styles.Input}
      value = {weight} 
      onChangeText={setWeight}
      placeholder="Set weight"
      keyboardType='number-pad'/>
    </View>

    <View>
      <Text style={styles.subTitle}>Bottles</Text>
      <Picker style={styles.picker}
      onValueChange={(itemValue) => setBottles(itemValue)}
      selectedValue={bottles}>
        {amount.map((amount,index)=>(
          <Picker.Item key={index} label={amount.label} 
          value={amount.value}/>
          ))
        }
      </Picker>
    </View>

    <View style={styles.field}>
      <Text style={styles.subTitle}>Time</Text>
      <Picker style={styles.picker}
      onValueChange={(itemValue) => setTime(itemValue)}
      selectedValue={time}>
      {hours.map((hours,index)=>(
        <Picker.Item key={index} label={hours.label} 
          value={hours.value}/>
          ))
        }
      </Picker>
    </View>

    <View style={styles.field}>
      <Text style={styles.subTitle}>Gender</Text>
      <RadioForm 
      style={styles.radio}
      radio_props={genders}
      initial={0}
      onPress={(value) => {setGender(value)}}
      />
      <Text style={styles.subTitle}>Promilles</Text>
      <Text Text style = { [promilles <= 0.5 ? styles.green : promilles >= 0.5 && promilles <= 1.2 ? styles.yellow : styles.red ]}>{promilles.toFixed(2)}</Text>
    </View>
    <Button onPress={calculate} title='Calculate'></Button>
    </ScrollView>
  </View>
);
};