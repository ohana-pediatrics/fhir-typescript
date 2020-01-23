import { FhirElement, JSONObject } from "./FhirElement";
import { FhirString } from "./primitives";
import { Coding } from "./Coding";

export class CodeableConcept extends FhirElement {
    coding?: Coding[];
    text?: FhirString

    toJSON(key: string): JSONObject {
        if(!Array.isArray(this.coding) || this.coding.length === 0) {
            if(typeof this.text === 'undefined') {
                throw new Error(`CodeableConcept requires either a coding and/or a text. Key: ${key}`);
            }
            return {
                text: this.text.toJSON('text')
            }
        }

        return super.toJSON(key);
    }
}