import React, { Component } from "react";

class Add extends Component {
  render() {
    return (
      <form className="add" onSubmit={e => this.props.railsSubmit(e)}>
        <input name="title" className="title" type="text" placeholder="Title" />
        <input
          name="category"
          className="category"
          type="text"
          placeholder="Category"
        />
        <input
          name="description"
          className="description"
          type="text"
          placeholder="description"
        />
        <input className="status" type="hidden" value="To Do" />
        <button type="submit" className="submit">
          Add Item
        </button>
      </form>
    );
  }
}

export default Add;
