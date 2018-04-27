import {
  Alert,
} from 'react-native';
import AppState from '../mobx/AppState';
import {  observer } from 'mobx-react';

async function apiBa(url, options, method, xytoken, propsed) {
  // const searchStr = JSON.stringify(options);   
  let list = '';
  for(let i in options){
    list += i+'='+options[i]+'&'
  }
  const heade = {
    'Accept': '*/*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'xytoken': xytoken,
  };
  let initObj = {}
  if (method === 'GET') {    //get请求暂未定义.
    url += '?' + searchStr
    initObj = {
      method: method,
      credentials: 'include'
    }
  } else {                  //post请求根据行云尚学后台要求所判定
    initObj = {
      method: method,
      credentials: 'include',
      headers: new Headers(heade),
      body: list
    }
  }
  const response = await fetch(url, initObj);
  const data = await response.json();
  if (data.code == '1000'){             //如果后台返回了'1000' 清空内存数据 跳转到注册页
    global.MySorage._remove('userList');
    propsed.navigation.navigate('Login');
    Alert.alert('登录失效，请重新登录。');    
    return;
  }
  return data;
};



export{
  apiBa
}