1. Створити новий репозиторій goiteens-events-js розгорнути в ньому create-react-app
2. Створити файл upcoming-events.json з наступними даними
	[
    {
      "name": "Protecting the outer rim",
      "location": "Corvus, Jangala",
      "speaker": "Jacob Mercer",
      "type": "free",
      "time": {
        "start": "2022-02-17T14:30:00",
        "end": "2022-02-17T16:30:00"
      }
    },
    {
      "name": "The art of spying",
      "location": "Barad sector, Asharu",
      "speaker": "Artemis Tau",
      "type": "free",
      "time": {
        "start": "2022-04-12T18:00:00",
        "end": "2022-04-12T19:00:00"
      }
    },
    {
      "name": "A smugglers tale",
      "location": "Atzlan, Nachiketa",
      "speaker": "Kai Takeda",
      "type": "paid",
      "time": {
        "start": "2022-06-23T17:00:00",
        "end": "2022-06-23T17:30:00"
      }
    },
    {
      "name": "Dealing with the Diktat",
      "location": "Duzhank, Sindria",
      "speaker": "Solomon Fokes",
      "type": "vip",
      "time": {
        "start": "2022-09-03T12:30:00",
        "end": "2022-09-03T18:30:00"
      }
    },
    {
      "name": "Inside the Ludd's Hammer",
      "location": "Hybrasil, Culann",
      "speaker": "Adrian Cross",
      "type": "free",
      "time": {
        "start": "2023-03-07T15:00:00",
        "end": "2023-03-07T17:30:00"
      }
    },
    {
      "name": "Beyond the core worlds",
      "location": "Magec, Achaman",
      "speaker": "Apollo Pillai",
      "type": "vip",
      "time": {
        "start": "2023-05-21T12:00:00",
        "end": "2023-05-21T14:00:00"
      }
    },
    {
      "name": "Mining for profit",
      "location": "Yma, Qaras",
      "speaker": "Archibald Yurzi",
      "type": "paid",
      "time": {
        "start": "2023-08-26T19:00:00",
        "end": "2023-08-26T19:45:00"
      }
 },
    {
      "name": "Deep space horrors",
      "location": "Samarra, Eventide",
      "speaker": "Luke Xamarin",
      "type": "free",
      "time": {
        "start": "2023-11-02T18:30:00",
        "end": "2023-11-02T20:00:00"
      }
    }
  ]

3. Розібрати данні з файлу та оцінити роботу
на які компоненти можна розділити  проєкт
які пропси будуть отримувати кожен з компонентів
які типи пропсів потрібно передати кожному компоненту
4. Створити компонент PageBoard який буде приймати масив з даними як пропс events та використовувати в App.
5. Для відображення іконок використати бібліотеку react-icons. Іконки повинні передаватися компоненту як пропси.
6.Створити компонент Event який буде приймати як пропси name, start, end, location, speaker та буде використаний в компоненті PageBoard .
7.Кожен проп повинен бути описаний пакетом prop-types.
8.Додати стилі до event board згідно зображення
(обмежень в індивідуальному підході ніяких, можна додавати
свої стилі). 
9. При виконанні роботи обов’язково повинні використовуватися styled-component,
createGlobalStyle, 

