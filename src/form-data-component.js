import React, { Component } from 'react';

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        if (JSON.parse(localStorage.getItem('default'))){
            this.userData = JSON.parse(localStorage.getItem('default'));
            this.state = {
                name: '',
                email: '',
                phone: '',
                dueDate: '',
                number: this.userData.number,
            }
        } else {
            this.state = {
                name: '',
                email: '',
                phone: '',
                dueDate: '',
                number: 0
            }
        }

    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangeDueDate(e) {
        this.setState({ dueDate: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            number: this.state.number + 1
        })

        const taskItem = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dueDate: this.state.dueDate
        }

        localStorage.setItem('user' + this.state.number , JSON.stringify(taskItem));


        this.setState({
            name: '',
            email: '',
            phone: '',
            dueDate: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('default'));

        if (localStorage.getItem('default')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone,
                dueDate: this.userData.dueDate
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: '',
                dueDate: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('default', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Due Time</label>
                        <input type="datetime-local" className="form-control" value={this.state.dueDate} onChange={this.onChangeDueDate} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}