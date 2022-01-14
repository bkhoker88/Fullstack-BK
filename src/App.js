import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import search and sort function
import searchAndSort from './searchAndSort'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      rating:'',
      distance:'',
      price:'',
      cusine:'',
      error:'',
      sortedList: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    const {name, rating, distance, price, cuisine} = this.state
    event.preventDefault();
    this.setState({
      sortedList :  searchAndSort(name, rating, distance, price, cuisine)
    })
    console.log(this.state.sortedList)
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  render() {
    const {name, rating, distance, price, cuisine, sortedList, error} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Fullstack Technical Assesment by Benny Khoker
          </p>
        </header>
        <div>
        <form onSubmit={this.handleSubmit}>
            <div className= "inputs">
                <label>RestaurantName</label>
                <input  name="name" value={name} onChange={this.handleChange}></input>
                <label>Rating(stars)</label>
                <input name="rating" value={rating}type="number" min = "1" max="5" step="1" onChange={this.handleChange}></input>
                <label>Distance</label>
                <input  name="distance" value={distance} type="number" min = "1" max="10" step="1" onChange={this.handleChange}></input>
                <label>Price</label>
                <input name="price" value={price} type="number" min = "10" max="50" step="1" onChange={this.handleChange}></input>
                <label>Cuisine </label>
                <input name="cuisine" value={cuisine}  onChange={this.handleChange}></input>
            </div>
            <button  type="submit">Search</button>
        </form>
        <div className= 'results'>
            Results
            {sortedList.length? sortedList.map((restaurant,idx)=>
                <div key = {idx} className= 'restaurant' >
                  <div>name = {restaurant[0]}</div>
                  <div>rating = {restaurant[1]}</div>
                  <div>distance = {restaurant[2]}</div>
                  <div>price = {restaurant[3]}</div>              
                </div>
                 ): 
                 <div>
                   <h3> No Results found</h3>
                 </div>
                 }
        </div>
    </div>
      </div>
    );
  }
}

export default App;
