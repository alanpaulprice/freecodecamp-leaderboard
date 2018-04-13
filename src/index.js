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
      current: '',
      recent: {},
      allTime: {}
    }
  }

  componentDidMount() {
    this.getLeaderboardData('recent');
  }

  render() {
    return (
      <div>
        <AppHeader/>
        <Table data={this.state}/>
      </div>
    )
  }

  getLeaderboardData(tableType){
    let tempState = {current: tableType};
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => tempState.recent = response.data)
    .catch(error => console.log(error));

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(response => tempState.allTime = response.data)
    .catch(error => console.log(error));

    this.setState(tempState);
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
