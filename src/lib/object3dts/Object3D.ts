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
 * Created at     : 2018-10-02 18:56:46 
 * Last modified  : 2018-10-02 19:32:31
 */

import * as BABYLON from 'babylonjs'
import uuid from 'uuid'

export interface IParameterType{
  name:string,
  label:string,
  type:string,
  defaultValue:number
}

interface ITranslateOperation{
  type:string,
  x:number,
  y:number,
  z:number,
  relative:boolean
}

interface IRotateOperation{
  type:string,
  axis:string,
  angle:number,
  relative:boolean
}

interface IScaleOperation{
  type:string,
  x:number,
  y:number,
  z:number
}

export interface ICommonGeometryParamas{
  color?:string;
  name?:string;
}

type Operation = (ITranslateOperation|IRotateOperation|IScaleOperation);
export type OperationsArray = Array<Operation>;

export class Object3D{

  public static createTranslateOperation(x:number = 0, y:number = 0, z:number = 0, relative:boolean = true): ITranslateOperation {
    return {
      type: 'translation',
      x,
      y,
      z,
      relative
    };
  }

  public static createRotateOperation(axis:string = 'x', angle:number = 0, relative:boolean = true): IRotateOperation {
    return {
      type: 'rotation',
      axis,
      angle,
      relative
    };
  }

  public static createScaleOperation(x:number = 1, y:number = 1, z:number = 1): IScaleOperation {
    return {
      type: 'scale',
      x,
      y,
      z
    };
  }
  
  protected mesh: BABYLON.Mesh;
  protected scene: BABYLON.Scene; 
  private operations: Operations;
  private pendingOperation: boolean;

  constructor(operations: OperationsArray, scene: BABYLON.Scene){
    this.scene = scene;
    this.operations = operations;
    this.pendingOperation = true;
  }

  public addOperation(operation: Operation): void{
    this.operations.push(operation);
    this.pendingOperation = true;
  }

  private applyOperations(){
    if(this.pendingOperation){
      //Apply Operations
    }

    this.pendingOperation = false;

  }

  protected addMeshToScene(): BABYLON.Mesh {
    this.mesh = this.getGeometry();
    this.applyOperations();
    return this.mesh;
  }

  protected getGeometry(): BABYLON.Mesh {
    throw new Error('ERROR. Pure Virtual Function implemented in children');
  }
}