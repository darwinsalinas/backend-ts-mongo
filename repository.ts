const db = [
    {
        id: 1,
        name: 'Computadora',
        description: 'La mejor computadora del mundo',
        price: 1000
    },
    {
        id: 2,
        name: 'Teclado Gamer',
        description: 'Con rgb',
        price: 1000
    }
];

const list = async () => {
    return db;
}



const get = async (id: number) => {
    const response = db.find(item => item.id == id);

    return response;
}

export default {
    list,
    get
}