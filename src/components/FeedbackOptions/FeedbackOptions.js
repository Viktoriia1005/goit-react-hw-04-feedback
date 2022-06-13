import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li className={s.item} key={option}>
          <button
            className={s.button}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
