import { Code, Uri, FhirString } from "./primitives";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";

export class Identifier extends Element {
    use?: Code;
    type?: CodeableConcept;
    system?: Uri;
    value?: FhirString;
    period?: Period;
}