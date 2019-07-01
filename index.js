/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './App';
import Home from './src/Components/Home';

const image = require('./src/Asset/Images/icon.png');

Navigation.registerComponent(`HOME_PAGE`, () => Home);
Navigation.registerComponent(`SEARCH_PAGE`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: 'HOME_PAGE',
              },
            }],
            options: {
              bottomTab: {
                text: 'Home',
                icon: image,
                testID: 'FIRST_TAB_BAR_BUTTON',
              },
            },
          },
        },
          {
            component: {
              name: 'SEARCH_PAGE',
              options: {
                bottomTab: {
                  text: 'Search',
                  icon: image,
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          }],
      },
    },
  });
});
