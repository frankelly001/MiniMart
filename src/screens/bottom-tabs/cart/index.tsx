import {AppButton} from '@/components/buttons';
import {CartCard} from '@/components/cards';
import {AppText} from '@/components/common';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import products from '@/mocks/products';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import React, {FunctionComponent} from 'react';
import {FlatList, View} from 'react-native';

const CartScreen: FunctionComponent<GeneralScreenProps<'CART'>> = ({
  navigation,
}) => {
  return (
    <AppScreen
      isScrollable={false}
      disableBottomSafeArea={false}
      ScreenHeader={<AppScreenHeader title="Your Cart" />}
      ScreenFooter={
        <View
          style={{
            paddingVertical: wp(16),
            paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
            backgroundColor: '#ffffff',
          }}>
          <AppButton text="Checkout ($2110)" />
        </View>
      }>
      <FlatList
        data={products}
        style={{
          backgroundColor: '#FBFBFB',
          paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
          paddingVertical: wp(8),
        }}
        ListFooterComponent={
          <View style={{gap: wp(15)}}>
            <AppText text="Order Info" weight="Bold" size={14} />
            {[
              {label: 'Subtotal', value: '$2100'},
              {label: 'Shipping', value: '$10'},
              {label: 'Total', value: '$2110', isTotal: true},
            ].map(el => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <AppText text={el.label} weight="Medium" size={12} />
                <AppText
                  text={el.value}
                  weight={el.isTotal ? 'Bold' : 'Medium'}
                  size={el.isTotal ? 14 : 12}
                />
              </View>
            ))}
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: wp(16)}}
        keyExtractor={item => item.id}
        renderItem={({item: {id, ...rest}}) => (
          <CartCard
            {...rest}
            onPress={() =>
              navigation.navigate(routesNames.PRODUCT_DETAILS, {
                productId: id,
              })
            }
          />
        )}
      />
    </AppScreen>
  );
};

export default CartScreen;
