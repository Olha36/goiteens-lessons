import { useState } from 'react';
import './App.css';
import './assets/stickers.json';
import Choice from './components/choice';
import StickerList from './components/stickerList';

function App() {
  const [selectedSticker, setSelectedSticker] = useState(null);

  const handleStickerClick = (label) => {
    setSelectedSticker(label); // оновлюємо стан при кліку на стікер
  };
  return (
    <>
      <StickerList onStickerSelect={handleStickerClick} />
      <Choice selectedSticker={selectedSticker} />
    </>
  );
}

export default App;
