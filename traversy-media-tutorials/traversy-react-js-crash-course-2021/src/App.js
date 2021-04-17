import Header from './components/Header';
// import Button from './components/Button';

const App = () => {
  return (
    
    <div className="container">
      <Header />
    </div>
  )
}

export default App;

// EXAMPLE OF MAKING A COMPONENT USING CLASSES

// you must import React for this:

// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class component in React</h1>
//   }
// }
// export default App;


/*
NOTES:

// you can write JavaScript directly inside the component
// pass variables by wrapping them in {}

// JSX expressions must have only one parent element
// if you don't want the wrapper to be an HTML element,
// you can wrap your HTML in fragment: <>...some HTML tags...</>
return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {1 + 1}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
      </div>
      )

// you can define default props in a component (see Header)

// defining the data type of each of your props with PropTypes 
// can make your code more robust and catch errors before they happen

// when defining CSS styles inline you must use double curly braces {{}}
// you can also define CSS styles in an object variable and pass it
// inline into a tag

// in React, CSS attributes must be written in camelCase, not kebab-case
*/