import React from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends React.Component {

  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      cars: [
        { name: 'Mazda', year: 2019 },
        // { name: 'BMW 3', year: 2010 },
        // { name: 'Lada 2', year: 2015 }
      ],
      title: 'React components',
      visible: false
    }
  }

  // componentWillMount() {
  //   console.log('App componentWillMount')
  // }

  componentDidMount() {
    console.log('App componentDidMount')
  }


  onChangeName(value, index) {
    const car = this.state.cars[index]
    car.name = value
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler = index => {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({ cars })
  }


  toggleHandler = () => {
    this.setState({
      visible: !this.state.visible
    })
  }



  render() {

    console.log('App render')


    return (
      <div className="App">

        <h1>{this.props.title}</h1>

        <Counter />
        <br/>

        <button onClick={this.toggleHandler}>Toggle cars</button> <br />

        <div style={{
          width: 400,
          paddingTop: 20,
          margin: 'auto'
        }}>
          {
            (this.state.visible)
              ? this.state.cars.map((car, index) => {

                return (
                  <ErrorBoundary key={index}>
                    <Car
                      name={car.name}
                      year={car.year}
                      deleteHandler={this.deleteHandler.bind(this, index)}
                      onChangeName={event => this.onChangeName(event.target.value, index)} />
                  </ErrorBoundary>

                )

              }) : null
          }
        </div>

      </div>
    );
  }

}

export default App;
