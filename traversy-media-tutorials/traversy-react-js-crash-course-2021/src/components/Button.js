import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  return (
    <div>
      <button 
        style={{ backgroundColor: color }}
        className='btn'>
          {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}

export default Button;
