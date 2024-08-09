
import { PropTypes } from 'prop-types';
Welcome.propTypes = {
    name: PropTypes.string.isRequired,
  };

  
export default function Welcome(props) {
    
    return <h1>Привіт, {props.name} !</h1>;
  }