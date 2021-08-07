import * as React from 'react';

export interface TimeInputProps {
  setTime: (time: number) => void;
  time: number;
}

export interface TimeInputState {
  timeInput: number;
}

class TimeInput extends React.Component<TimeInputProps, TimeInputState> {
  constructor(props: TimeInputProps) {
    super(props);
    this.state = {
      timeInput: this.props.time,
    };
  }

  componentDidUpdate(prevProps: TimeInputProps) {
    if (this.props.time !== prevProps.time) {
      this.setState({ timeInput: this.props.time });
    }
  }

  setTheTime() {}
  render() {
    return (
      <div>
        <form>
          <input
            className="time-input"
            type="number"
            placeholder="0"
            name="timeInput"
            max="59"
            min="0"
            value={this.state.timeInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              let value: number = Number(e.target.value);
              if (value > 59) {
                value = 59;
              } else if (value < 1) {
                value = 1;
              }
              this.setState({
                timeInput: Number(value),
              });
            }}
            onBlur={() => this.props.setTime(this.state.timeInput)}
          />
        </form>
      </div>
    );
  }
}

export default TimeInput;
