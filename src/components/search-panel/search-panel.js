import './search-panel.css';
import { Component } from 'react';





class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }

    emplersFilter = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.emplersFilter(term)

    }




    render() {
        return (
            <input onChange={this.emplersFilter} type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника" 
                value={this.state.term}/>
        )
    }
}








export default SearchPanel;