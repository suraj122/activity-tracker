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
          <span onClick={() => props.close(i)} className="cross">
            X
          </span>
        </section>
      ))}
    </>
  );
}

export default ActivityTrack;

class Days extends React.Component {
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
          <li key={i}>
            <input
              className="checkbox"
              id={i + this.props.days.activityname}
              name="item"
              type="checkbox"
            />
            <label htmlFor={i + this.props.days.activityname}>{item}</label>
          </li>
        ))}
      </ul>
    );
  }
}
