function App(){
    let fruit = "apple";
    const changeFruit = () => {
        fruit = "banana";
        console.log(fruit); // verifying that the function has called
    }
    return 
        <div>
            <h1>{fruit}</h1>
            <button onClick={changeFruit}>change fruit name</button>
        </div>
// the fruit name did not change , because
// react displays the component on react re-render

// state - it is a container to store data like variable
// it is mutable and dynamic
// react detect the state change because it is it's internal feature
