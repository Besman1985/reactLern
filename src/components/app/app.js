import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';


import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Jhone.S", salary: 1000, increase: true, id: 1 },
        { name: "Anna.M", salary: 1800, increase: false, id: 2 },
        { name: "Alex.P", salary: 500, increase: true, id: 3 }
      ]
    }
  }


  deleteItem = (id) => {
   this.setState (({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
   })
  }

  



  render() {

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }


}








export default App;
