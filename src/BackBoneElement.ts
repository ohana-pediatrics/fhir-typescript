import { FhirElement } from "./FhirElement";
import { Extension } from "./Extension";

export class BackBoneElement extends FhirElement {
    modifierExtension: Extension[];
}