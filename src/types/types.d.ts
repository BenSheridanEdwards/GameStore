export type Game = {
  id: string;
  artworkUrl: string;
  title: string;
  price: number;
  rating: number;
  releaseDate: string;
  tags: string[];
  inBasket: boolean;
  quantity: number;
};

export type Rates = {
  USD: number;
  GBP: number;
  EUR: number;
  [x: string]: number;
};

export type GamesApiData = {
  games: Game[];
};
