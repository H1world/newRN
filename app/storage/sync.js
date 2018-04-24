// let SYNC = {};
// SYNC.userList = (params) => {
//   var user = new Object();
//   user.beOverdue = '1';
//   storage.save({
//     key: 'userList',
//     data: user,
//   });
//   console.log(storage)
//   return;


//   //后期加上处理数据

//   if (params == null) return;
//   // sync方法的名字必须和所存数据的key完全相同
//   // 方法接受的参数为一整个object，所有参数从object中解构取出
//   // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
//   let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
//   fetch('user/', {
//     method: 'GET',
//     body: 'id=' + id,
//     ...extraFetchOptions,
//   }).then(response => {
//     return response.json();
//   }).then(json => {
//     //console.log(json);
//     if (json && json.user) {
//       storage.save({
//         key: 'userList',
//         id,
//         data: json.user
//       });

//       if (someFlag) {
//         // 根据syncParams中的额外参数做对应处理
//       }

//       // 成功则调用resolve
//       resolve && resolve(json.user);
//     }
//     else {
//       // 失败则调用reject
//       reject && reject(new Error('data parse error'));
//     }
//   }).catch(err => {
//     console.warn(err);
//     reject && reject(err);
//   });
// }

// export default SYNC
let SYNC = {};     //仅需要存一个 是否过期的key值
SYNC.userList = (params) => {
    let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
      var user = new Object();
      user.beOverdue = '1';
      storage.save({
        key: 'userList',
        data: user,
      });
      resolve && resolve(user);
      return;
  }
export default SYNC