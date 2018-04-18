import './styles/style.less';
import './styles/bootstrap.min.css';
import './fonts/fontawesome.min.js';
import './fonts/fa-brands.min.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AppHead from './components/app-head.js';
import Table from './components/table.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: 'recent',
      recent: [],
      allTime: []
    }
    this.getLeaderboardData();
  }

  render() {
    return (
      <div>
        <AppHead/>
        <Table
          current={this.state.current}
          data={eval(this.state[this.state.current])}
          updateCurrent={this.updateCurrent.bind(this)}
        />
      </div>
    )
  }

  getLeaderboardData(){
    Promise.all([
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    ]).then((responses) => {
      this.setState({
        current: this.state.current,
        recent: responses[0].data,
        allTime: responses[1].data
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  updateCurrent(newValue){
    let tempState = this.state;
    tempState.current = newValue;
    this.setState(tempState);
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
