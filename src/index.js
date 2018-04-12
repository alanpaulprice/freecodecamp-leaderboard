import styles from './styles/style.less';
import './styles/bootstrap.min.css';
import './fonts/fontawesome.min.js';
import './fonts/fa-brands.min.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header.js';
import Table from './components/table.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      ThirtyDays: [],
      allTime: []
    }

    this.getLeaderboards();
  }
  render() {
    return (
      <div>
        <AppHeader/>
        <Table/>
      </div>
    )
  }
  getLeaderboards(){
    console.log('works');
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
