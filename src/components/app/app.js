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
      data: [],
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
  this.setState(({data}) => ({
    data: data.map(item =>
        item.id === id ? {...item,increase: !item.increase}:item
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



  render() {

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data}
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
