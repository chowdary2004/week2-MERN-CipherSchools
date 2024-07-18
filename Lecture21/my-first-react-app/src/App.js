import React,{ Component } from 'react';
//Allias
import Hungry from './Pizza.js'

// function App() {
//   return (
//     <div className="App">
//       <h1>My first app</h1>
//     </div>
//   );
// }

//Class based components 
class App extends React.Component{

   render(){
    let dynamicName='React is mind blowing'
    let brand="PizzaHut"
    let description="Best pizza in town !!"
    let brand2="Dominos"
    let description2="Better than the best pizza"
    return(
      <>
      <h1>{dynamicName}</h1>
      <Hungry brand={brand} description={description}></Hungry>
      <Hungry brand={brand2} description={description2}></Hungry>

      </>
    )

   }
}

// ES6
export default App;
