export default class Token {
    
    private _access_token : string;
    public get access_token() : string {
        return this._access_token;
    }
    public set access_token(v : string) {
        this._access_token = v;
    }
    
    
    private _token_type : string;
    public get token_type() : string {
        return this._token_type;
    }
    public set token_type(v : string) {
        this._token_type = v;
    }
    
    
    private _refresh_token : string;
    public get refresh_token() : string {
        return this._refresh_token;
    }
    public set refresh_token(v : string) {
        this._refresh_token = v;
    }

    
    private _expires_in : string;
    public get expires_in() : string {
        return this._expires_in;
    }
    public set expires_in(v : string) {
        this._expires_in = v;
    }

    
    private _scope : string;
    public get scope() : string {
        return this._scope;
    }
    public set scope(v : string) {
        this._scope = v;
    }
    
    
    
}