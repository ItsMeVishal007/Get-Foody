import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Home: HomeScreen
},
  {
    intialRouteName: 'Home',
    defaultNavigationOptions: {
      title : 'Get Foody'
    }
  }
)

export default createAppContainer(navigator);