import {AppButton} from '@/components/buttons';
import {CartCard} from '@/components/cards';
import {AppText} from '@/components/common';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {StoreContext} from '@/providers/store/context';
import {wp} from '@/resources/config';
import React, {FunctionComponent, useContext} from 'react';
import {FlatList, View} from 'react-native';
import {cartScreenStyles} from './styles';

const CartScreen: FunctionComponent<GeneralScreenProps<'CART'>> = ({
  navigation,
}) => {
  const styles = cartScreenStyles();
  const {
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductFromCart,
    cart,
  } = useContext(StoreContext);

  const total = cart.reduce((tot, item) => {
    return tot + item.quantity * item.unitPrice;
  }, 0);
  return (
    <AppScreen
      isScrollable={false}
      disableBottomSafeArea={false}
      ScreenHeader={<AppScreenHeader title="Your Cart" />}
      ScreenFooter={
        !cart.length ? undefined : (
          <View style={styles.footer}>
            <AppButton text={`Checkout ($${total + 10})`} />
          </View>
        )
      }>
      <FlatList
        data={cart}
        style={styles.list}
        ListFooterComponent={
          !cart.length ? undefined : (
            <View style={{gap: wp(15)}}>
              <AppText text="Order Info" weight="Bold" size={14} />
              {[
                {
                  label: 'Subtotal',
                  value: '$' + total,
                },
                {label: 'Shipping', value: '$10'},
                {label: 'Total', value: '$' + (total + 10), isTotal: true},
              ].map(el => (
                <View style={styles.summary}>
                  <AppText text={el.label} weight="Medium" size={12} />
                  <AppText
                    text={el.value}
                    weight={el.isTotal ? 'Bold' : 'Medium'}
                    size={el.isTotal ? 14 : 12}
                  />
                </View>
              ))}
            </View>
          )
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: wp(16)}}
        keyExtractor={item => item.productId}
        renderItem={({item}) => (
          <CartCard
            {...item}
            onPress={() =>
              navigation.navigate(routesNames.PRODUCT_DETAILS, {
                productId: item?.productId,
              })
            }
            onIncreament={() => incrementProductQuantity(item)}
            onDecreament={() => decrementProductQuantity(item)}
            onRemove={() => removeProductFromCart(item)}
          />
        )}
      />
    </AppScreen>
  );
};

export default CartScreen;
