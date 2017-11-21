import {IIdentifiable} from "../../shared/interfaces/IIdentifiable";
import {INamedEntity} from "../../shared/interfaces/INamedEntity";

export class ProductModel implements IIdentifiable, INamedEntity {
  constructor(public id: string = null,
              public name: string = '',
              public isInBucket:boolean = false) {
  }
}
