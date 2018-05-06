import { StyleSheet, Dimensions, hairlineWidth } from 'react-native';
import { setSpText, scaleSize } from '../algorithm/company';
const { width, height } = Dimensions.get('window');

export const matchStyle = StyleSheet.create({
  fz_36_666:{
    fontSize: scaleSize(36), 
    color: '#666',
  },
  fz_42_333: {
    fontSize: scaleSize(42),
    color: '#333',
  },
  mr_100:{
    marginRight: scaleSize(100),
  },
  mr_27:{
    marginRight: scaleSize(27)
  },
  mt_42:{
    marginTop: scaleSize(42),
  },
  mtb_48: {
    marginTop: scaleSize(48),
    marginBottom: scaleSize(48),
  },
  fz_30_999:{
    fontSize: scaleSize(30),
    color: '#999',
  },
  plr_36:{
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
  },
  width_36:{
    width: width - scaleSize(72),
  },
  fl_R:{
    justifyContent: 'flex-end'
  },
  text_cen:{
    textAlign: 'center',
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
    paddingBottom: scaleSize(30),
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
  RP_CL: {
    // backgroundColor:'#000',
    // justifyContent: 'center',
    // flex:1,
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
    marginBottom:scaleSize(198)
  }
})