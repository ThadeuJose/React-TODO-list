import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: ''    ,
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="App">
        <form className='form' onSubmit = {this.onSubmit}>
          <input className='input_field' value = {this.state.term} onChange = {this.onChange}/>
          <button className='submit_button' >Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }

}

export default App;
