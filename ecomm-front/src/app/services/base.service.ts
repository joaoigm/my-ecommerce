import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
export default abstract class BaseService<Entity> {

    protected defaultHeaders = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Accept': 'application/json',
        })
    }

    protected _http: HttpClient;
    protected _url;
    
    constructor(http: HttpClient, url){
        this._http = http;
        this._url = url;
    }

    public get(): Observable<Entity[]> {
        return this._http.get<Entity[]>(this._url, this.defaultHeaders);
    }

    public getById(id): Observable<Entity> {
        return this._http.get<Entity>(this._url+`/${id}`, this.defaultHeaders);
    }

    public create(t: Entity): Observable<Entity> {
        return this._http.post<Entity>(this._url, t,this.defaultHeaders);
    }

    public update(t: Entity): Observable<Entity> {
        return this._http.put<Entity>(this._url, t ,this.defaultHeaders);
    }

    public delete(id): Observable<any> {
        return this._http.delete(this._url+`/${id}`, this.defaultHeaders);
    }
}