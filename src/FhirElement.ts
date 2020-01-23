import {Extension} from './Extension';

export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONObject = {[member: string]: JSONValue};
export type JSONArray = JSONValue[];

export class FhirElement {
  readonly id?: string;
  extension: Extension[];

  toJSON(key: string): JSONObject;
  toJSON(key?: string): JSONValue {
    const json: JSONObject = {};
    for (let k in this) {
      const value = this[k];
      if (value instanceof FhirElement) {
        json[k] = value.toJSON(k);
      }
      if (Array.isArray(value)) {
        json[k] = value.map(v => v.toJSON(k));
      }
    }
    return json;
  }
}
