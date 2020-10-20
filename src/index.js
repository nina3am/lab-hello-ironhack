import CSS from './app.css'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
return (<section>
<nav>
<img src="../images/ironhack-logo.svg"></img>
<img src="../images/menu-top.svg"></img>
</nav>
<main>
<img className="react-logo1" src="../images/react-logo.svg"></img>
<img className="react-logo2" src="../images/react-logo.svg"></img>

<h1>Say Hello to ReactJS</h1>
<p>You will learn a Frontend
framework from scratch, to
becaome an Ninka Developer.</p>
<button>Awesome !</button>
</main>
<section className="blocks">
<div><img src="../images/icon1.png"></img>
<h4>Declarative</h4>
<p>React makes it painless to create interactive UIs.</p></div>
<div><img src="../images/icon2.png"></img>
<h4>Components</h4>
<p>Build encapsulated components that manage their state.</p></div>
<div><img src="../images/icon3.png"></img>
<h4>single-Way</h4>
<p>A set of immutable values are passed to the component's.</p></div>
<div><img src="../images/icon4.png"></img>
<h4>JSX</h4>
<p>Statically-typed, designed to run on modern browsers</p></div>
</section> 

</section>)
  };

  // remplace 
  // module.exports = App

ReactDOM.render(<App/>, document.getElementById('root'))