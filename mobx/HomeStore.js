import { action, computed, observable } from "mobx";

class HomeStore {
  @observable location = ''; //定位
  // @observable api = 'http://192.168.1.214:9199/tzq/'; //API
  @observable api = 'http://test.xytzq.cn:9199/tzq/'; 
}

const homeStore = new HomeStore();
export default homeStore