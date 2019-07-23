import React from 'react';
import Button from '../components/Button';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <h1>#AdminDashboard</h1>
        <Button text='teste' />
      </section>
    )
  }
}

export default AdminDashboard;
