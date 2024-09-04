import {useAppDispatch, useAppSelector} from '~/features/hooks';
import {
  checkMatch,
  flipCard,
  selectCards,
  selectDifficulty,
  selectIsGameOver,
  selectMoves,
  selectTime,
} from '~/features/symboleSlice';

export const useMemoryGame = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(selectCards);
  const isGameOver = useAppSelector(selectIsGameOver);
  const time = useAppSelector(selectTime);
  const moves = useAppSelector(selectMoves);
  const difficulty = useAppSelector(selectDifficulty);

  const handleCardFlip = (id: number) => {
    if (cards.length && !isGameOver) {
      dispatch(flipCard(id));

      setTimeout(() => {
        dispatch(checkMatch());
      }, 1000);
    }
  };

  return {
    cards,
    moves,
    time,
    isGameOver,
    difficulty,
    handleCardFlip,
  };
};
