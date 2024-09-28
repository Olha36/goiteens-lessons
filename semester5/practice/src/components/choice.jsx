import { PropTypes } from 'prop-types';
Choice.propTypes = {
  selectedSticker: PropTypes.string,
};
// displays chosen name of sticker. When user clicks on sticker in StickerList, component Choice shall show the name of sticker
export default function Choice({ selectedSticker }) {
  return (
    <div>
      {selectedSticker ? <p>Selected sticker: {selectedSticker}</p> : <p>No sticker selected</p>}
    </div>
  );
}
