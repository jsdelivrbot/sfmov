import React, {Component} from 'react';

/* Can render an input of any type passed */
class CheckableInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onOptionChange(e.target);
    }

    render() {
        const value = this.props.value;
        const type = this.props.type;
        const name = this.props.name;
        const title = this.props.title;
        return (
            <label>
                <input value={value}
                       name={name}
                       type={type}
                       onChange={this.handleChange}/>
                {title}
            </label>
        );
    }
}

export default CheckableInput;