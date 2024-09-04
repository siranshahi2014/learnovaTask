This is a simple memory game built using React Native with TypeScript. The game displays a grid of cards with hidden symbols, and the player needs to find matching pairs by flipping two cards at a time. It includes features such as difficulty levels, a move counter, a timer, and a leaderboard.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Assumptions and Decisions](#assumptions-and-decisions)
- [Completed Features](#completed-features)
- [Ideas for Future Improvements](#ideas-for-future-improvements)

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/siranshahi2014/learnovaTask.git

   ```

2. **Navigate to the project directory**:
   cd learnovaTask

3. **Install the dependencies**:
   yarn install

4. **Start the development server: For iOS**:
   yarn ios

## Assumptions and Decisions

Leaderboard: The leaderboard is local and uses redux-persist to store data on the device. This was chosen to avoid the need for a backend service, though a future implementation could involve a remote API for global leaderboards.

Difficulty Levels: The game has three difficulty levels—Easy (4x4), Medium (6x6), and Hard (8x8). The number of cards in the grid is adjusted based on the difficulty level chosen by the user.

Animations: Card flipping is handled using Animated from react-native. The flip animation time is set to 300ms for a smooth experience.

State Management: The entire game state is managed using Redux Toolkit. RTK Query is used to fetch symbols from a mock API.

## Completed Features

Card Flip Animation: Smooth card flipping animation when a card is clicked.
Redux Toolkit for State Management: The game state, including the cards, moves, and timer, is managed using Redux.
RTK Query Integration: Symbols for the cards are fetched from a mock API using RTK Query.
Leaderboard: Scores are stored locally using Redux Persist.
Move Counter: The number of moves made by the player is displayed.
Timer: A timer that tracks the duration of the game.
Difficulty Levels: Easy, Medium, and Hard difficulty levels with 4x4, 6x6, and 8x8 grids, respectively.
Game Over Detection: The game detects when all cards have been matched and shows a game over message.
Persistent Game State: The game state is persisted across app reloads using redux-persist.

## Ideas for Future Improvements

Global Leaderboard: Integrate a remote backend API to store and retrieve high scores globally, allowing users to compare their scores with others worldwide.

Customizable Player Names: Add a feature where players can input their name before starting the game to be displayed on the leaderboard.

Sound Effects and Visual Feedback: Add sound effects for card flips, successful matches, and game completion, as well as haptic feedback on supported devices.

Multiplayer Mode: Add a multiplayer mode where two players can compete in real-time or asynchronously.

Theming Support: Add light and dark theme support for improved accessibility and user experience.
