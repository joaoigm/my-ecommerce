import User from './user';
import Product from './product';

export default class Cart {
    
    private _id : string;
    public get id() : string {
        return this._id;
    }

    
    private _user : User;
    public get user() : User {
        return this._user;
    }

    
    private _products : Product[];
    public get products() : Product[] {
        return this._products;
    }

    
    private _totalPrice : number;
    public get totalPrice() : number {
        let price: number = 0;
        this._products.forEach(p => {
            price += p.price
        });
        return 
    }
    
    
}