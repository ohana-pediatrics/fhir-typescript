import { FhirElement } from "./FhirElement";
import { FhirString, Uri } from "./primitives";
import { Identifier } from "./Identifier";

export class Reference<T> extends FhirElement {
    reference?: FhirString;
    type?: Uri;
    identifier?: Identifier;
    display?: FhirString;

    isValid() {
        return typeof this.reference !== 'undefined'
        ||  typeof this.identifier !== 'undefined'
        ||  typeof this.display !== 'undefined'
        || this.extension.length > 0;
    }
}