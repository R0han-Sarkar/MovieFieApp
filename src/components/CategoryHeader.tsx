import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FONTFAMILY, FONTSIZE, SPACING} from '../configs/Config';
import {COLORS} from '../configs/Colors';

const CategoryHeader = (props: any) => {
  return <Text style={styles.text}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28,
  },
});

export default CategoryHeader;
