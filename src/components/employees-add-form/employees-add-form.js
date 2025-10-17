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
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    onReset = () => {
        this.setState({
            name: "",
            salery: ""

        })
    }



    render() {
        const { addItem } = this.props;
        const { name, salery } = this.state;
        const reset = this.onReset;




        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>

                <form
                    className="add-form d-flex">
                    <input onChange={this.onChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} />
                    <input onChange={this.onChange} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salery"
                        value={salery} />

                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={(e) => {
                            e.preventDefault();
                            addItem(name, salery);
                            reset()
                        }}


                    >Добавить</button>
                </form>
            </div >
        )

    }

}

export default EmployeesAddForm;