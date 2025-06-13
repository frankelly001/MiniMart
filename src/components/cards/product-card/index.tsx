import {AppText} from '@/components/common';
import {wp} from '@/resources/config';
import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {productCardStyles} from './styles';

const ProductCard: FunctionComponent<{
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

      <View style={{gap: wp(4)}}>
        <AppText text={name} weight="Regular" size={14} numberOfLines={2} />
        <AppText
          text={'$' + price?.toFixed(2)}
          numberOfLines={1}
          weight="Bold"
          size={16}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
