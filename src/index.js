import styles from './styles/style.less';
import './styles/bootstrap.min.css';
import './fonts/fontawesome.min.js';
import './fonts/fa-brands.min.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      ThirtyDays: [],
      allTime: []
    }
  }
  render() {
    return (
      <header>
        freeCodeCamp <i className='fab fa-free-code-camp'></i>&nbsp;
        <button className='btn btn-danger'>button</button>
    </header>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
