import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import CheckIn from '~/pages/CheckIn';

import Help from '~/pages/Help';
import Question from '~/pages/Help/Question';
import NewQuestion from '~/pages/Help/NewQuestion';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            CheckIn,
            Help: {
              screen: createSwitchNavigator(
                {
                  Help,
                  Question,
                  NewQuestion,
                },
                {
                  initialRouteName: 'Help',
                }
              ),
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="help" size={20} color={tintColor} />
                )
              }
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#000',
              inactiveTintColor: '#666',
              labelStyle: {
                fontSize: 14,
              },
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'SignIn',
      }
    )
  );
