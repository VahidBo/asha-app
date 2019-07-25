/**
 * @format
 */

import {
  Navigation
} from 'react-native-navigation';
import App from './App';
import Home from './src/Components/Home';

const homeIcon = require('./src/Asset/Images/home_icon.png');
const profileIcon = require('./src/Asset/Images/account_icon.png');
const searchIcon = require('./src/Asset/Images/search_icon.png');

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
                topBar: {
                  visible: true,
                  animate: false, // Controls whether TopBar visibility changes should be animated
                  hideOnScroll: true,
                  leftButtonColor: 'black',
                  rightButtonColor: 'black',
                  drawBehind: false,
                  testID: 'topBar',
                  title: {
                    text: 'ASHA',
                    // fontSize: 14,
                    color: 'black',
                    alignment: 'center',
                    // fontFamily: 'Helvetica',
                    // component: {
                    //   name: 'example.CustomTopBarTitle',
                    //   alignment: 'center'
                    // }
                  },
                  background: {
                    color: '#ffffff',
                    // component: {
                    //   name: 'example.CustomTopBarBackground'
                    // }
                  }
                },
                bottomTab: {
                  text: 'Home',
                  icon: homeIcon,
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
                  icon: searchIcon,
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            component: {
              name: 'SEARCH_PAGE',
              options: {
                bottomTab: {
                  text: 'profile',
                  icon: profileIcon,
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          }
        ],
      },
    },
  });
})