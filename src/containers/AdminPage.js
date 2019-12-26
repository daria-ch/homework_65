import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {PAGES} from "../constants";

class AdminPage extends Component {
    state = {
        title: '',
        description: '',
        category: PAGES[0]
    };

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    async getInfo() {
        const page = this.state.category;
        const response = await axiosApi.get('/pages/' + page + '.json');
        if (response.data) {
            this.setState({title: response.data.title, description: response.data.description});
        }
    }

    async componentDidMount() {
        this.getInfo();
    }

    formSubmitHandler = async (e) => {
        e.preventDefault();

        const editedInfo = {
            title: this.state.title,
            description: this.state.description,
        };
        this.setState({title: '', description: ''});

        const page = this.state.category;
        await axiosApi.put('/pages/' + page + '.json', editedInfo);
        this.props.history.push('/pages/' + page);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category) {
            return this.getInfo();
        }
    }

    render() {
        return (
            <div>
                <h1>Edit pages</h1>
                <Form onSubmit={this.formSubmitHandler}>
                    <FormGroup>
                        <Label for="category">Page</Label>
                        <Input type="select" name="category" id="category" value={this.state.category}
                               onChange={this.inputChangeHandler}>
                            {PAGES.map(page => (
                                <option key={page} value={page}>{page}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input required
                               type="text"
                               name="title"
                               id="title"
                               placeholder="Enter title"
                               autoComplete='off'
                               value={this.state.title}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input required
                               type="textarea"
                               name="description"
                               id="description"
                               placeholder="Enter description..."
                               autoComplete='off'
                               value={this.state.description}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <Button color="dark">Save</Button>{' '}
                </Form>
            </div>


        );
    }
}

export default AdminPage;