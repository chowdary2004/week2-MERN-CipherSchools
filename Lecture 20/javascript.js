// functional components
function Pizza(props){
    return(
    // JSX - Javascript XML
    // React.createElement(div,......)
        <div class='pizza'>
            <h1>{props.name}</h1>
        </div>
    )
}

// function(Component), where to add onthe DOM
ReactDOM.render(<Pizza name="Pizzahut"/>, document.getElementById('root'));
ReactDOM.render(<Pizza name="Dominoes"/>, document.getElementById('root2'));