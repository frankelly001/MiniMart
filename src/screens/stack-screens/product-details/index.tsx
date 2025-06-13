import {HeartIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppText, BulletPointText} from '@/components/common';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import products from '@/mocks/products';
import {GeneralScreenProps} from '@/navigation/types';
import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import React, {FunctionComponent, useContext} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {productDetailsScreenStyles} from './styles';
import {showToast} from '@/components/common/app-toast';
import {StoreContext} from '@/providers/store/context';

const ProductDetailsScreen: FunctionComponent<
  GeneralScreenProps<'PRODUCT_DETAILS'>
> = ({route}) => {
  const productId = route.params?.productId;
  const product = products.find(el => el.id === productId);
  const styles = productDetailsScreenStyles();
  const {incrementProductQuantity, favoriteToggle, favourites} =
    useContext(StoreContext);

  const isLiked = favourites?.some(el => el?.productId === product?.id);

  return (
    <AppScreen
      horizontalPadding={SCREEN_HORIZONTAL_SPACE}
      disableBottomSafeArea={false}
      style={styles.container}
      ScreenHeader={<AppScreenHeader title="Go back" />}
      ScreenFooter={
        <View style={styles.footer}>
          <AppButton
            text="Add to cart"
            onPress={() => {
              if (product) {
                incrementProductQuantity({
                  name: product?.name,
                  productId: product?.id,
                  unitPrice: product?.price,
                  image: product?.image,
                });
                showToast('SUCCESS', {message: 'Item has been added to cart'});
              }
            }}
          />
        </View>
      }>
      <View style={{gap: wp(8)}}>
        <View style={styles.imageContainer}>
          <Image source={product?.image} style={styles.image} />
          <TouchableOpacity
            style={styles.like}
            onPress={() => {
              if (product) {
                favoriteToggle({
                  image: product?.image,
                  name: product?.name,
                  price: product?.price,
                  productId: product?.id,
                });
                showToast('SUCCESS', {
                  message: `Item has been ${
                    isLiked ? 'removed from' : 'added to'
                  } favourites`,
                });
              }
            }}>
            <HeartIcon stroke={isLiked ? '#60B5FF' : 'black'} />
          </TouchableOpacity>
        </View>
        <AppText text={product?.name} size={17} weight="Regular" />
        <AppText
          text={'$' + product?.price?.toFixed(2)}
          size={32.75}
          weight="Bold"
        />
      </View>
      <View style={{paddingTop: wp(8)}}>
        <AppText
          text={'About this item'}
          size={14}
          weight="Regular"
          color="#999999"
          lineHeight={18}
        />
        {[
          'This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.',
          'There will be no visible cosmetic imperfections when held at an arm’s length. There will be no visible cosmetic imperfections when held at an arm’s length.',
          'This product will have a battery which exceeds 80% capacity relative to new.',
          'Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box.',
          'This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.',
        ].map((el, i) => (
          <BulletPointText
            key={i}
            text={el}
            size={14}
            lineHeight={18}
            weight="Regular"
            color="#999999"
          />
        ))}
      </View>
    </AppScreen>
  );
};

export default ProductDetailsScreen;
