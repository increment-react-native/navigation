import React, { Component } from 'react';
//import react in our code.
import { View, TouchableOpacity } from 'react-native';
// import all basic components
//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerActions,
  SafeAreaView
} from 'react-navigation';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
import Scan from 'containers/Scan';
import Setting from 'containers/Setting';
import Transfer from 'containers/Transfer';
import Bundled from 'containers/Bundled';
import Login from 'containers/Login';
import Slider from 'components/Slider';
import { Color } from 'common'
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  constructor(props){
    super(props);
    this.state = {
      loginState: true
    };
  }
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    // this.props.navigation.closeDrawer();
    // this.props.navigation.dispatch(DrawerActions.closeDrawer());
    // console.warn('sss');
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
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Scan_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Scan,
    navigationOptions: ({ navigation }) => ({
      title: 'Scan',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Setting_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
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
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Transfer_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
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
  //All the screen from the Screen3 will be indexed here
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

const Login_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({
//For React Navigation 3.+
const MyNavigationDrawer = createDrawerNavigator({
  //Drawer Optons and indexing
  Login: {
    //Title
    screen: Login_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Login',
    },
  },
  Scan: {
    //Title
    screen: Scan_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Scan',
    },
  },
  Transfer: {
    //Title
    screen: Transfer_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Transfer',
    },
  },
  Setting: {
    //Title
    screen: Setting_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Setting',
    },
  },
  Bundled: {
    //Title
    screen: Bundled_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Bundled',
    },
  },
}, {
  contentComponent: Slider
});

//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(MyNavigationDrawer);
