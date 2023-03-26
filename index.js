const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", (req, res) => {
  try {
    res.status(200).send([
      {
        id: 1,
        name: "Battle Grounds",
        rating: 2,
        category: "Sport, Funny",
        model: "Compete 100 players",
        controller: "Playstation 5 , Xbox , PS4",
        description:
          "Compete with 100 players on a remote thats island for winner takes showdown known issue",
        price: 200,
        img: "https://themebeyond.com/html/geco/Geco/img/images/released_game_img02.jpg",
        path: "https://themebeyond.com/html/geco/Geco/img/images/release_game_nav02.jpg",
      },
      {
        id: 2,
        name: "Apex Lengends",
        rating: 3,
        category: "Action genre",
        model: "Compete 50 players",
        controller: "Playstation 5 , Xbox , PS4",
        description:
          "Compete with 100 players on a remote thats island for winner takes showdown known issue",
        price: 150,
        img: "https://themebeyond.com/html/geco/Geco/img/images/released_game_img03.jpg",
        path: "https://themebeyond.com/html/geco/Geco/img/images/release_game_nav03.jpg",
      },
      {
        id: 3,
        name: "Call of Duty",
        rating: 4,
        category: "Virtual Game",
        model: "Compete 100 players",
        controller: "Playstation 5 , Xbox , PS4, PS5,",
        description:
          "Compete with 100 players on a remote thats island for winner takes showdown known issue",
        price: 100,
        img: "https://themebeyond.com/html/geco/Geco/img/images/released_game_img01.jpg",
        path: "https://themebeyond.com/html/geco/Geco/img/images/release_game_nav01.jpg",
      },
      {
        id: 4,
        name: "Battle Grounds",
        rating: 2,
        category: "Sport, Funny",
        model: "Compete 100 players",
        controller: "Playstation 5 , Xbox , PS4",
        description:
          "Compete with 100 players on a remote thats island for winner takes showdown known issue",
        price: 200,
        img: "https://themebeyond.com/html/geco/Geco/img/images/released_game_img02.jpg",
        path: "https://themebeyond.com/html/geco/Geco/img/images/release_game_nav02.jpg",
      },
      {
        id: 5,
        name: "Apex Lengends",
        rating: 3,
        category: "Action genre",
        model: "Compete 50 players",
        controller: "Playstation 5 , Xbox , PS4",
        description:
          "Compete with 100 players on a remote thats island for winner takes showdown known issue",
        price: 150,
        img: "https://themebeyond.com/html/geco/Geco/img/images/released_game_img03.jpg",
        path: "https://themebeyond.com/html/geco/Geco/img/images/release_game_nav03.jpg",
      },
      {
        id: 6,
        name: "Call of Duty",
        rating: 4,
        category: "Virtual Game",
        model: "Compete 100 players",
        controller: "Playstation 5 , Xbox , PS4, PS5,",
        description:
          "Compete with 100 players on a remote thats island for winner takes showdown known issue",
        price: 100,
        img: "https://themebeyond.com/html/geco/Geco/img/images/released_game_img01.jpg",
        path: "https://themebeyond.com/html/geco/Geco/img/images/release_game_nav01.jpg",
      },
    ]);
  } catch (error) {
    res.status(500).send("get products failed");
  }
});

