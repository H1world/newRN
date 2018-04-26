import React, { Component } from 'react';
import { View} from 'react-native';
import TableHeader from '../../component/taberheader';
import DemandSchool from './demandS';
import DemandRJ from './demandR';

export default class DemandIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabtype: false,
    }
  }

  tabLet() {
    if (this.props.tabtype === undefined) return;
    return this.props.tabtype();
  };

  renderItem_1() {
    return (
      '本校需求'
    )
  };
  renderItem_2() {
    return (
      '推荐需求'
    )
  };
  backClick() {
    return (
      this        //this传到header组件
    )
  };


  render() {
    return(
      
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {/* {this.state.loading == false ? <Mask /> : null} */}
        <TableHeader
          titleItem_1={() => this.renderItem_1()}
          titleItem_2={() => this.renderItem_2()}
          backFunc={() => this.backClick()}
        />
        {this.state.tabtype == false ? <DemandSchool /> : <DemandRJ /> }
                
      </View>  
    )
  }


}