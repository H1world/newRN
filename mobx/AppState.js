// import { observable, computed, autorun, action, useStrict } from 'mobx';

// class AppState {
//   @observable timer = 0;
//   // @observable api = 'http://test.xytzq.cn:9199/tzq/';
//   @observable api = 'http://192.168.1.214:9199/tzq/';

//   constructor(props) {
//     // 一秒递增
//     setInterval(() => {
//       this.timer += 1;
//     }, 1000);
//   }

//   resetTimer() {
//     this.timer = 0;
//   }
// }
// const appState = new AppState();
// export default appState;

import homeStore from "./HomeStore";
const store = { homeStore };

export default store;