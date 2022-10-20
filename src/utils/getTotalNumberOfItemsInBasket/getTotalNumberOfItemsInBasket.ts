import { Game } from "types/types";

export function getTotalNumberOfItemsInBasket(basket: Game[]): number {
  return basket.reduce<number>((accumulator: number, current: Game) => {
    return accumulator + current.quantity;
  }, 0);
}
