import {AppText} from '@/components/common';
import {wp} from '@/resources/config';
import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {productCardStyles} from './styles';
import {DeleteIcon, MinusIcon, PlusIcon} from '@/assets/svg';

const CartCard: FunctionComponent<{
  image?: number;
  name?: string;
  price?: number;
  onPress?: () => void;
}> = ({image, name = 'Action 3 Camera', onPress, price}) => {
  const styles = productCardStyles();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={{gap: wp(5), flex: 1}}>
        <AppText
          text={name}
          family="SFProText"
          weight="Regular"
          color="#334155"
          size={12}
          numberOfLines={2}
        />
        <AppText
          text={'$' + price?.toFixed(2)}
          family="SFProText"
          weight="SemiBold"
          lineHeight={32}
          size={16}
        />
        <AppText
          text={'$' + price?.toFixed(2)}
          family="SFProText"
          weight="Regular"
          size={12}
          color="#10B981"
        />

        <View style={{flexDirection: 'row', alignItems: 'center', gap: wp(32)}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: wp(36),
                height: wp(36),
                borderRadius: wp(18),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
              }}>
              <MinusIcon />
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <AppText
                text="1"
                size={12}
                family="SFProText"
                weight="Regular"
                align="center"
              />
            </View>
            <TouchableOpacity
              style={{
                width: wp(36),
                height: wp(36),
                borderRadius: wp(18),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
              }}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: wp(36),
              height: wp(36),
              borderRadius: wp(18),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
            }}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;
