import {FhirElement, JSONObject, JSONValue} from './FhirElement';

export class Extension extends FhirElement {
  url: string;
  value: JSONValue;

  private readonly type: string;

  toJSON(key?: string): JSONObject {
    return {
      url: this.url,
      [this.type]: this.value,
      extension: this.extension.map(e => e.toJSON()),
    };
  }
}
