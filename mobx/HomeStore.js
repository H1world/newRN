import { action, computed, observable } from "mobx";

class HomeStore {
  @observable location = ''; //定位
  // @observable api = 'http://192.168.1.214:9199/tzq/'; //API
  @observable api = 'http://test.xytzq.cn:9199/tzq/'; 
  // @observable api = 'https://www.xytzq.cn:9443/tzq/'; 
  @observable basicData = '';
  @observable matchIndexDate = [];
  @observable projectgameid = '';


  @action
  setBasicData(info) {
    this.basicData = info
  }

  @action
  setmatchIndexDate(info) {
    this.matchIndexDate = info
  }

  @action
  setProjectgameid(info) {
    this.projectgameid = info
  }

  @computed
  get getBasicData() {
    return this.basicData
  }

  @computed
  get getmatchIndexDate() {
    return this.matchIndexDate
  }

  @computed
  get getProjectgameid() {
    return this.projectgameid
  }
}

const homeStore = new HomeStore();
export default homeStore