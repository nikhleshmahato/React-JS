function App(){
    function fruit(){
        alert("Apple");
    }

    const animal = (name) => {
        alert(name)
    }

    return 
        <div>
            <button onClick({fruit()})>click </button> 
            // this statement will call the function as the page load without click
            
            <button onClick = {fruit}>click </button> 
            //in react, onclick need direct function declaration 

            // Then how to pass parameter inside function 
            <button onClick = {()=>animal("banana")}>click</button>
            // this works because onClick is executing the arrow function which has a child function animal.
            // so it is not diretly calling , it running the arrow function declaration , which is then calling the function.
        </div>
}












// react uses camelCase for built-in functions.
// ex : 
// in js - onclick()
// in react - onClick()



























