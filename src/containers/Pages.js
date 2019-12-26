import React, {Component} from 'react';
import axiosApi from "../axios-api";

class Pages extends Component {

    state = {
        title: '',
        description: ''
    };

    async getInfo() {
        const page = this.props.match.params.name;
        const response = await axiosApi.get('/pages/' + page + '.json');
        if (response.data) {
            this.setState({title: response.data.title, description: response.data.description});
        }
    }

    async componentDidMount() {
        this.getInfo();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.getInfo();
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.description}</p>
            </div>
        );
    }
}

export default Pages;