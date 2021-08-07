import * as React from 'react';
export interface SettingsProps {
  toggleSound: () => void;
  toggleFlash: () => void;
  soundOn: boolean;
  flashOn: boolean;
}

export interface SettingsState {
  soundOn: boolean;
  flashOn: boolean;
}

class Settings extends React.Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);
    this.state = { soundOn: this.props.soundOn, flashOn: this.props.flashOn };
  }
  componentDidUpdate(prevProps: SettingsProps) {
    if (this.props.soundOn !== prevProps.soundOn) {
      this.setState({ soundOn: this.props.soundOn });
    }
    if (this.props.flashOn !== prevProps.flashOn) {
      this.setState({ flashOn: this.props.flashOn });
    }
  }
  render() {
    return (
      <div className="column">
        <label>
          Sound?
          <input
            name="soundOn"
            type="checkbox"
            checked={this.state.soundOn}
            onChange={() => this.props.toggleSound()}
          />
        </label>
        <label>
          Flash?
          <input
            name="flashOn"
            type="checkbox"
            checked={this.state.flashOn}
            onChange={() => this.props.toggleFlash()}
          />
        </label>
      </div>
    );
  }
}

export default Settings;
