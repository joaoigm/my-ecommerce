export default class Address {
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }

    
    private _street : string;
    public get street() : string {
        return this._street;
    }
    public set street(v : string) {
        this._street = v;
    }
    
    
    private _city : string;
    public get city() : string {
        return this._city;
    }
    public set city(v : string) {
        this._city = v;
    }
    
    
    private _state : string;
    public get state() : string {
        return this._state;
    }
    public set state(v : string) {
        this._state = v;
    }
    
    
    private _country : string;
    public get country() : string {
        return this._country;
    }
    public set country(v : string) {
        this._country = v;
    }
    
    
    private _zipCode : string;
    public get zipCode() : string {
        return this._zipCode;
    }
    public set zipCode(v : string) {
        this._zipCode = v;
    }
    
}