import { PropTypes } from 'prop-types';
import stickers from '../assets/stickers.json';
import Sticker from '../components/sticker';

StickerList.propTypes = {
  onStickerSelect: PropTypes.func,
};

// a component that will render all stickers from the file stickers.json
export default function StickerList({ onStickerSelect }) {
  return (
    <div>
      <div className='stickers-container'>
        {stickers.map((sticker, index) => (
          <Sticker key={index} img={sticker.img} label={sticker.label} onClick={onStickerSelect} />
        ))}
      </div>
    </div>
  );
}
