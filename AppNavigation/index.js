
import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import MerchantStack from 'containers/Merchant/Drawer';
import ProductStack from 'containers/Product/Drawer';
import Drawer from './Drawer';



// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: Login }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})


// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: Drawer },
  productStack: { screen: ProductStack },
  merchantStack: { screen: MerchantStack },
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})


export default PrimaryNav;