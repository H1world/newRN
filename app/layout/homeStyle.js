import { StyleSheet, Dimensions, hairlineWidth } from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

export const homeStyle = StyleSheet.create({
  homeTop:{
    flexDirection: 'row',
    height: scaleSize(132),
    backgroundColor:'#fff',  
    alignItems: 'center',
    marginTop: scaleSize(60),
    justifyContent: 'center',  
  },
  titleImg:{
    width: scaleSize(64),
    height: scaleSize(64),
    backgroundColor: 'rgba(0, 0, 0, .1)',
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
    borderRightWidth: scaleSize(1),
    borderRightColor: '#dedede',
    borderBottomWidth: scaleSize(1),
    borderBottomColor: '#dedede',
  },
  toolBoxNull: {
    flex: 1,
    height: scaleSize(336),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: scaleSize(0),
    borderRightColor: '#dedede',
    borderBottomWidth: scaleSize(1),
    borderBottomColor: '#dedede',
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
  },
  //总览
  leftRight36D: {     //公共宽度
    width: width - scaleSize(72),
  }, 
  marginB30:{
    marginBottom: scaleSize(30),
  },
  overViewStyle:{
    alignItems: 'center',
  },
  font_36_333:{
    fontSize: scaleSize(36),
    color: '#333',
  },
  font_30_999: {
    fontSize: scaleSize(30),
    color: '#999',
  },
  font_30_333:{
    fontSize: scaleSize(30),
    color: '#333',
  },
  marginB_15:{
    marginBottom: scaleSize(15),
  },
  marginR_15: {
    marginRight: scaleSize(15),
  },
  border_yellow:{
    borderWidth: scaleSize(1),
    borderColor: '#f28109',
    borderRadius: scaleSize(4),
  },
  overViewBox:{
    // height: scaleSize(600),
    shadowColor: '#999',
    shadowOffset: { width: -2, height: 3 },
    shadowRadius: 5,
    shadowOpacity: .4,
    backgroundColor:'#fff',
    borderRadius: scaleSize(18),
    paddingBottom: scaleSize(68),
  },
  overlist_1_titel:{
    color:'#259461',
    marginTop: scaleSize(45),
    marginLeft: scaleSize(45),
    marginBottom: scaleSize(68),
  },
  overlist_1_instL:{
    flexDirection: 'row',
  },
  overlist_1_instB: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlist_1_font_1:{
    fontSize: scaleSize(54),
    color:'#333',
    fontWeight: 'bold',
    marginBottom: scaleSize(27),
  },
  overlist_1_line:{
    width: scaleSize(1),    
    height: scaleSize(52),
    backgroundColor:'#dedede',
    position: 'absolute',
    right:0,
  },
  overlist_1_font_2:{
    fontSize: scaleSize(30),
    color: '#333',
  },
  overlist_1_CL:{
    width: scaleSize(696),
    height: scaleSize(1),
    backgroundColor:'#dedede',
    marginTop: scaleSize(56),
    marginBottom: scaleSize(56),
  },
  //echarts 样式
  echartBox:{
    borderWidth: scaleSize(1),
    borderColor: '#f4f4f4',
    shadowColor: '#999',
    shadowOffset: { width: -2, height: 3 },
    shadowRadius: 5,
    shadowOpacity: .4,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  echartList:{
    width: width - scaleSize(100),
  },
  echartTitle:{
    fontSize: scaleSize(42),
    color: '#333',
    marginTop: scaleSize(63),
  },
  //demand style
  demandList:{
    shadowColor: '#999',
    shadowOffset: { width: -2, height: 3 },
    shadowRadius: 5,
    shadowOpacity: .4,
    backgroundColor: '#fff',
    marginBottom: scaleSize(68),
  },
  demandInline:{
    flexDirection: 'row',
    marginLeft: scaleSize(34),
    marginRight: scaleSize(34),
    marginTop: scaleSize(24),
  },
  demandImg:{
    width: scaleSize(82),
    height: scaleSize(82),
    borderRadius: scaleSize(41),
    marginRight: scaleSize(20),
  },
  demandNameT:{
    flex:1,
    height: scaleSize(82),
    justifyContent: 'center',
  },
  demandInline_2F:{
    flex: 1,
    fontSize: scaleSize(48),
    color:'#333',
    // marginBottom: scaleSize(30), 
  },
  demandInline_3_font:{
    fontSize: scaleSize(30),
    color: '#f28109',
    width: scaleSize(84),
    textAlign: 'center',
    lineHeight: scaleSize(45),
  },
  demandInline_3F_1:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: scaleSize(60),
  },
  demandInline_3F:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  demandLine:{
    flex: 1,
    height: scaleSize(1),
    justifyContent: 'center',
    backgroundColor:'#dedede',
  },
  demandBot:{
    marginBottom: scaleSize(24),
  },
  demandDem:{
    position: 'absolute',
    right: scaleSize(24),
    top: scaleSize(24),
  }

})