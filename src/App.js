import './App.css';
import bob from "./img/bob.jfif";

import fate from "./img/netflixFate.png";
import gambit from "./img/netflixGambit.png";
import outsicd from "./img/netflixOutside.png";
import star from "./img/netflixStarTrek.png";
import wiesiek from "./img/netflixWitcher.png";

import home from "./img/airbnbHome.png";
import cabin from "./img/airbnbCabin.png";
import pets from "./img/airbnbPets.png";
import unique from "./img/airbnbUnique.png";

import unilever from "./img/bbcUnilever.png";
import pay from "./img/bbcPay.png";
import morgan from "./img/bbcMorgan.png";
import pandemic from "./img/bbcPandemic.png";

function App() {
  return (
    <div className="App">

      <div id="person">

      <h1>Hello Bombert</h1>
      <img src={bob} alt="bob"></img>
      <h2>I'm root component</h2>
      <Person name="Bob" age="31" place="Sparta" title="chef"/>
      
      <Person name="Andrju" age="24" place="Preston" title="junior dev"/>
      
      <Person name="Kiki" age="45" place="Depreston" title="driver"/>

      </div>
      <div id="netflix">

        <NetflixComponent source={fate}/>
        <NetflixComponent source={gambit}/>
        <NetflixComponent source={outsicd}/>
        <NetflixComponent source={star}/>
        <NetflixComponent source={wiesiek}/>        

      </div>
      <div id="air">

        <AirB src={home} title="homes are somehow big"/>
        <AirB src={cabin} title="get in there"/>
        <AirB src={pets} title="pets are welcome, sometimes"/>
        <AirB src={unique} title="this will blow your mind"/>

      </div>
      <div id="bbc">

        <Bbc className="bbcChunk" src={unilever} title="Unilever drops word 'normal' from beauty products"
        description="The ovner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity"
        time="5min" category="Business"/>
        <Bbc className="bbcChunk" src={pay} title="Pay rise was set to be 2.1% - NHS chief"
        description="NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers"
        time="10min" category="Politics"/>
        <Bbc className="bbcChunk" src={morgan} title="Piers Morgan destroyed Meghan the Princess" 
        description="Morgan usualy says trash but now saying that Meghan played well in 'Suits'"
        time="1000min" category="bs"/>
        <Bbc className="bbcChunk" src={pandemic} title="Pandemic pandemic pandemic pandemic" 
        description="no comment but if i put more text in here this bit gonna have more space in a browser"
        time="69min" category="Pyr pyr pyr"/>

      </div>

    
      
    </div>
  );
}

const Person = (props) => {
  return (
    <div>
      <h2>My name is {props.name} and I'm {props.age} yo</h2>
     <p>This is {props.place}</p>
     <Job jobTitle={props.title}/>
    </div>
  )
}

const Job = (props) => {
  return (
    <p>I'm a {props.jobTitle}</p>
  )
}

const NetflixComponent = ({source}) => {
// const NetflixComponent = (props.source) => {
  
  return (
    <div>
         {/* or props.source */}
        <img src={source} alt="img"></img> 
    </div>
  )
}

const AirB = ({src, title}) => {
  return (
    <div> 
      <img src={src}></img>
      <h2>{title}</h2>
    </div>
  )
}


const Bbc = ({src, title,  description, time, category }) => {
  return (
    <div className='bbcChunk'>
      <img src={src} alt="bbcImg"></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><span>{time}</span> | <span>{category}</span></p>
    </div>
  )
}


export default App;
