//TODO Add flash function
//TODO add gif to readme
//TODO add to listed.to
import React from 'react';
import TimeInput from './TimeInput';
import Timer from './Timer';
import ComponentRelay from '@standardnotes/component-relay';
import Settings from './Settings';
import Actions from './Actions';
import Modes from './Modes';
export interface EditorInterface {
  isCounting: boolean;
  time: number;
  soundOn: boolean;
  flashOn: boolean;
  isStopped: boolean;
}

const initialState = {
  isCounting: false,
  time: 25,
  soundOn: true,
  flashOn: true,
  isStopped: true,
};

export default class Editor extends React.Component<{}, EditorInterface> {
  constructor(props: EditorInterface) {
    super(props);
    this.state = initialState;
    this.setTime = this.setTime.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.toggleFlash = this.toggleFlash.bind(this);
    this.toggleIsStopped = this.toggleIsStopped.bind(this);
    this.flash = this.flash.bind(this);
    let componentRelay = new ComponentRelay({ targetWindow: window });
    componentRelay.setSize('100%', '40px');
  }

  setTime(time: number): void {
    this.setState({ time, isCounting: false, isStopped: true });
  }
  toggleTimer(isCounting: boolean) {
    this.setState({ isCounting, isStopped: !this.state.isStopped });
  }
  toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }
  toggleFlash() {
    this.setState({ flashOn: !this.state.flashOn });
  }
  toggleIsStopped() {
    this.setState({ isStopped: !this.state.isStopped });
  }
  flash() {
    alert('flash flash');
  }

  render() {
    return (
      <div className="sn-component">
        <div className="container">
          <div className="column">
            {this.state.isCounting ? (
              <Timer
                time={this.state.time}
                soundOn={this.state.soundOn}
                flashOn={this.state.flashOn}
                isStopped={this.state.isStopped}
                flash={this.flash}
              />
            ) : (
              <TimeInput time={this.state.time} setTime={this.setTime} />
            )}
          </div>
          <div className="vl column" />
          <Actions
            setTime={this.setTime}
            isCounting={this.state.isCounting}
            isStopped={this.state.isStopped}
            toggleTimer={this.toggleTimer}
            toggleIsStopped={this.toggleIsStopped}
          />
          <div className="vl column" />
          <Modes setTime={this.setTime} isCounting={this.state.isCounting} />
          <div className="vl column" />
          <Settings
            soundOn={this.state.soundOn}
            flashOn={this.state.flashOn}
            toggleSound={this.toggleSound}
            toggleFlash={this.toggleFlash}
          />
        </div>
      </div>
    );
  }
}
