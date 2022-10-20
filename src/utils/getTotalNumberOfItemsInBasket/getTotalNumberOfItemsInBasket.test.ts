import { getTotalNumberOfItemsInBasket } from "./getTotalNumberOfItemsInBasket";

describe("getTotalNumberOfItemsInBasket", () => {
  it("returns the total quantity of items in a given basket", () => {
    const basket = [
      {
        id: "12345",
        artworkUrl: "",
        title: "Game",
        price: 1.5,
        rating: 5,
        releaseDate: "2011-10-01",
        tags: ["Shooter"],
        inBasket: true,
        quantity: 2,
      },
      {
        id: "12345",
        artworkUrl: "",
        title: "Game",
        price: 1.5,
        rating: 5,
        releaseDate: "2011-10-01",
        tags: ["Shooter"],
        inBasket: true,
        quantity: 2,
      },
      {
        id: "12345",
        artworkUrl: "",
        title: "",
        price: 1.5,
        rating: 1.5,
        releaseDate: "2011-10-01",
        tags: ["Shooter"],
        inBasket: true,
        quantity: 2,
      },
    ];

    expect(getTotalNumberOfItemsInBasket(basket)).toEqual(6);
  });
});
