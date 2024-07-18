import React,{ Component } from 'react';
//Allias
import Pizza from './components/Pizza.js'


// function App() {
//   return (
//     <div className="App">
//       <h1>My first app</h1>
//     </div>
//   );
// }

// Class based components 
// inheritence
class App extends Component{
state={
  dynamicName:"Pizza Hunter",
  // brand:"Pizza",
  // description:"best pizza in town"
  pizzaPlaces: [
    {name: "Pizza Hut", description: "Best Pizza", id:1},
    {name:"Dominoes", description:"Best pizza in town", id:2},
    {name:"Papa Johns", description:"Pizza place",id:3},
    {name:"Oven bricks", description:"authentic pizza",id:4}
  ]
}

 deleteCard=(id)=>{
  console.log(id);
  //this.setState.dynamicName //don't change the state directly
  let pizzaPlaces=this.state.pizzaPlaces.filter((pizzaPlace)=>{
    return pizzaPlace.id !== id
  })
  this.setState({
    pizzaPlaces: pizzaPlaces
  })
}
   
   render(){
    return(
      <div>
      <h1>{this.state.dynamicName}</h1>
      {/*<Pizza brand={this.state.pizzaPlaces[0].name} description={this.state.pizzaPlaces[0].description}></Pizza>}*/}
      {/*<Pizza brand={this.state.pizzaPlaces[3].name} description={this.state.pizzaPlaces[3].description}></Pizza>*/}
    {/*<Hungry brand={this.state.brand} description={this.state.description}></Hungry>*/}
      <Pizza pizzaPlaces={this.state.pizzaPlaces} deleteCard={this.deleteCard}></Pizza>
     </div>
      
    )

   }
  }

// ES6
export default App;
