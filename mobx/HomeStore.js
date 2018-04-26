import { action, computed, observable } from "mobx";

class HomeStore {
  @observable location = ''; //定位
  // @observable api = 'http://192.168.1.214:9199/tzq/'; //API
  @observable api = 'http://test.xytzq.cn:9199/tzq/'; 
  @observable basicData = '';
  @action
  setBasicData(info) {
    this.basicData = info
  }

  @computed
  get getBasicData() {
    return this.basicData
  }

}

const homeStore = new HomeStore();
export default homeStore