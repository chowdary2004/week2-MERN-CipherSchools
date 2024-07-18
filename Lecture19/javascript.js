// functional components
function Pizza(){
    return(
    // JSX - Javascript XML
    // React.createElement(div,......)
        <div class='pizza'>
            <h1>Pizza</h1>
        </div>
    )
}

// function(Component), where to add onthe DOM
ReactDOM.render(<Pizza/>, document.getElementById('root'));
//ReactDOM.render(Pizza(), document.getElementById('root2'));