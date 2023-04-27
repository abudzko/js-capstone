import dish1 from "assets/dishes/dish1.jpg";
import dish2 from "assets/dishes/dish2.jpg";
import dish3 from "assets/dishes/dish3.jpg";
import user1 from "assets/users/user1.png";
import user2 from "assets/users/user2.png";
import user3 from "assets/users/user3.png";
import user4 from "assets/users/user4.png";
import user5 from "assets/users/user5.png";
import user6 from "assets/users/user6.png";
import star from "assets/star.png";
export const BACK_TO_HOME_TEXT = "Home";
export const siteName = "Little Lemon";
export const restaurantLocation = "Chicago";
export const dishes = [
    {
        name: "Dish1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aperiam ducimus voluptatibus. Nihil nesciunt dicta eos ullam officiis cumque illo vero tempora maiores corporis, facilis placeat sit ab dignissimos accusantium.",
        details: "Dish ditails",
        img: () => { return <img src={dish1} alt="Dish1"></img>; }
    },
    {
        name: "Dish2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aperiam ducimus voluptatibus. Nihil nesciunt dicta eos ullam officiis cumque illo vero tempora maiores corporis, facilis placeat sit ab dignissimos accusantium.",
        details: "Dish ditails",
        img: () => { return <img src={dish2} alt="Dish2"></img>; }
    },
    {
        name: "Dish3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aperiam ducimus voluptatibus. Nihil nesciunt dicta eos ullam officiis cumque illo vero tempora maiores corporis, facilis placeat sit ab dignissimos accusantium.",
        details: "Dish ditails",
        img: () => { return <img src={dish3} alt="Dish3"></img>; }
    }
];
export const startIcon = () => { return <img src={star} alt="Star" /> }

export const ratings = [
    {
        id: "r1",
        score: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic nisi error harum dignissimos placeat non minus reprehenderit quos aspernatur?",
        userImg: () => { return <img src={user1} alt="user1" ></img> }
    },
    {
        id: "r2",
        score: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic nisi error harum dignissimos placeat non minus reprehenderit quos aspernatur?",
        userImg: () => { return <img src={user2} alt="user2" ></img> }
    },
    {
        id: "r3",
        score: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic nisi error harum dignissimos placeat non minus reprehenderit quos aspernatur?",
        userImg: () => { return <img src={user3} alt="user3" ></img> }
    },
    {
        id: "r4",
        score: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic nisi error harum dignissimos placeat non minus reprehenderit quos aspernatur?",
        userImg: () => { return <img src={user4} alt="user4" ></img> }

    },
    {
        id: "r5",
        score: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic nisi error harum dignissimos placeat non minus reprehenderit quos aspernatur?",
        userImg: () => { return <img src={user5} alt="user5" ></img> }

    },
    {
        id: "r6",
        score: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic nisi error harum dignissimos placeat non minus reprehenderit quos aspernatur?",
        userImg: () => { return <img src={user6} alt="user6" ></img> }
    }
];
