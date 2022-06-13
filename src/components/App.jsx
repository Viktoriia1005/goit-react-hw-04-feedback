import React, {Component} from "react";

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics'
import Notification from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
  const  {good, neutral, bad} = this.state;
  return good + neutral + bad
  };

  countPositiveFeedbackPercentage() {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return total ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (<Notification message="There is no feedback"></Notification>):
        (<Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        positivePercentage={positivePercentage}/>)}
      </Section>
    </>)
  }
}