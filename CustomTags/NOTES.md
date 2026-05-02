<>

{MyTag()} // to call a function write inside { } , otherwise considered as String

<App/>

<MyTag/> 

</>

This works because React uses bundler to convert the function into tag.

html in function is good to read but js understand only object

So they are parsed into tree like objects intenally.

We can only pass one function inside render() without { }

..render( FunctionName() );
