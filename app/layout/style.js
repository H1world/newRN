import { StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  newContainer: {
    backgroundColor: '#b00',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    color: '#000',
    textAlign: 'center',
  },
  list: {
    marginBottom: 100,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  navIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBox: {
    width: width * 0.7,
    height: 30,
    borderColor: 'black',
    flexDirection: 'row',   // 水平排布
    borderRadius: 10,  // 设置圆角边
    backgroundColor: '#FFF',
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: 'gray',
    alignItems: 'center',
    marginLeft: 8,
    paddingTop: 0,
    marginTop: 2,
    marginBottom: 2,
    paddingBottom: 0,
    marginRight: 8,
  },
  inputIcon: {//搜索图标
    height: 20,
    width: 20,
    marginLeft: 5,
    resizeMode: 'stretch'
  },
  inputText: {//搜索框
    backgroundColor: 'transparent',
    fontSize: 13,
    paddingBottom: 0,
    paddingTop: 0,
    flex: 1,
  },
  banner: {
    // width: 750,
    height: 176,
  }
});


// var styles = StyleSheet.create({
  
// });