app.use("/accessories", (req, res) => {
  try {
    res.status(200).send([
      {
        rating: 2,
        id: "1",
        name: "GAMING T-SHIRT",
        price: 12,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item01.jpg",
        introduce:
          "The first T-shirts were used as bras in the army of World War II. When the European army entered World War II, when the soldiers were provided with uniforms and other items, they were provided with an undershirt made of soft elastic material to ensure their safety. comfortable for the soldier. That T-shirt is provided in every soldier's possession with a simple design, excellent sweat absorption. Since then, that bra has created a comfortable fashion phenomenon in the US military.",
      },
      {
        rating: 4,
        id: "2",
        name: "GAMING BACKPACK",
        price: 19,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item02.jpg",
        introduce:
          "This was the most used type of briefcase at that time. Just like schoolbag, Backpack is a compound noun: back means behind and pack means package. A backpack with two shoulder straps, fully controllable and adjustable in length to suit the user",
      },
      {
        rating: 4,
        id: "3",
        name: "XBOX ONE CONTROLLER",
        price: 14,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item03.jpg",
        introduce:
          "Gamepad is certainly no longer strange to those of you who often play games on electronic devices. So what is a gamepad? How to use? Is it as good as keyboard and mouse? Let's read the article below to know more information about this gaming device!",
      },
      {
        rating: 5,
        id: "4",
        name: "GAMING T-SHIRT",
        price: 12,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item04.jpg",
        introduce:
          "This was the most used type of briefcase at that time. Just like schoolbag, Backpack is a compound noun: back means behind and pack means package. A backpack with two shoulder straps, fully controllable and adjustable in length to suit the user",
      },
      {
        rating: 3,
        id: "5",
        name: "GAMING BACKPACK",
        price: 17,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item05.jpg",
        introduce:
          "This was the most used type of briefcase at that time. Just like schoolbag, Backpack is a compound noun: back means behind and pack means package. A backpack with two shoulder straps, fully controllable and adjustable in length to suit the user",
      },
      {
        rating: 4,
        id: "6",
        name: "JOY‑CON CONTROLLERS",
        price: 14,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item06.jpg",
        introduce:
          "This was the most used type of briefcase at that time. Just like schoolbag, Backpack is a compound noun: back means behind and pack means package. A backpack with two shoulder straps, fully controllable and adjustable in length to suit the user",
      },
      {
        rating: 5,
        id: "7",
        name: "NINTENDO SWITCH",
        price: 50,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item07.jpg",
        introduce:
          "As one of the largest and most influential game companies in the world, few people know that Nintendo started out as a small store in Shimogyō-ku ward, the old capital of Kyoto. The owner of this shop is Yamauchi Fusajiro, a craftsman specializing in the production and sale of traditional hanafuda cards. Gradually the cards became so popular and sold that Mr. Yamauchi had to hire more workers to meet the demand. And now, after years of development, he couldn't believe that Nintendo",
      },
      {
        rating: 5,
        id: "8",
        name: "XBOX ONE CONTROLLER",
        price: 10,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item08.jpg",
        introduce:
          "This was the most used type of briefcase at that time. Just like schoolbag, Backpack is a compound noun: back means behind and pack means package. A backpack with two shoulder straps, fully controllable and adjustable in length to suit the user",
      },
      {
        rating: 4,
        id: "9",
        name: "MAXGREEN 5902 BLUE",
        price: 25,
        img: "https://themebeyond.com/html/geco/Geco/img/product/shop_item09.jpg",
        introduce:
          "This was the most used type of briefcase at that time. Just like schoolbag, Backpack is a compound noun: back means behind and pack means package. A backpack with two shoulder straps, fully controllable and adjustable in length to suit the user",
      },
    ]);
  } catch (error) {
    res.status(500).send("get accessories failed");
  }
});

app.use("/users", (req, res) => {
  try {
    res.status(200).send([
      {
        username: "tuấn hồng",
        email: "hoangtuan1701@gmail.com",
        password: "123",
        passwordConfirmation: "123",
        thumb: {
          preview:
            "blob:http://localhost:3000/19e0d4e7-335a-4d66-81fb-e8a94a11b90f",
        },
        id: 7,
      },
      {
        username: "ngheoketaupl",
        email: "hoangtuan1505@gmail.com",
        password: "123",
        passwordConfirmation: "123",
        thumb: {
          preview:
            "blob:https://tuansanji.github.io/905e9881-d1cc-4381-98b4-655b931135fc",
        },
        id: 8,
      },
      {
        username: "ngheoketaupl",
        email: "hoangtuan1701@gmail.com",
        password: "minhtuan",
        passwordConfirmation: "minhtuan",
        thumb: null,
        id: 9,
      },
    ]);
  } catch (error) {
    res.status(500).send("get products failed");
  }
});

app.use("/games", (req, res) => {
  try {
    res.status(200).send([
      {
        img: "https://themebeyond.com/html/geco/Geco/img/images/featured_game_thumb01.jpg",
      },
      {
        img: "https://themebeyond.com/html/geco/Geco/img/images/featured_game_thumb02.jpg",
      },
      {
        img: "https://themebeyond.com/html/geco/Geco/img/images/featured_game_thumb03.jpg",
      },
      {
        img: "https://themebeyond.com/html/geco/Geco/img/images/featured_game_thumb04.jpg",
      },
      {
        img: "https://themebeyond.com/html/geco/Geco/img/images/featured_game_thumb05.jpg",
      },
      {
        img: "https://themebeyond.com/html/geco/Geco/img/images/featured_game_thumb06.jpg",
      },
    ]);
  } catch (error) {
    res.status(500).send("get games failed");
  }
});

app.listen(9000, () => {
  console.log(`app listening on port 9000`);
});
