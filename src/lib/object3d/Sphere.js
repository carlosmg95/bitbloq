import Object3D from './Object3D';
import * as Three from 'three';

export default class Sphere extends Object3D {

  static parameterTypes = [
    {
      name: 'radius',
      label: 'Radius',
      type: 'integer',
      defaultValue: 10
    },
  ]

  getGeometry() {
    const {radius} = this.parameters;
    return new Three.SphereGeometry(Number(radius), 32, 32);
  }
}