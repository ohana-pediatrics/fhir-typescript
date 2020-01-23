import { FhirElement, JSONValue, JSONPrimitive, JSONObject } from "../FhirElement";

export class FhirPrimitive<T extends JSONPrimitive> extends FhirElement {
    value: T;

    constructor(value: T) {
      super();
      this.value = value;
    }

    toJSON(key: string): JSONObject;
    toJSON(key?: string): JSONValue {
        if (typeof key === 'string') {
          return {
            [key]: this.value,
            [`_${key}`]: super.toJSON(key),
          };
        }
        return this.value;
      }
    
}