//TODO add actual count down timer function
//TODO Add flash function
//TODO add alert function
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
}

const initialState = {
  isCounting: false,
  time: 25,
  soundOn: true,
  flashOn: true,
};

export default class Editor extends React.Component<{}, EditorInterface> {
  constructor(props: EditorInterface) {
    super(props);
    this.state = initialState;
    this.setTime = this.setTime.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.toggleFlash = this.toggleFlash.bind(this);
    let componentRelay = new ComponentRelay({ targetWindow: window });
    componentRelay.setSize('100%', '40px');
  }

  setTime(time: number): void {
    this.setState({ time, isCounting: false });
  }
  toggleTimer(isCounting: boolean) {
    //TODO disable either start of stop
    //TODO then either start the countdown or not
    this.setState({ isCounting });
  }
  toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }
  toggleFlash() {
    this.setState({ flashOn: !this.state.flashOn });
  }

  render() {
    return (
      <div className="sn-component">
        <div className="container">
          <div className="column">
            {this.state.isCounting ? (
              <Timer time={this.state.time} />
            ) : (
              <TimeInput time={this.state.time} setTime={this.setTime} />
            )}
          </div>
          <div className="vl column" />

          <Actions
            setTime={this.setTime}
            isCounting={this.state.isCounting}
            toggleTimer={this.toggleTimer}
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
