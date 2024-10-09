import { PropTypes } from 'prop-types';
import stickers from '../assets/stickers.json';
import Sticker from '../components/sticker';
import styled from 'styled-components';

StickerList.propTypes = {
  onStickerSelect: PropTypes.func,
};

const  StickersContainer = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// a component that will render all stickers from the file stickers.json
export default function StickerList({ onStickerSelect }) {
  return (
    <div>
      <StickersContainer>
        {stickers.map((sticker, index) => (
          <Sticker key={index} img={sticker.img} label={sticker.label} onClick={onStickerSelect} />
        ))}
      </StickersContainer>
    </div>
  );
}
