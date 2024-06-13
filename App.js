import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllExpenses from './screens/AllExpense';
import Recent from './screens/Recent';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { View,Text, Image, StyleSheet, Button } from "react-native";
import { Provider } from 'react-redux';
import store from './store';
import CreateExpense from './screens/CreateExpense';
import EditExpense from './screens/EditScreen';
import CustomButton from './components/CustomButton';
import ManageExpenses from './screens/ManageExpenses';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreens = () => {
  return (
         <Tab.Navigator  
          screenOptions={({navigation}) => ({
            headerRight: () => (
              <CustomButton onPress={() => {
                navigation.navigate('ManageExpenses')
              }}>
                <Ionicons name="add" size={24} color="black" />
                <Text>Add</Text>
              </CustomButton>
            )
          })}
         
        
         >
            <Tab.Screen 
              name="AllExpenses" 
              component={AllExpenses} 
              options={{
                tabBarIcon: () => <Ionicons name="calendar" size={24} color="black" />,
              }} 
            />
            <Tab.Screen 
              name="Recent" 
              component={Recent} 
              options={{
                tabBarIcon: () => <MaterialIcons name="pending-actions" size={24} color="black" />,
              }}
            />
          </Tab.Navigator>
  )
}
export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
                options={{
                  headerShown: false,
                }} 
                component={TabScreens} 
                name="Home"
             />
            <Stack.Screen component={EditExpense} name='EditExpense' />
            {/* <Stack.Screen component={CreateExpense} name='CreateExpense' /> */}
            <Stack.Screen component={ManageExpenses} name='ManageExpenses' options={{
              presentation: 'modal'
            }} />

          </Stack.Navigator>
       
      </NavigationContainer>
      </Provider>
  );
}