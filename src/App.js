import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }
  handleDelete = counterId => {
    const updatedCounters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters: updatedCounters })
  }

  handleReset = () => {
    const resetedCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: resetedCounters
    })
  }

  handleIncrement = counter => {
    const incrementedCounters = [...this.state.counters];
    const index = incrementedCounters.indexOf(counter);
    incrementedCounters[index] = { ...counter };
    incrementedCounters[index].value++;
    this.setState({ counters: incrementedCounters })
  }
  handleDecrement = counter => {
    const incrementedCounters = [...this.state.counters];
    const index = incrementedCounters.indexOf(counter);
    incrementedCounters[index] = { ...counter };
    incrementedCounters[index].value--;
    this.setState({ counters: incrementedCounters })
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
