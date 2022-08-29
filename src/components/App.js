import React from "react";
import ActivityTrack from "./ActivityTrack";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      activity: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => {
      let activity = this.state.activity;
      return activity.push({
        activityname: this.state.inputText,
        date: new Date(),
      });
    });
  };

  render() {
    return (
      <>
        <Header
          change={this.handleChange}
          value={this.state.inputText}
          submit={this.handleSubmit}
        />
        <ActivityTrack data={this.state.activity} />
      </>
    );
  }
}

export default App;
