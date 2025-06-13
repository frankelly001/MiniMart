import {EmptyCard, ProductCard} from '@/components/cards';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import products from '@/mocks/products';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import {formatListData} from '@/utils/helpers';
import React, {FunctionComponent, useState} from 'react';
import {FlatList} from 'react-native';
import {homeScreenStyles} from './styles';

const HomeScreen: FunctionComponent<GeneralScreenProps<'HOME'>> = ({
  navigation,
}) => {
  const styles = homeScreenStyles();
  const [value, setValue] = useState('');
  return (
    <AppScreen
      isScrollable={false}
      disableBottomSafeArea={false}
      ScreenHeader={
        <AppScreenHeader title="Technology" search={{value, setValue}} />
      }>
      <FlatList
        data={formatListData(
          products.filter(el =>
            el.name.toLowerCase().trim().includes(value.toLowerCase().trim()),
          ),
          2,
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: wp(16), paddingBottom: wp(20)}}
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
