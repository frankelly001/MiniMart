import {DeleteIcon, MinusIcon, PlusIcon} from '@/assets/svg';
import {AppText} from '@/components/common';
import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {productCardStyles} from './styles';
import {CartItem} from '@/providers/store/context';

const CartCard: FunctionComponent<
  CartItem & {
    onPress?: () => void;
    onIncreament?: () => void;
    onDecreament?: () => void;
    onRemove?: () => void;
  }
> = ({
  image,
  name = 'Action 3 Camera',
  onPress,
  quantity,
  unitPrice,
  onDecreament,
  onIncreament,
  onRemove,
}) => {
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
          text={'$' + unitPrice?.toFixed(2)}
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
          <View style={styles.plusMinusContainer}>
            <TouchableOpacity
              style={[
                styles.actionBtn, // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: quantity > 1 ? '#ffffff' : '#E2E8F0'},
              ]}
              onPress={onDecreament}>
              <MinusIcon />
            </TouchableOpacity>
            <View
              style={
                // eslint-disable-next-line react-native/no-inline-styles
                {flex: 1}
              }>
              <AppText
                text={quantity}
                size={12}
                family="SFProText"
                weight="Regular"
                align="center"
              />
            </View>
            <TouchableOpacity style={styles.actionBtn} onPress={onIncreament}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.actionBtn} onPress={onRemove}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;
