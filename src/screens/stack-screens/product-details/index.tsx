import {HeartIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppText, BulletPointText} from '@/components/common';
import {AppScreen} from '@/components/containers';
import {AppScreenHeader} from '@/components/headers';
import products from '@/mocks/products';
import {GeneralScreenProps} from '@/navigation/types';
import {SCREEN_HORIZONTAL_SPACE, SCREEN_WIDTH, wp} from '@/resources/config';
import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

const ProductDetailsScreen: FunctionComponent<
  GeneralScreenProps<'PRODUCT_DETAILS'>
> = ({route}) => {
  const productId = route.params?.productId;
  const product = products.find(el => el.id === productId);
  return (
    <AppScreen
      horizontalPadding={SCREEN_HORIZONTAL_SPACE}
      disableBottomSafeArea={false}
      style={{
        backgroundColor: '#FBFBFB',
        paddingVertical: wp(8),
      }}
      ScreenHeader={<AppScreenHeader title="Go back" />}
      ScreenFooter={
        <View
          style={{
            paddingVertical: wp(16),

            paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
            backgroundColor: '#ffffff',
          }}>
          <AppButton text="Add to cart" />
        </View>
      }>
      <View style={{gap: wp(8)}}>
        <View
          style={{
            width: '100%',
            height: SCREEN_WIDTH - SCREEN_HORIZONTAL_SPACE * 2,
            borderRadius: wp(15),
            overflow: 'hidden',
          }}>
          <Image
            source={product?.image}
            style={{width: '100%', height: '100%'}}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: wp(44),
              height: wp(44),
              borderRadius: wp(22),
              alignItems: 'center',
              justifyContent: 'center',
              right: 12,
              top: 12,
              backgroundColor: '#FFFFFF',
            }}>
            <HeartIcon stroke={'black'} />
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
