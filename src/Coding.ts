import { FhirElement } from "./FhirElement";
import { Code, FhirBoolean, FhirString, Uri } from "./primitives";

export class Coding extends FhirElement {
    system?: Uri;
    version?: FhirString;
    code?: Code;
    display?: FhirString;
    userSelected?: FhirBoolean;

}