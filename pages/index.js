import { useEffect, useState } from 'react';
import { getFlashcards } from '../models/flashcard';

export default function Flashcards() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cards = await getFlashcards();
      setFlashcards(cards);
    };
    fetchData();
  }, []);

  return (
    <div>
      {flashcards.map((card, index) => (
        <div key={index}>
          <h3>{card.question}</h3>
          <p>{card.answer}</p>
        </div>
      ))}
    </div>
  );
}
