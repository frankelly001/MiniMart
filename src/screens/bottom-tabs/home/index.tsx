import {EmptyCard, ProductCard} from '@/components/cards';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import products from '@/mocks/products';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import {formatListData} from '@/utils/helpers';
import React, {FunctionComponent} from 'react';
import {FlatList} from 'react-native';

const HomeScreen: FunctionComponent<GeneralScreenProps<'HOME'>> = ({
  navigation,
}) => {
  return (
    <AppScreen
      isScrollable={false}
      disableBottomSafeArea={false}
      ScreenHeader={<AppScreenHeader title="Technology" showInput />}>
      <FlatList
        data={formatListData(products, 2)}
        style={{
          backgroundColor: '#FBFBFB',
          paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
          paddingVertical: wp(8),
        }}
        contentContainerStyle={{gap: wp(16)}}
        columnWrapperStyle={{gap: wp(8)}}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item: {id, empty, ...rest}}) =>
          empty ? (
            <EmptyCard containerStyles={{padding: wp(12)}} />
          ) : (
            <ProductCard
              {...rest}
              onPress={() =>
                navigation.navigate(routesNames.PRODUCT_DETAILS, {
                  productId: id,
                })
              }
            />
          )
        }
      />
    </AppScreen>
  );
};

export default HomeScreen;
