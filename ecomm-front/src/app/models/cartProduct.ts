import Product from './product';

export default class CartProduct {
    
    private _product : Product;
    public get product() : Product {
        return this._product;
    }
    public set product(v : Product) {
        this._product = v;
    }

    
    private _quantity : number;
    public get quantity() : number {
        return this._quantity;
    }
    public set quantity(v : number) {
        this._quantity = v;
    }

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }

    constructor(product?: Product, quantity?: number, id?: number){
        this._product = product;
        this._quantity = quantity;
        this._id = id
    }
}