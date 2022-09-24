import { CardType } from '@/types/card';
import seedrandom from 'seedrandom';

const ROW_NUM = 5;
const CELL_NUM_PER_ROW = 15;

const generateCard = (seed: string | number): CardType => {
  return [...Array(ROW_NUM)].map((_, col) =>
    [...Array(ROW_NUM)].map((_, row) => {
      return col * CELL_NUM_PER_ROW + row + 1;
    })
  ) as CardType;
};

export class CardService {
  create = (): CardType => {
    const random = seedrandom('hoge');
    return generateCard(random());
  };
}
