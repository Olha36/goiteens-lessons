import { PropTypes } from 'prop-types';

export default function Sticker({ img, label, onClick }) {
    return (
      <div  onClick={() => onClick(label)}>
        <img src={img} alt={label} />
      </div>
    );
  }
  
  Sticker.propTypes = {
    img: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };