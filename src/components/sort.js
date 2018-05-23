import React, {Component} from 'react';
import CheckableInput from './checkable_form_input';

class Sort extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const boxes =  this.props.optionsList.map((option, idx) => {
            return <CheckableInput
                key={idx}
                onOptionChange={this.props.onListSort}
                value={option.value}
                name={option.name}
                type={option.type}
                title={option.title}/>
        });

        return(
            <div>
                {boxes}
            </div>
        );
    }
}

export default Sort;


