import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Scan from 'containers/Scan';
import Setting from 'containers/Setting';
import Transfer from 'containers/Transfer';
import Bundled from 'containers/Bundled';
import Slider from 'components/Slider';
import { Color } from 'common';
import OptionRight from './OptionRight';
class NavigationDrawerStructure extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginState: true
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.state.loginState === true && 
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <FontAwesomeIcon icon={ faBars } style={{color: Color.white, paddingLeft: 20, paddingRight: 20}}/>
          </TouchableOpacity>
        }
        
      </View>
    );
  }
}

const Scan_StackNavigator = createStackNavigator({
  First: {
    screen: Scan,
    navigationOptions: ({ navigation }) => ({
      title: 'Scan',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Setting_StackNavigator = createStackNavigator({
  Second: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      title: 'Setting',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Transfer_StackNavigator = createStackNavigator({
  Third: {
    screen: Transfer,
    navigationOptions: ({ navigation }) => ({
      title: 'Transfer',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Bundled_StackNavigator = createStackNavigator({
  Fourth: {
    screen: Bundled,
    navigationOptions: ({ navigation }) => ({
      title: 'Bundled',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Drawer = createDrawerNavigator({
  Scan: {
    screen: Scan_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Scan',
    },
  },
  Transfer: {
    screen: Transfer_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Transfer',
    },
  },
  Setting: {
    screen: Setting_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Setting',
    },
  },
  Bundled: {
    screen: Bundled_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Bundled',
    },
  },
}, {
  contentComponent: Slider
});

export default Drawer;