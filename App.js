import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Home: SearchScreen
},
  {
    intialRouteName: 'Home',
    defaultNavigationOptions: {
      title : 'Get Foody'
    }
  }
)

export default createAppContainer(navigator);