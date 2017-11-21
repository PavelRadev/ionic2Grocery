import {Injectable} from "@angular/core";
import {IBaseClientService} from "../../shared/interfaces/IBaseClientService";
import {Observable} from "rxjs";
import {ReplaySubject} from "rxjs/ReplaySubject";
import * as _ from 'lodash';
import {IIdentifiable} from "../../shared/interfaces/IIdentifiable";
import {StringUtils} from "../../shared/stringUtils";

@Injectable()
export abstract class BaseClientServiceNonHttp<T extends IIdentifiable> implements IBaseClientService<T>{
  protected fakeItemsList: T[] = [];

  public fakeItemsList$ = new ReplaySubject<T[]>(1);

  constructor(){}

  getAll(params: any): Observable<T[]> {
    return this.fakeItemsList$.asObservable();
  }

  getById(id: string): Observable<T> {
    let objectFromList = _.find(this.fakeItemsList$, p=>p.id == id);

    return Observable.from(objectFromList);
  }

  create(entity: T): Observable<T> {
    entity.id = StringUtils.MakeId();
    this.fakeItemsList.push(entity);

    this.emitListUpdateSubject();

    return Observable.of(entity);
  }

  update(entity: T): Observable<T> {
    let objectFromList = _.find(this.fakeItemsList, p=>p.id==entity.id);
    _.merge(objectFromList,entity);

    this.emitListUpdateSubject();

    return Observable.of(objectFromList);
  }

  deleteById(id): Observable<any> {
    this.fakeItemsList = this.fakeItemsList.filter(p=>p.id!=id);

    this.emitListUpdateSubject();

    return Observable.of(true);
  }

  protected emitListUpdateSubject(){
    this.fakeItemsList$.next(this.fakeItemsList);
  }
}
