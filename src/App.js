import './App.css';
                         // props in react
// import Propss from '../../tutorial/src/props/propss';
// import PropDest from '../../tutorial/src/props/propdestruct';
// import Propsclasscomponent from '../../tutorial/src/props/propsinclass';
// import Propsclasscomponentdst from '../../tutorial/src/props/propsdestrinclass';
// import Propsinconstructor from '../../tutorial/src/props/Propsinconstructor';
// import CounterComponent from '../../tutorial/src/props/counter';
                        // binding in react 
// import BindingByThisdotarrow from '../../tutorial/src/binding/eventbindingthis';
// import BindingByBind from '../../tutorial/src/binding/bindingusingbind';
// import BindinginConstructor from '../../tutorial/src/binding/bindingInconstructor';
// import BindingByarrowfunction  from '../../tutorial/src/binding/bindingusingarrow' ;
                  
                        // Method as props
// import Parentcopm from '../../tutorial/src/propsasmethod/parentcopm';
                  
                        //conditional rendering 
// import IfElserendering from '../../tutorial/src/conditionalrendering/ifElserendering';
// import IfElserenderingbyjsvar from '../../tutorial/src/conditionalrendering/js_variable_for_rendering';
// import Ternayconditional from '../../tutorial/src/conditionalrendering/ternayconditional'
                        
                        //List rendering
// import Namelist from '../../tutorial/src/listrendering/Namelist' 
                        // Styling react components
// import Inlinestyling from '../../tutorial/src/Stylingcomponent/Inlinestyling'
// import Inlinestylingcopm from '../../tutorial/src/Stylingcomponent/Inlinestylingcopm'
// import styles from '../src/Stylingcomponent/appstlye.module.css'
                        // Form Handling
// import Form from '../../tutorial/src/FormHandling/form'
                        //    Component Mounting
// import Lifecycle1 from '../../tutorial/src/componentmountingLifecycle/Lifecycle1'
                        //React Fragment 
// import Table from './Fragment/Table';
                        // Pure Component
// import Purecomponent from './Purecomponent/Purecomponent';
// import ParentCom from './Purecomponent/ParentCom';
            // Refs for class based components
// import RefsDemo from './RefsDemo/RefsDemo';
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import Contact from './Router/Contact';
// import About from './Router/About';
// import Useeffects from '../../tutorial/src/hooks/useeffect/useEffect'
// import UseStates from '../../tutorial/src/hooks/usestate/useState'
// import Usecontexts from '../../tutorial/src/hooks/usecontext/useContext'
import Todolist from './TodoList/Todolist';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Createlist from './TodoList/Createlist';
import ReadList from './TodoList/ReadList';
import React,{useState} from 'react'
function App() {
      const [titless,setTitle]= useState("");
      const [discrp,setDiscrp]= useState("");
      const [dates,setDates]= useState("");
  return (
    
    <div className="App">
            <Router>
            <Todolist 
            titles={titless} setTitle={setTitle} 
            discrp={discrp}  setdiscrp={setDiscrp}
            dates={dates}  setDates={setDates}
            />
                      <Routes>
                                <Route exact path="/create" element={<Createlist/>} />
                                <Route path="/read" element ={<ReadList/>} /> 
                                <Route path ="/creates" element={<Createlist/>}/>
                     </Routes>
            </Router>

          {/* <h1  className="headingcolor" >React Route for changing or Navigating Page...<br/>
            </h1>
            <h4  className={styles.error}  >Here we have to  <span className="headingcolor"> Type Path  </span> for routeing on browser</h4>
            <div>
                  <Router>
                      <Routes>
                        <Route exact path="/" element={<About/>} />
                        <Route path="/contact" element ={<Contact/>} /> 
                     </Routes>
                  </Router>
                  
               
            </div>
          <hr></hr> */}
       {/* <h1 className="headingcolor"> ..... React Props</h1> */}

                 {/* Props as function and components */}
      {/* <div>
            <Propss name = "Props using functional component. " age = {55}/>
      </div>
      <div>
            <PropDest name = "Harsh" age = {25} />
      </div>
      <div>
            <Propsclasscomponent  name = "Props using class based component." age = {46}/>
      </div>    
      <div>
            <Propsclasscomponentdst   name = "Davda " age = {26}/>
      </div>
      <div>
            <Propsinconstructor/>
      </div>   
      <div>
            <CounterComponent/>
      </div> */}
      {/* <hr></hr> */}
      {/* <h1 className="headingcolor"> ..... React Event binding </h1> */}
                        {/* event binding in react  */}
      {/* <div><h1 className='headingcolor'>Event Binding methods</h1></div>
      <div>
            <BindingByThisdotarrow/>
      </div>
      <div>
            <BindingByBind/>
      </div>
      <div>
            <BindinginConstructor/>
      </div>
      <div>
            <BindingByarrowfunction /> 
      </div> */}
      {/* <hr></hr> */}
      {/* <h1 className="headingcolor"> .....Methods as Props </h1> */}
      {/* <div>
            <Parentcopm/>
      </div> */}
      {/* <hr></hr> */}
      {/* <h1 className="headingcolor"> ....Conditional Rendering  </h1> */}
      
      {/* <div>
            <IfElserendering/>
      </div>
      <div>
            <IfElserenderingbyjsvar/>
      </div>
      <div>
            <Ternayconditional/>
      </div> */}
      {/* <hr></hr> */}
              {/* <h1 className="headingcolor"> ...List Rendering using key as index....  </h1> */}
      {/* <div>
            <Namelist/>
      </div> */}
      {/* <hr></hr> */}
                  {/* <h1 className="headingcolor" >  .... Styling react component  </h1> */}
      {/* <div>
         <Inlinestyling primary = {false}/>
      </div>t
      <h1 className='headingcolor ' > Form Handling in react js</h1>
            <h4>Note: Here If you don't want to refresh the form data on submit then <br></br>
            enter one more functio i.e.. <span className={`${styles.error}`}> event.preventDefault()</span> </h4> */}
      <div>
            {/* <Form/> */}
      </div>
      {/* <hr></hr> */}
            {/* <h1 className='headingcolor'>Component Mounting LifeCycle Method..</h1> */}
            {/* <div>
                  <Lifecycle1/>
            </div> */}
            {/* <hr></hr> */}
      {/* <h1 className='headingcolor'> React Fragment use.......... </h1> */}
            <div>
                  {/* <Table/> */}
            </div>
            {/* <hr></hr>
            <span className='headingcolor' ></span>
            <h1 className='headingcolor'> Pure component...and MEMO... </h1>
            <h4>i.)For <span className='headingcolor' >Class based </span> component <span className={`${styles.error}`}> ~ Pure Component is used.</span>
            <br></br>ii.) For <span className='headingcolor' >Function based</span>   component <span className={`${styles.error}`}> ~Export default React.memo(Function-Name).</span>   
            </h4> */}
            <div>
                  {/* <Purecomponent/> */}
                  {/* <ParentCom/>  */}
            </div>
            {/* <hr></hr> */}
            {/* <h1 className='headingcolor' > Use of Refs (Refreence) in class component<br></br> in order to focus something when page loads </h1> */}
            {/* <div>
                  <RefsDemo/>
            </div> */}

    {/* <Useeffects/> */}
    {/* < UseStates/> */}
    {/* <Usecontexts/> */}
    </div>
  );
}

export default App;