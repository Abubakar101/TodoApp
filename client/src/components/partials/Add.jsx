import React, { Component } from 'react';

class Add extends Component {
  render() {
    return (
      <form className="add">
        <input
          className="title"
          type="text"
          placeholder="Title"
        />
        <input
          className="category"
          type="text"
          placeholder="Category"
        />
        <input
          className="description"
          type="text"
          placeholder="description"
        />
        <button
          type="submit"
          className="submit"
        >
            Add Item
        </button>
      </form>
    );
  }
}

export default Add;