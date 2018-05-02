import { StyleSheet, Dimensions, hairlineWidth} from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');
export const loginStyle = StyleSheet.create({
  indexBackground: {
    height: height,
    width: width,
    backgroundColor: '#259461',
  },
  indexBackgroundImg:{
    height: height,
    width: width,
  },
  footImage: {
    width: scaleSize(57),
    height: scaleSize(57),
  },
  container: {
    height: height,
    width: width,
    backgroundColor: '#259461',
    alignItems: 'center',
  },

  loginLogo:{
    width: scaleSize(295),
    height: scaleSize(382),
    marginTop: scaleSize(144),
  },
  loginLogo_s:{
    width: scaleSize(295),
    height: scaleSize(382),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  InputBox:{
    marginTop: scaleSize(180), 
  },
  InputBox_insid:{
    flexDirection: 'row',
    width: width - scaleSize(180),
    height: scaleSize(148),    
    borderBottomWidth: scaleSize(1),
    borderBottomColor:'#fff',
  },
  InputBox_img: {
    width: scaleSize(144),
    height: scaleSize(144),
  },
  inputText:{
    flex: 1,    
    color:'#fff',
    fontSize: scaleSize(48),
    backgroundColor:'#259461',
    height: scaleSize(144),
  },
  
  InputItemed:{
    flex: 1,
    width: width - scaleSize(180),
    height: scaleSize(144),
    backgroundColor: '#b00',
    borderBottomColor: '#fff',
  },
  
  buttonStyle:{
    width: width - scaleSize(180),
    height: scaleSize(144),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: scaleSize(72),
    backgroundColor: '#fff',
    marginTop: scaleSize(150),
  },
  buttonText:{
    fontSize: scaleSize(54),
    color: '#01a374',
  }
});