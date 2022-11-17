import { Game } from "@/types";

export function getBasketTotalAmount(basket: Game[]): number {
  return basket.reduce<number>((accumulator: number, current: Game) => {
    return accumulator + current.price * current.quantity;
  }, 0);
}
