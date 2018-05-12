import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor");

  }

  componentWillMount() {
    console.log("[Persons.js] Inside component will mount");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] inside component will receive props', nextProps );
  }

  shouldComponentUpdate(nextProps, state) {
    console.log('[Update Persons.js] Inside should component update', nextProps, state);
    return nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.clicked;
  }

  componentWillUpdate(nextState, props) {
    console.log('[Updates Perons.js] Insdie component will update');
  }
  render() {
    console.log('[Persons.js] inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          clicked={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
