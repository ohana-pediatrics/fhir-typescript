import { FhirElement } from "./FhirElement";
import { SimpleQuantity } from "./Quantity";

export class FhirRange extends FhirElement {
    low?: SimpleQuantity;
    high?: SimpleQuantity;
}