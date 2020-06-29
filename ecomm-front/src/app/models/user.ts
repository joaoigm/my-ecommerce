import Address from './address';

export default class User {
    
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

    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    
    private _phoneNumber : string;
    public get phoneNumber() : string {
        return this._phoneNumber;
    }
    public set phoneNumber(v : string) {
        this._phoneNumber = v;
    }

    
    private _password : string;

    public set password(v : string) {
        this._password = v;
    }

    
    private _address : Address;
    public get address() : Address {
        return this._address;
    }
    public set address(v : Address) {
        this._address = v;
    }
    
    
}