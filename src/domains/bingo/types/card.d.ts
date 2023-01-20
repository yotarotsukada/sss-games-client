export {};
declare global {
  type CardType = [
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number]
  ];

  type CreateCardArgs = {
    password?: string;
  };
}
