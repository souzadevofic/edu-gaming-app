import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from './Tema';

export const globalStyles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: COLORS.text,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.text,
  }
});
