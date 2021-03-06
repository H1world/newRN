import {
  Alert,
} from 'react-native';
import AppState from '../mobx/AppState';
import { Toast } from 'antd-mobile';
import {  observer } from 'mobx-react';
import { NavigationActions } from 'react-navigation';

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
    Toast.fail('登录失效，请重新登录', 30);
    global.MySorage._remove('userList');
    // propsed.navigation.navigate('Login');
    const resetLogin = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })//要跳转到的页面名字
      ]
    });
    global.MySorage._remove('userList');
    propsed.navigation.dispatch(resetLogin);
    setTimeout(() => {
      Toast.hide();
    }, 3000);  
    return;
  }

  if (data.result != "success") {
    Toast.fail(data.describe, 30);
    setTimeout(() => {
      Toast.hide();
    }, 2000);
    return;
  }
  return data;
};

function copy(obj1, obj2) {
    var obj2 = obj2 || {};
    for (var name in obj1) {
      if (typeof obj1[name] === "object") {
        obj2[name] = (obj1[name].constructor === Array) ? [] : {};
        copy(obj1[name], obj2[name]);
      } else {
        obj2[name] = obj1[name];
      }
    }
    return obj2;
  }

export{
  apiBa,
  copy
}