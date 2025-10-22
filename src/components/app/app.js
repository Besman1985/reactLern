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
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
      ],
      term: ""
    }
  }


  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      data.push(({ name: name, salary: salary, increase: false, rise: false, id: Date.now() }));
      return {
        data
      }
    })
  }


  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item =>
        item.id === id ? { ...item, increase: !item.increase } : item
      )
    }));
  }

  onToggleRise = (id) => {
    const updutedData = this.state.data.map(item => {
      if (item.id === id) {
        return {
          ...item, rise: !item.rise
        };
      }
      return item;
    });
    this.setState({
      data: updutedData
    })
  }

  searchEmp =  (items, term) => {
      if (term.length == 0) {
        return items;
      }

      return items.filter(item => {
        return item.name.indexOf(term) > -1
      })
  }

  emplersFilter = (term) => {
      this.setState({
          term: term
      })
  }



  render() {
const {data,term} = this.state;
const visibleData = this.searchEmp (data, term);
    return (
      <div className="app">
        <AppInfo allEmployees={(data.length)} riseTake={((data.filter(item => item.increase == true)).length)} />
        <div className="search-panel">
          <SearchPanel emplersFilter = {this.emplersFilter}/>
          <AppFilter />
        </div>
        <EmployeesList data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }


}








export default App;
