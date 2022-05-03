import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import FunctionclassComponent from './Components/FunctionclassComponent';
import Emp from './Data/Employee.json';
import ClassComponent from './Components/Classcomponnt';
import WeatherApp from './Components/WeatherApp';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarFunction from './Components/Navbar';
import Textform from './Components/Textform';



function App() {
  return (
    <div>
       <NavbarFunction title="TextUtils" />
       <div className='container'>
      

       </div>
     
      <ClassComponent />
     
     
      <div >
        
         <Routes>
           <Route path="/Weather" element={ <WeatherApp />}/>
           <Route path="/Display" element={  <Display  />}/>
           <Route path="/textform" element={     <Textform heading="enter your Component"/>  }/>
           <Route path="/counter" element={       <FunctionComponent />}/>
      

    
          
         </Routes>
        
        
    

       
      </div>
    </div>
  );
  function Display() {
    const Display = Emp.map(
      (record,i) => {
        return (
        
          <tr>
            <td>{record.id}</td>
            <td><img src={record.path} width="60" height="70" /></td>
            <td>{record.firstName}</td>
            <td>{record.lastName}</td>
            <td>{record.title}</td>
            <td>{record.salary}</td>
          </tr>
        
        )
      }
    )

    return (
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Profie</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">title</th>
              <th scope="col">salary</th>
            </tr>
          </thead>
          <tbody className="table table-light">
            {Display}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
