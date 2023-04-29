import { dishes, ratings } from "./data";

//imitates async data getting
export async function getDishes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(dishes), rand());
    });
}

export async function getRatings() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ratings), rand());
    });
}

function rand() {
    return Math.random() * 3000;
}
