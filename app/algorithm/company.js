import { StyleSheet, Dimensions, PixelRatio, hairlineWidth } from 'react-native';

const { width, height } = Dimensions.get('window');
let fontScale = PixelRatio.getFontScale(); 
const pixelRatio = PixelRatio.get();
const defaultPixel = 3;                           //设计图的像素密度
const w2 = 1125 / defaultPixel;
const h2 = 2000 / defaultPixel;
const scale = Math.min(height / h2, width / w2);   //获取缩放比例

function setSpText(size) {
  size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
  return size / defaultPixel;
}

function scaleSize(size) {
  size = Math.round(size * scale + 0.5);
  return size / defaultPixel;
}

export {
  setSpText,
  scaleSize
};
// const defultWidth = 1125;
// const defultHeight = 2000;
// const relWidth = defultWidth / width;

// function comPany(px) {
//   return px / company;
// }
// export {
//   comPany
// };

