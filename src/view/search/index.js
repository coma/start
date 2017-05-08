import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGitHub } from 'src/store/action/github';
import Input from 'src/ui/input';
import Button from 'src/ui/button';
import './style.css';

export class Search extends PureComponent {

    constructor (props) {

        super(props);

        this.state = {
            name: ''
        };
    }

    search (event) {

        event.preventDefault();

        this
            .props
            .search(this.state.name);
    }

    update ({target: {name, value}}) {

        this.setState({
            [name]: value
        });
    }

    render () {

        const {name} = this.state;

        return (
            <form className="b-search" noValidate autoComplete="off" onSubmit={ event => this.search(event) }>
                <Input
                    type="text"
                    name="name"
                    value={ name }
                    onChange={ event => this.update(event) } />
                <Button type="submit">search</Button>
            </form>
        );
    }
}

const mapActions = dispatch => ({
    search: bindActionCreators(fetchGitHub, dispatch)
});

export default connect(null, mapActions)(Search);
