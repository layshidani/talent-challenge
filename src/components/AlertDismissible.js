import React from 'react';
import Alert from 'react-bootstrap/Alert';

class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      variant: props.variant,
      heading: props.heading || undefined,
      text: props.text,

    };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    return (
      <React.Fragment>
        <Alert show={this.state.show} variant={this.state.variant} onClose={handleHide} dismissible>
          {
            this.state.heading && <Alert.Heading>{this.state.heading}</Alert.Heading>
          }
          <p>{this.state.text}</p>
        </Alert>
      </React.Fragment>
    );
  }
}
export default AlertDismissible;