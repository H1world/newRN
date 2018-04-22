
import AppState from '../mobx/AppState';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';

function commonFetcdh(url, options, method, headers) {
  // const searchStr = obj2String(options);
  const searchStr = JSON.stringify(options);
  const heade = '';
  if(headers != ''){
    header = new Headers({})
  };
  let initObj = {}
  if (method === 'GET') { // 如果是GET请求，拼接url
    url += '?' + searchStr
    initObj = {
      method: method,
      credentials: 'include'
    }
  } else {
    initObj = {
      method: method,
      credentials: 'include',
      headers: heade,
      body: searchStr
    }
  }
  fetch(url, initObj).then((res) => {
    return res.json()
  }).then((res) => {
    console.log(res)
    return res    
  })
}

function GET(url, options, headers) {
  return commonFetcdh(url, options, 'GET', headers)
}

function POST(url, options, headers) {
  return commonFetcdh(url, options, 'POST', headers)
}

async function apiBa(url, options, method) {
  // const searchStr = JSON.stringify(options);   
  let list = '';
  for(let i in options){
    list += i+'='+options[i]+'&'
  }
  const heade = {
    'Accept': '*/*',
    'Content-Type': 'application/x-www-form-urlencoded'
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
  return data;
}


export{
  GET,
  POST,
  apiBa
}