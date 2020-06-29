import CartProduct from './cartProduct';

export default class Order {
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }

    
    private _totalPrice : number;
    public get totalPrice() : number {
        return this._totalPrice;
    }
    public set totalPrice(v : number) {
        this._totalPrice = v;
    }

    
    private _orderDate : string;
    public get orderDate() : string {
        return this._orderDate;
    }
    public set orderDate(v : string) {
        this._orderDate = v;
    }
    
    
    private _products : CartProduct[];
    public get products() : CartProduct[] {
        return this._products;
    }
    public set products(v : CartProduct[]) {
        this._products = v;
    }
    
    constructor(id?: number, totalPrice?: number, orderDate?: string, products?: CartProduct[]){
        this._id = id;
        this._totalPrice = totalPrice;
        this._orderDate = orderDate;
        this._products = products;
    }
}