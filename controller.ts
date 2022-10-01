import repository from "./repository";

const root = async () => {
    return { 'version': 'V1' };
};

const greetings = async () => {
    return { 'message': 'hola' };
};

const getProducts = async () => {
    return await repository.list();
}


const getProduct = async (id: number) => {
    const data = await repository.get(id);
    return data;
}


export default {
    root,
    greetings,
    getProducts,
    getProduct
}


