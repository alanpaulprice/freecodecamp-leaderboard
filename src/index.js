import styles from './styles/style.less';
import './styles/bootstrap.min.css';
import './fonts/fontawesome.min.js';
import './fonts/fa-brands.min.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AppHeader from './components/app-header.js';
import Table from './components/table.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: 'recent',
      recent: [],
      allTime: []
    }
  }

  componentDidMount() {
    this.getLeaderboardData();
  }

  render() {
    return (
      <div>
        <AppHeader/>
        <Table
          current={this.state.current}
          data={eval(this.state[this.state.current])}
        />
      </div>
    )
  }

  getLeaderboardData(){
    let tempState = {current: this.state.current};
    Promise.all([
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    ]).then((responses) => {
      tempState.recent = responses[0].data;
      tempState.allTime = responses[1].data;
      this.setState(tempState);
    }).catch((error) => {
      console.log(error);
    })
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
