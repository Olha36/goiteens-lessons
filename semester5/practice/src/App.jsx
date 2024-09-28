import { useState } from 'react';
import './App.css';
import './assets/stickers.json';
import stickers from './assets/stickers.json';
import Sticker from './components/sticker';


// a component that will render all stickers from the file stickers.json
function StickerList() {
  const [selectedSticker, setSelectedSticker] = useState(null);

  const handleStickerClick = (label) => {
    setSelectedSticker(label); // оновлюємо стан при кліку на стікер
  };

  return (
    <div>
      <div className='stickers-container'>
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            img={sticker.img}
            label={sticker.label}
            onClick={handleStickerClick}
          />
        ))}
      </div>
      <div>
        {selectedSticker ? <p>Selected sticker: {selectedSticker}</p> : <p>No sticker selected</p>}
      </div>
    </div>
  );
}

// displays chosen name of sticker. When user clicks on sticker in StickerList, component Choice shall show the name of sticker
function Choice() {}

function App() {
  return (
    <>
      <StickerList />
      <Choice />
    </>
  );
}

export default App;
