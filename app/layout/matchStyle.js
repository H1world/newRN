import { StyleSheet, Dimensions, hairlineWidth } from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

export const matchStyle = StyleSheet.create({
  fz_36_666:{
    fontSize: scaleSize(36), 
    color: '#666',
  },
  fz_30_fff: {
    fontSize: scaleSize(30),
    color: '#fff',
  },
  fz_30_333: {
    fontSize: scaleSize(30),
    color: '#333',
  },
  fz_30_f28109: {
    fontSize: scaleSize(30),
    color: '#f28109',
  },
  fz_36_333: {
    fontSize: scaleSize(36),
    color: '#333',
  },
  fz_42_333: {
    fontSize: scaleSize(42),
    color: '#333',
  },
  fz_48_333: {
    fontSize: scaleSize(48),
    color: '#333',
  },
  fz_60_333: {
    fontSize: scaleSize(60),
    color: '#333',
  },
  mr_100:{
    marginRight: scaleSize(100),
  },
  mr_27:{
    marginRight: scaleSize(27)
  },
  ml_36: {
    marginLeft: scaleSize(36)
  },
  mr_36: {
    marginRight: scaleSize(36)
  },
  mt_42:{
    marginTop: scaleSize(42),
  },
  mtb_48: {
    marginTop: scaleSize(48),
    marginBottom: scaleSize(48),
  },
  mb_10: {
    marginBottom: scaleSize(10),
  },
  mb_20: {
    marginBottom: scaleSize(20),
  },
  mb_30: {
    marginBottom: scaleSize(30),
  },
  mb_48: {
    marginBottom: scaleSize(48),
  },
  mb_170: {
    marginBottom: scaleSize(170),
  },
  mb_304: {
    marginBottom: scaleSize(304),
  },
  fz_30_999:{
    fontSize: scaleSize(30),
    color: '#999',
  },
  plr_36:{
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
  },
  pb_0: {
    paddingBottom: scaleSize(0),
  },
  pb_36: {
    paddingBottom: scaleSize(36),
  },
  width_500: {
    width: scaleSize(500),
  },
  width_36:{
    width: width - scaleSize(72),
  },
  borderTop_1:{
    borderTopWidth:scaleSize(1),
  },
  fl_R:{
    justifyContent: 'flex-end'
  },
  text_cen:{
    textAlign: 'center',
  },
  Middle:{
    alignItems: 'center',
    justifyContent: 'center', 
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
  matchinside_2: {
    width: width - scaleSize(72),
    borderBottomWidth: 0,
    flexDirection: 'row',
    borderColor: '#dedede',
    marginTop: scaleSize(20),
    marginBottom: scaleSize(10),
    paddingTop: scaleSize(45),
    paddingLeft: scaleSize(30),
    paddingBottom: scaleSize(30),
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOffset: { width: -2, height: 3 },
    shadowRadius: 5,
    shadowOpacity: .4,
    elevation: 4,            
  },
  matchinsidein:{
    flexDirection: 'row',
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
  matchTextBox_2:{
    height: scaleSize(259),
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
    lineHeight: scaleSize(50),
    color:'#333',
  },
  icon:{
    width: scaleSize(108),
    height: scaleSize(38),
    marginLeft: scaleSize(18),    
  },
  text_l:{
    // flex: 1,
    lineHeight: scaleSize(82),
    marginRight: scaleSize(90),
  },
  icon_editBox:{
    position: 'absolute',
    right: 0,
    top: scaleSize(10),
  },
  icon_edit:{
    width: scaleSize(36),
    height: scaleSize(36),
  },
  match_name:{
    height: scaleSize(132),
    backgroundColor:'#fff',
    marginTop: scaleSize(30),
    marginBottom: scaleSize(30),
    flexDirection: 'row',
  },
  switch_type: {
    height: scaleSize(132),
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopWidth: scaleSize(1),
    borderBottomWidth: scaleSize(1),
    borderColor:'#dedede',
    alignItems: 'center',
  },
  editf_box:{
    flex: 1,
    justifyContent: 'center',
  },
  edit_font:{
    fontSize: scaleSize(42),
    color: '#333',
  },
  inputText:{
    fontSize: scaleSize(42),
    color: '#666',
    flex: 1,
    textAlign: 'right',
  },
  matchothen_lis:{
    height: scaleSize(132),
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: scaleSize(1),
    borderColor: '#ccc',
  },
  edit_fontdemo:{
    color:'#b00'
  },
  footer: {
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',  
    marginBottom: 10,
  },
  footerfont:{
    color: '#999', 
    fontSize: scaleSize(36), 
    marginTop: scaleSize(10), 
    marginBottom: scaleSize(10),
  },
  adminPage:{
    width: width,
    borderTopWidth: scaleSize(1),
    alignItems: 'center',
    borderColor: '#dedede',
  },
  adminRow:{
    width: width - scaleSize(72),
    height: scaleSize(216),
    flexDirection: 'row',
    marginTop: scaleSize(42),
  },
  adminBox:{
    flex:1,
    borderRadius: scaleSize(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  adminContent:{
    width: scaleSize(42),
    backgroundColor:'#fff',
    // 
  },
  adminfont:{
    marginRight: scaleSize(69),
    fontSize: scaleSize(42),
    color:'#333'
  },
  adminIcon:{
    width: scaleSize(156),
    height: scaleSize(156),
  },
  width_line:{
    height:scaleSize(1),
    width:width,
    backgroundColor: '#dedede',
  },
  width_box:{
    width: width,
    alignItems: 'center',
  },
  RP_list:{
    borderBottomWidth: scaleSize(1),
    borderColor: '#dedede',
    alignItems: 'center',
    width: width,
  },
  RP_listBox:{
    height:scaleSize(132),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  RP_lb_ine:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  RP_icon:{
    width: scaleSize(48),
    height:scaleSize(48),
  },
  RP_icon_2:{
    width: scaleSize(34),
    height: scaleSize(34),
  },
  transformR_180:{
    transform: [{ rotateX: '180deg' }]
  },
  RP_CL: {
    paddingBottom: scaleSize(30),
  },
  classTitle: {
    fontSize: scaleSize(42),
    color: '#333',
    lineHeight: scaleSize(96),
  },
  table:{
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOffset: { width: -2, height: 3 },
    shadowRadius: 5,
    shadowOpacity: .4,
    elevation: 4,
  },
  table_title:{
    height: scaleSize(102),
    backgroundColor: '#ecf6f6',
  },
  table_font:{
    fontSize: scaleSize(36),
    color: '#666',
  },
  table_fontBox:{
    height: scaleSize(132),
  },
  editType:{
    backgroundColor: '#fff',
    marginTop: scaleSize(30),
  },
  typeList:{
    flexDirection: 'row',
  },
  type_f:{
    lineHeight: scaleSize(74),
    paddingLeft: scaleSize(20),
    paddingRight: scaleSize(20),
    fontSize: scaleSize(36),
    color: '#666',
    borderWidth: scaleSize(1),
    borderColor: '#ccc',
    borderRadius: scaleSize(8),
    marginRight: scaleSize(36),
    backgroundColor:'#fff'
  },
  type_select:{
    lineHeight: scaleSize(74),
    paddingLeft: scaleSize(20),
    paddingRight: scaleSize(20),
    fontSize: scaleSize(36),
    color: '#fff',
    borderWidth: scaleSize(1),
    borderColor: '#259461',
    borderRadius: scaleSize(8),
    marginRight: scaleSize(36),
    backgroundColor: '#259461'
  },
  RP_sceoll:{
    marginBottom:scaleSize(10)
  },
  scoring:{
    marginTop: scaleSize(30),
  },
  scoring_list:{
    backgroundColor:'#fff',
    height:scaleSize(132),
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoring_list_text:{
    flex:1,
    fontSize:scaleSize(54),
    color:'#333',
    textAlign:'left'
  },
  scoring_text:{
    fontSize: scaleSize(36),
    color: '#999',
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
    paddingTop: scaleSize(24),
    paddingBottom: scaleSize(24),
  },
  signUpP:{
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    height:scaleSize(45)
  },
  yellBox:{
    borderWidth: scaleSize(1),
    borderColor: '#f28109',
    borderRadius: scaleSize(4),
    padding:scaleSize(5),
    marginRight: scaleSize(5),
    color:'#f28109',
    fontSize:scaleSize(30),
  },
  whiteBox: {
    borderWidth: scaleSize(1),
    borderColor: '#fff',
    borderRadius: scaleSize(4),
    padding: scaleSize(5),
  },
  scorNum:{
    position:'absolute',
    right:scaleSize(20),
    top:scaleSize(50),
    flexDirection: 'row',
  },
  rankscoring:{
    fontSize:scaleSize(72),
    color:'#f28109',
    lineHeight: scaleSize(72)
  },
  rankfen:{
    fontSize: scaleSize(36),
    color: '#f28109',
    lineHeight:scaleSize(72)
  },
  rank:{
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleSize(172),
  },
  rankBox:{
    width: scaleSize(68),
    height:scaleSize(68),
    marginRight:scaleSize(42),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankFont:{
    fontSize:scaleSize(42),
    color:'#fff',
  },
  // norankFont: {
  //   fontSize: scaleSize(42),
  //   color: '#000',
  // },
  rankList:{
    width: width,
    // paddingLeft:scaleSize(36),
    // paddingLeft: scaleSize(36),
    // justifyContent: 'center',
  },
  summaryechart:{
    width: width,
    // height:scaleSize(500),
    // backgroundColor:'#b00',
    paddingLeft:scaleSize(100),
    borderBottomWidth: scaleSize(1),
    borderColor: '#dedede',
    paddingTop: scaleSize(100),
    paddingBottom: scaleSize(30),
    // flex:1
  },
  summaryOp:{
    position:'absolute',
    right: scaleSize(134),
    top:scaleSize(100),
    zIndex:-1
  },
  summaryF:{
    fontSize:scaleSize(60),
    color:'#333',
    textAlign:'center'
  },
  summarysF: {
    fontSize: scaleSize(30),
    color: '#666',
    textAlign: 'center'    
  },
  summaryTl:{
    width:width,
    marginTop:scaleSize(63)
  },
  summarytable:{
    marginLeft: scaleSize(36),
    marginRight:scaleSize(36),
  },
  summary_sceoll:{
    // paddingBottom:scaleSize(500)
  },
  mapTable:{
    backgroundColor: '#fff',
  },
  map_table_title:{
    height: scaleSize(88),
    backgroundColor: '#fff',
    borderBottomWidth:scaleSize(1),
    borderColor:'#dedede'
  },
  map_table_fontBox:{
    height: scaleSize(110),
  },
  //评委设置
  setupTop:{
    borderTopWidth:scaleSize(1),
    borderColor: '#dedede',
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
    paddingTop: scaleSize(46),
    paddingBottom:scaleSize(46),
  },
  setuptopBox:{
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    paddingLeft: scaleSize(98),
    paddingRight:scaleSize(98),
  },
  setupboxTr:{
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:scaleSize(62),
  },
  setupboxLi:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})