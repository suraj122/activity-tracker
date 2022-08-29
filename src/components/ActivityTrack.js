import React from "react";

function ActivityTrack(props) {
  return (
    <>
      {props.data.map((item, i) => (
        <section key={i} className="track flex">
          <div className="activity text-center">
            <h2>{item.activityname}</h2>
            <h3>{item.date.toLocaleString("default", { month: "long" })}</h3>
          </div>
          <Days days={item} />
        </section>
      ))}
    </>
  );
}

export default ActivityTrack;

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      isActive: false,
    };
  }

  handleActive = (i) => {
    this.setState({
      isActive: !this.state.isActive,
      activeIndex: i,
    });
  };

  render() {
    let num = new Date(
      this.props.days.date.getFullYear(),
      this.props.days.date.getMonth() + 1,
      0
    ).getDate();
    let totaldays = [];
    for (let i = 1; i <= num; i++) {
      totaldays.push(i);
    }

    return (
      <ul className="days">
        {totaldays.map((item, i) => (
          <li
            className={this.state.activeIndex === i ? "active" : ""}
            onClick={() => this.handleActive(i)}
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}
