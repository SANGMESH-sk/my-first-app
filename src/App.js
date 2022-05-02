import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import FunctionclassComponent from './Components/FunctionclassComponent';
import Emp from './Data/Employee.json';
import ClassComponent from './Components/Classcomponnt';
import WeatherApp from './Components/WeatherApp';

function App() {
  return (
    <div className="App">

      <WeatherApp />
      <FunctionComponent />
      <FunctionclassComponent />
      <ClassComponent />
      <Display/>
    </div>
  );
  function Display() {
    const Display = Emp.map(
      (record) => {
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
          <tbody class="table table-light">
            {Display}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
