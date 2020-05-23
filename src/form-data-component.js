import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeExpHours = this.onChangeExpHours.bind(this);
        this.onChangeExpMins = this.onChangeExpMins.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            dueDate: '',
            completed: false,
            description: '',
            expHours: '',
            expMins: '',
            priority: ''
        }
        
        if (JSON.parse(localStorage.getItem('default'))){
            this.userData = JSON.parse(localStorage.getItem('default'));
            this.state = {
                number: this.userData.number
            }
        } else {
            this.state = {
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

    onChangeDueDate(e) {
        this.setState({ dueDate: e.target.value })
    }

    onChangeCompleted(e) {
        this.setState({ completed: e.target.checked })
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }

    onChangeExpHours(e) {
        this.setState({ expHours: e.target.value })
    }

    onChangeExpMins(e) {
        this.setState({ expMins: e.target.value })
    }

    onChangePriority(e) {
        this.setState({ priority: e })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            number: this.state.number + 1
        })

        const taskItem = {
            name: this.state.name,
            email: this.state.email,
            dueDate: this.state.dueDate,
            priority: this.state.priority,
            completed: this.state.completed,
            description: this.state.description,
            expHours: this.state.expHours,
            expMins: this.state.expMins,
        }

        localStorage.setItem('user' + this.state.number , JSON.stringify(taskItem));


        this.setState({
            name: '',
            email: '',
            dueDate: '',
            priority: '',
            completed: false,
            description: '',
            expHours: '',
            expMins: '',
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('default'));

        if (localStorage.getItem('default')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                dueDate: this.userData.dueDate,
                priority: this.userData.priority,
                completed: this.userData.completed,
                description: this.userData.description,
                expHours: this.userData.expHours,
                expMins: this.userData.expMins,
            })
        } else {
            this.setState({
                name: '',
                email: '',
                dueDate: '',
                priority: '',
                completed: false,
                description: '',
                expHours: '',
                expMins: '',
            })
        }

    }

    UNSAFE_componentWillUpdate(nextProps, nextState) { //FIXME: AMEND USAGE TO NON-DEPRECATED LIFECYCLE METHOD
        localStorage.setItem('default', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={wrapperStyle}>
                        <p>Priority Slider (3 = Greatest Priority)</p>
                        <Slider min={1} max={3} defaultValue={1} handle={handle} marks={marks} value={this.state.priority || 1} onChange={this.onChangePriority}/>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name || ''} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email || ''} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Due Time</label>
                        <input type="datetime-local" className="form-control" value={this.state.dueDate || ''} onChange={this.onChangeDueDate} />
                    </div>
                    <div className="form-group">
                        <label>Completed?</label>
                        <input type="checkbox" id="iscompleted" className="form-control" name="box1" checked={this.state.completed||false} onChange={this.onChangeCompleted}/>
                    </div>
                    <div className="form-group"> 
                        <label> Description </label>
                        <textarea id="txtArea" className="form-control" rows="10" cols="70" name="txtbox" value={this.state.description || ''} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="container-fluid"> 
                        <div class="row">
                            <div class="col-lg-6">
                                <label>Hours</label>
                                <input type="number" className="form-control" min="1" max="100" value={this.state.expHours || ''} onChange={this.onChangeExpHours}/>
                            </div>
                            <div class="col-lg-6">
                                <label>Minutes</label>
                                <input type="number" className="form-control" min="0" max="60" value={this.state.expMins || ''} onChange={this.onChangeExpMins}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}

const wrapperStyle = { width: 400, margin: 50 };
const marks = {
    1: <strong>1</strong>,
    2: <strong>2</strong>,
    3: <strong>3</strong>,
};

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};