import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scenes from '../Scenes';

const navigationOptions = { gesturesEnabled: false };

const MainNavigator = () =>
	createStackNavigator(
		{
			// TabBar: { screen: TabBar, navigationOptions },
			HomeScene: { screen: Scenes.HomeScene, navigationOptions }
		},

		{
			initialRouteName: 'HomeScene',
			headerMode: 'none',
			cardStyle: { backgroundColor: 'transparent' }
		}
	);

export default createAppContainer(MainNavigator());
