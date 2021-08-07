import * as React from 'react';

export interface TimerProps {
  time: number;
}

export interface TimerState {}

class Timer extends React.Component<TimerProps, TimerState> {
  constructor(props: TimerProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="timer">{this.props.time}</div>;
  }
}

export default Timer;
