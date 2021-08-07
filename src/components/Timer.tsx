import * as React from 'react';

export interface TimerProps {
  time: number;
  soundOn: boolean;
  flashOn: boolean;
  isStopped: boolean;
  flash: () => void;
}

export interface TimerState {
  mins: number;
  secs: number;
}

class Timer extends React.Component<TimerProps, TimerState> {
  timer: number;
  constructor(props: TimerProps) {
    super(props);
    this.state = { mins: this.props.time - 1, secs: 59 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
    this.beep = this.beep.bind(this);
  }
  componentDidUpdate(prevProps: TimerProps) {
    if (this.props.time !== prevProps.time) {
      this.setState({ mins: this.props.time });
    }
    if (this.props.isStopped !== prevProps.isStopped) {
      if (this.props.isStopped) {
        window.clearInterval(this.timer);
      } else {
        this.timer = 0;
        this.startTimer();
      }
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  audioContext = AudioContext && new AudioContext();
  beep(amp: number, freq: number, ms: number) {
    //amp:0..100, freq in Hz, ms
    if (!this.audioContext) return;
    var osc = this.audioContext.createOscillator();
    var gain = this.audioContext.createGain();
    osc.connect(gain);
    //osc.value = freq;
    gain.connect(this.audioContext.destination);
    gain.gain.value = amp / 100;
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + ms / 1000);
  }

  tick() {
    if (this.state.mins === 0 && this.state.secs === 0) {
      this.reset();
    } else if (this.state.secs === 0) {
      this.setState({
        mins: this.state.mins - 1,
        secs: 59,
      });
    } else {
      this.setState({
        secs: this.state.secs - 1,
      });
    }
  }

  reset() {
    window.clearInterval(this.timer);
    if (this.props.soundOn) {
      this.beep(65, 500, 300);
    }
    if (this.props.flashOn) {
      this.props.flash();
    }
  }
  startTimer() {
    if (this.timer === 0 && (this.state.secs > 0 || this.state.mins > 0)) {
      this.timer = window.setInterval(this.tick, 1000);
    }
  }

  render() {
    return (
      <div className="timer">
        {this.state.mins.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {this.state.secs.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
    );
  }
}

export default Timer;
