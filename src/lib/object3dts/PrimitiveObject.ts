/**
 * Copyright (c) 2018 Bitbloq (BQ)
 *
 * License: MIT
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author David García <https://github.com/empoalp>, Alberto Valero <https://github.com/avalero>
 *
 * Created at     : 2018-11-16 17:30:44 
 * Last modified  : 2018-11-16 17:54:44
 */



import isEqual from 'lodash.isequal';
import Object3D from './Object3D';
import ObjectsCommon from './ObjectsCommon';
import {OperationsArray, IViewOptions} from './ObjectsCommon';

export default class PrimitiveObject extends Object3D{

  protected parameters: Object;
  
  constructor(
    viewOptions: IViewOptions = ObjectsCommon.createViewOptions(),
    operations: OperationsArray = []) {
    super(viewOptions, operations);
  }

  
  public setParameters(parameters:Object):void{
    if(!this.parameters ){
      this.parameters = Object.assign({},parameters);
      this._meshUpdateRequired = true;
      return;
    }

    if(!isEqual(parameters,this.parameters)){
      this.parameters = Object.assign({},parameters);
      this._meshUpdateRequired = true;
    }
  }

  /**
   * For primitive objects. Cube, Cylinder, etc.
   * For CompoundObjects find function in CompoundObjects Class
   */
  public toJSON():string{
    const object = {
      id: this.id,
      type: this.type,
      parameters: this.parameters,
      viewOptions: this.viewOptions,
      operations: this.operations,
    }
    return JSON.stringify(object);
  }

  public updateFromJSON(json: string){
    const object = JSON.parse(json);
    if(this.id === object.id){
      this.setParameters(object.parameters);
      this.setOperations(object.operations);
      this.setViewOptions(object.viewOptions);
    }else{
      throw new Error('Object id does not match with JSON id');
    }
  }
}