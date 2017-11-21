import {Observable} from "rxjs/Observable";
import {IIdentifiable} from "./IIdentifiable";

export interface IBaseClientService<T extends IIdentifiable>{
  getAll(params:any) : Observable<T[]>;

  getById(id:string): Observable<T>;

  create(entity: T) : Observable<T>;

  update(entity: T) : Observable<T>;

  deleteById(id) : Observable<any>;
}
