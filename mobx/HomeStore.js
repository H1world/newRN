import { action, computed, observable } from "mobx";

class HomeStore {
  @observable location = ''; //定位
  // @observable api = 'http://192.168.1.214:9199/tzq/'; //API
  @observable api = 'http://test.xytzq.cn:9199/tzq/'; 
  // @observable api = 'https://www.xytzq.cn:9443/tzq/'; 
  @observable basicData = '';
  @observable matchIndexDate = [];
  @observable projectgameid = '';
  @observable matchType = '';
  @observable gameid = '';
  @observable stageid = '';
  @observable matchname = '';
  @observable mAddTime1 = '';
  @observable mAddTime2 = '';
  @observable mAddTime3 = '';
  @observable mAddTime4 = '';
  @observable mSigntype = {};
  @observable mSharestatus = '';

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

  @action
  setMatchType(info) {
    this.matchType = info
  }
  @action
  setGameid(info) {
    this.gameid = info
  }
  @action
  setStageid(info) {
    this.stageid = info
  }
  @action
  setMatchName(info) {
    this.matchname = info
  }
  @action
  setMatchAddT1(info) {
    this.mAddTime1 = info
  }
  @action
  setMatchAddT2(info) {
    this.mAddTime2 = info
  }
  @action
  setMatchAddT3(info) {
    this.mAddTime3 = info
  }
  @action
  setMatchAddT4(info) {
    this.mAddTime4 = info
  }
  @action
  setMatchSigntype(info) {
    this.mSigntype = info
  }
  @action
  setMatchSharestatus(info) {
    this.mSharestatus = info
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