import { StyleSheet, Dimensions, hairlineWidth } from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

export const homeStyle = StyleSheet.create({
  homeTop:{
    flexDirection: 'row',
    height: scaleSize(132),
    // borderBottomWidth: scaleSize(1),
    // borderBottomColor: '#000',
    backgroundColor:'#fff',  
    alignItems: 'center',
    marginTop: scaleSize(60),
    justifyContent: 'center',  
  },
  titleImg:{
    width: scaleSize(64),
    height: scaleSize(64),
    backgroundColor:'#000',
    marginRight: scaleSize(27),
  },
  titleFont:{
    fontSize: scaleSize(54),
    color: '#333',
  },
  //
  backgroundBigImg:{
    width: width,
    height: scaleSize(424),
    flexDirection: 'row',
  },
  bannerBox:{
    flex:1,
    height: scaleSize(424),
    alignItems: 'center',   
    justifyContent: 'center',   
  },
  bannerIcon:{
    width: scaleSize(128),
    height: scaleSize(128),
  },
  bannerIconFont:{
    fontSize: scaleSize(42),
    color: '#fff',
    textAlign: 'center',
    marginTop: scaleSize(42),
  },
  toolList:{
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    backgroundColor: "#fff",
  },
  toolBox:{
    flex: 1,
    height: scaleSize(336),
    alignItems: 'center',
    justifyContent: 'center', 
  },
  toolIcon:{
    width: scaleSize(144),
    height: scaleSize(144),
  },
  toolFont:{
    fontSize: scaleSize(42),
    color: '#333',
    textAlign: 'center',
    marginTop: scaleSize(36),
  }
})