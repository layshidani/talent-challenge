import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

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
        <Navbar/>
        <Card/>
      </section>
    )
  }
}

export default AdminDashboard;
