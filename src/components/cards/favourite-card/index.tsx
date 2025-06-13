import {DeleteIcon} from '@/assets/svg';
import {AppText} from '@/components/common';
import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {productCardStyles} from './styles';

const FavouriteCard: FunctionComponent<{
  name: string;
  price: number;
  image: number;
  onPress?: () => void;
  onRemove?: () => void;
}> = ({image, name = 'Action 3 Camera', onPress, price, onRemove}) => {
  const styles = productCardStyles();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.detailContainer}>
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
          text={'In stock'}
          family="SFProText"
          weight="Regular"
          size={12}
          color="#10B981"
        />

        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionBtn} onPress={onRemove}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteCard;
