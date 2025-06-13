import {AppButton} from '@/components/buttons';
import {FavouriteCard} from '@/components/cards';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {StoreContext} from '@/providers/store/context';
import {wp} from '@/resources/config';
import React, {FunctionComponent, useContext} from 'react';
import {FlatList, View} from 'react-native';
import {cartScreenStyles} from './styles';

const FavouritesScreen: FunctionComponent<GeneralScreenProps<'FAVOURITES'>> = ({
  navigation,
}) => {
  const styles = cartScreenStyles();
  const {favourites, favoriteToggle, cart} = useContext(StoreContext);

  return (
    <AppScreen
      isScrollable={false}
      disableBottomSafeArea={false}
      ScreenHeader={<AppScreenHeader title="Your Cart" />}
      ScreenFooter={
        !cart.length ? undefined : (
          <View style={styles.footer}>
            <AppButton text={'Clear all'} />
          </View>
        )
      }>
      <FlatList
        data={favourites}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: wp(16), paddingBottom: wp(20)}}
        keyExtractor={item => item.productId}
        renderItem={({item}) => (
          <FavouriteCard
            {...item}
            onPress={() =>
              navigation.navigate(routesNames.PRODUCT_DETAILS, {
                productId: item?.productId,
              })
            }
            onRemove={() => favoriteToggle(item)}
          />
        )}
      />
    </AppScreen>
  );
};

export default FavouritesScreen;
