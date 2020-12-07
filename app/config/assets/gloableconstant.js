import { Dimensions } from "react-native";
// import DeviceInfo from 'react-native-device-info';

// export const isPad = DeviceInfo.isTablet();
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const ratioX = Width < 375 ? (Width < 320 ? 0.75 : 0.875) : 1;
const ratioY = Height < 568 ? (Height < 480 ? 0.75 : 0.875) : 1;
const ratio = Width / 375
const base_unit = 14;
const unit = base_unit * ratioX;
export const winsize = Width
export const winheight = Height
function em(value) {
    return unit * value;
    // return value * ratio
}
export const fontSize = {
    extrasmallest: em(0.55),
    smallest: em(0.7),
    smaller: em(0.8),
    small: em(0.9),
    normal: em(1),
    medium: em(1.1),
    large: em(1.2),
    larger: em(1.3),
    largest: em(1.4),
    extralarge: em(1.6),
    extralarger: em(1.8),
    extralargest: em(2),
    superlargest: em(2.5)
}
export const font = {
    regular: 'Montserrat-Regular',
    light: 'Montserrat-Light',
    bold: 'Montserrat-Bold',
    semibold: 'Montserrat-SemiBold',
    extrabold: 'Montserrat-ExtraBold',
    interRegular: 'Inter-Regular',
    interMedium: 'Inter-Medium',
    interBold: 'Inter-Bold',
    interExtraBold: 'Inter-ExtraBold',
}

export const fontFamily = {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
    heavy: 'Inter-ExtraBold',
};

export const colors = {
    white: '#fff',
    black: '#000',
    red: '#D9243D',
}
