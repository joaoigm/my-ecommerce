export default class Product {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }


    
    private _description : string;
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    
    
    private _price : number;
    public get price() : number {
        return this._price;
    }    
    
    private _stock : number;
    public get stock() : number {
        return this._stock;
    }

    private _available : boolean;
    public get available() : boolean {
        return this._available;
    }

    private _selectedQuantity : number;
    public get selectedQuantity() : number {
        return this._selectedQuantity;
    }
    public set selectedQuantity(v : number) {
        this._selectedQuantity = v;
    }
    

    constructor(id: number, name: string, description:string, price:number, stock:number, available:boolean){
        this._id = id;
        this._name = name;
        this._description = description;
        this._price = price;
        this._stock = stock;
        this._available = available;
    }
}