import React from 'react';
import './App.css';
import Car from './Car/Car'

class App extends React.Component {

  state = {
    cars: [
      { name: 'Mazda', year: 2019 },
      { name: 'BMW 3', year: 2010 },
      { name: 'Lada 2', year: 2015 }
    ],
    title: 'React components',
    visible: false
  }

  changeTitleHandler = newTitle => {
    this.setState({
      title: newTitle
    })
  }

  toggleHandler = () => {
    this.setState({
      visible: !this.state.visible
    })
  }



  render() {

    let cars = null

    if (this.state.visible) {
      cars = this.state.cars.map((car, index) => {

        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            changeTitle={() => this.changeTitleHandler(car.name)} />

        )

      })
    }

    return (
      <div className="App">
        <h1>{this.state.title}</h1>

        <button onClick={this.toggleHandler}>Toggle cars</button> <br />


        { cars }


      </div>
    );
  }

}

export default App;
