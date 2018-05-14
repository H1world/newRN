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
  },
  myNamelogo:{
    width:width,
    height:scaleSize(244),
    paddingLeft: scaleSize(36),
    paddingRight:scaleSize(36),
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  myName:{
    flex: 1,    
    fontSize:scaleSize(72),
    color:'#333',
    fontWeight: 'bold',
  },
  myLogo: {
    width: scaleSize(150),
    height:scaleSize(150),
    borderRadius:scaleSize(75)
  },
  MyList:{
    width: width,
    height: scaleSize(132),
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
    backgroundColor: '#fff',
    marginTop:scaleSize(30),
    flexDirection: 'row',
    alignItems: 'center',   
    justifyContent: 'center',
  },
  MyListLeft:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  MyListRight:{
    flex:1,
    flexDirection: 'row',    
    justifyContent: 'flex-end',
  },
  MyListPng:{
    width: scaleSize(56),
    height: scaleSize(56),
    marginRight:scaleSize(24),
  },
  MyListFont:{
    fontSize: scaleSize(42),
    color: '#333',
  },
  MyListRightIco:{
    width: scaleSize(40),
    height: scaleSize(40),
  },
  signOut:{
    fontSize:scaleSize(42),
    color:'#259461',
  },
  modifyFont:{
    fontSize: scaleSize(42),
    color: '#333',
  },
  modifyLeft:{
    width: scaleSize(320),
  },
  modifyRight:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modifyInput:{
    flex: 1,
    color: '#333',
    fontSize: scaleSize(42),
    backgroundColor: '#fff',
    height: scaleSize(120),
  },
  password_img: {
    width: scaleSize(42),
    height: scaleSize(42),
  },
});