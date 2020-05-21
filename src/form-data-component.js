import React, { Component } from 'react';

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            number: 0
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

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            number: this.state.number + 1
        })

        const person = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }

        localStorage.setItem('user' + this.state.number , JSON.stringify(person));


        this.setState({
            name: '',
            email: '',
            phone: '',
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('default'));

        if (localStorage.getItem('default')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
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
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}