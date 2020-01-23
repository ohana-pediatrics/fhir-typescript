import { FhirElement } from "./FhirElement";
import { Quantity } from "./Quantity";

export class Ratio extends FhirElement {
    numerator: Quantity;
    denominator: Quantity;

}