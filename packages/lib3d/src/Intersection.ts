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
 * Created at     : 2018-10-16 12:59:53
 * Last modified  : 2018-11-28 12:41:14
 */

import isEqual from "lodash.isequal";
import CompoundObject, {
  ChildrenArray,
  ICompoundObjectJSON
} from "./CompoundObject";
import Object3D from "./Object3D";
import ObjectsCommon, { IViewOptions, OperationsArray } from "./ObjectsCommon";
import Scene from "./Scene";

export default class Intersection extends CompoundObject {
  public static typeName: string = "Intersection";

  public static newFromJSON(
    object: ICompoundObjectJSON,
    scene: Scene
  ): Intersection {
    if (object.type !== Intersection.typeName) {
      throw new Error("Not Union Object");
    }

    try {
      const children: ChildrenArray = object.children.map(
        obj => scene.getObject(obj) as Object3D
      );
      const viewOptions: Partial<IViewOptions> = {
        ...ObjectsCommon.createViewOptions(),
        ...object.children[0].viewOptions,
        ...object.viewOptions
      };
      return new Intersection(children, object.operations, viewOptions);
    } catch (e) {
      throw new Error(`Cannot create ObjectsGroup. ${e}`);
    }
  }

  constructor(
    children: ChildrenArray = [],
    operations: OperationsArray = [],
    viewOptions: Partial<IViewOptions> = ObjectsCommon.createViewOptions(),
    mesh?: THREE.Mesh | undefined
  ) {
    const vO: IViewOptions = {
      ...ObjectsCommon.createViewOptions(),
      ...children[0].toJSON().viewOptions,
      ...viewOptions
    };
    super(children, operations, vO);
    this.type = Intersection.typeName;
    this.lastJSON = this.toJSON();
    if (mesh) {
      this.setMesh(mesh);
    } else {
      this.meshPromise = this.computeMeshAsync();
    }
  }

  public clone(): Intersection {
    const childrenClone: Object3D[] = this.children.map(child => child.clone());
    if (isEqual(this.lastJSON, this.toJSON())) {
      const intObj = new Intersection(
        childrenClone,
        this.operations,
        this.viewOptions,
        (this.mesh as THREE.Mesh).clone()
      );
      return intObj;
    }
    const obj = new Intersection(
      childrenClone,
      this.operations,
      this.viewOptions
    );
    return obj;
  }
}