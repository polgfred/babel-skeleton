import React from 'react';

export default class TimerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      currentTime: Date()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        currentTime: Date()
      });
    }, 1000);
  }

  render() {
    return <div>
      { this.state.currentTime }
    </div>;
  }
}
