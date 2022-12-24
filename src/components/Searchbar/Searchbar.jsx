import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, Button, Input } from './Searchbar.styled.jsx';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter a value to search!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit">
            <BiSearchAlt2 style={{ width: 25, height: 25 }} />
          </Button>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
