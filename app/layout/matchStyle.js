import { StyleSheet, Dimensions, hairlineWidth } from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

export const matchStyle = StyleSheet.create({
  fz_36_666:{
    fontSize: scaleSize(36), 
    color: '#666',
  },
  mr_100:{
    marginRight: scaleSize(100),
  },
  mt_42:{
    marginTop: scaleSize(42),
  },
  fz_30_999:{
    fontSize: scaleSize(30),
    color: '#999',
  },
  matchSubject:{
    width:width,
    borderBottomWidth: scaleSize(1),
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: '#dedede',
  },
  matchBox:{
    width: width - scaleSize(72),
    alignItems: 'center',
    justifyContent: 'center',    
  },
  matchinside:{
    width: width - scaleSize(72),
    borderBottomWidth: scaleSize(1),
    flexDirection: 'row',
    borderColor: '#dedede',
    marginTop: scaleSize(36),
    paddingBottom: scaleSize(30),
  },
  matchLogo:{
    width: scaleSize(172),
    height: scaleSize(172),
    marginRight: scaleSize(42),
    borderRadius: scaleSize(5),
  },
  matchTextBox:{
    height: scaleSize(172),
    marginRight: scaleSize(100),
  },
  matchNull:{
    flex: 1,
    width: scaleSize(660),
    height: scaleSize(172),
    flexDirection: 'row',
  },
  icon_B:{
    justifyContent: 'center',
  },
  font_1:{
    fontSize: scaleSize(48),
    color:'#333',
  },
  icon:{
    width: scaleSize(108),
    height: scaleSize(38),
    marginLeft: scaleSize(18),    
  },
  text_l:{
    flex: 1,
    lineHeight: scaleSize(82),
  },
  icon_edit:{
    width: scaleSize(36),
    height: scaleSize(36),
    position: 'absolute',
    right: 0,
    top: scaleSize(10),
  }
})