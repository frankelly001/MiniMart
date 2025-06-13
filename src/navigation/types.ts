import {NavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabParamList} from './bottom-tab/type';

export type RootStackParamList = {
  BOTTOM_TAB: {screen?: keyof BottomTabParamList};
  PRODUCT_DETAILS: {productId: string};
};

export type GeneralNavigationProp =
  NavigationProp<ReactNavigation.RootParamList>;

export type GeneralScreenProps<T extends keyof ReactNavigation.RootParamList> =
  {
    navigation: NavigationProp<ReactNavigation.RootParamList, T>;
    route: RouteProp<Omit<ReactNavigation.RootParamList, ''>, T>;
  };

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList, RootStackParamList {}
  }
}
