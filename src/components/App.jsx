import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics'
import Notification from "./Notification";

export default function App () {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (event) => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return new Error(`State doesn't exist`);
    }
  }

  const countTotalFeedback = () => {

  return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {

    const total = countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return total ? positivePercentage : 0;
  };

    return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (<Notification message="There is no feedback"></Notification>):
        (<Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={countTotalFeedback()} 
        positivePercentage={countPositiveFeedbackPercentage()}/>)}
      </Section>
    </>)
  
}