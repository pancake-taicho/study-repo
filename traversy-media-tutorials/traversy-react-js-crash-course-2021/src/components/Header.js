// with the ES7 React extension you can import PropTypes with: impt
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      
    </div>
  )
}

// you can define default props for a component:
Header.defaultProps = {
  title: 'Task Tracker',
}

// defining the data type of each of your props can make your code
// more robust and catch errors before they happen
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// you can also define CSS styles in an object variable:
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header