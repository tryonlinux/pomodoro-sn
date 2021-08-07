import * as React from 'react';
export interface ActionsProps {
  setTime: (time: number) => void;
  toggleTimer: (isCounting: boolean) => void;
  isCounting: boolean;
}

export interface ActionsState {}

class Actions extends React.Component<ActionsProps, ActionsState> {
  constructor(props: ActionsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="column">
        <button
          style={{ backgroundColor: 'lightgreen' }}
          disabled={this.props.isCounting}
          onClick={() => this.props.toggleTimer(true)}
        >
          Start
        </button>
        <button
          style={{ backgroundColor: 'crimson' }}
          disabled={!this.props.isCounting}
          onClick={() => this.props.toggleTimer(false)}
        >
          Stop
        </button>
        <button
          style={{ backgroundColor: 'lightgray' }}
          onClick={() => this.props.setTime(25)}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Actions;
