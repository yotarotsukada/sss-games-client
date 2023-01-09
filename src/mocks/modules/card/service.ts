import seedrandom from 'seedrandom';

const ROW_NUM = 5;
const CELL_NUM_PER_COL = 15;

const generateCard = (seed: string | number): CardType => {
  return [...Array(ROW_NUM)].map((_, col) =>
    [...Array(ROW_NUM)].map((_, row) => {
      return col * CELL_NUM_PER_COL + row + 1;
    })
  ) as CardType;
};

class CardService {
  create = (): CardType => {
    const random = seedrandom('hoge');
    return generateCard(random());
  };
}

export const cardService = new CardService();
