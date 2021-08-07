import * as React from 'react';

export interface ModesProps {
  setTime: (time: number) => void;
  isCounting: boolean;
}
//TODO when pressed change color or disable other modes
export interface ModesState {}

class Modes extends React.Component<ModesProps, ModesState> {
  constructor(props: ModesProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="column ">
        <button
          style={{ backgroundColor: 'lightgreen' }}
          onClick={() => this.props.setTime(25)}
        >
          Pomodoro
        </button>
        <button
          style={{ backgroundColor: 'lightblue' }}
          onClick={() => this.props.setTime(5)}
        >
          Short Break
        </button>
        <button
          style={{ backgroundColor: 'pink' }}
          onClick={() => this.props.setTime(10)}
        >
          Long Break
        </button>
      </div>
    );
  }
}

export default Modes;
