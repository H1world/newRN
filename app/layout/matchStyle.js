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
  mt_42:{
    marginTop: scaleSize(42),
  },
  fz_30_999:{
    fontSize: scaleSize(30),
    color: '#999',
  },
  plr_36:{
    paddingLeft: scaleSize(36),
    paddingRight: scaleSize(36),
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
    // borderTopWidth: scaleSize(1),
    // borderColor: '#dedede',
    width: width - scaleSize(72),
    backgroundColor:'#b00'
  },
  RP_listBox:{
    flex:1,
    // height:scaleSize(132),
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    // borderBottomWidth: scaleSize(1),
    // borderColor: '#dedede',
  },
  RP_lb_ine:{
    flex:1
  }
})