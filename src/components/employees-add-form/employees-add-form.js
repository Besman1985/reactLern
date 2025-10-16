import './employees-add-form.css';

import { Component } from 'react';





class EmployeesAddForm extends Component {

   
    

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salery: ""

        }
    }

    onChange = (e) => {
     this.setState  ({
         [e.target.name] : e.target.value

     })

    }


    render() {

        const {name, salery} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
            
                <form
                    className="add-form d-flex">
                    <input onChange = {this.onChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name= "name"
                        value={name} />
                    <input onChange = {this.onChange} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name= "salery"
                        value={salery} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )

    }

}

export default EmployeesAddForm;