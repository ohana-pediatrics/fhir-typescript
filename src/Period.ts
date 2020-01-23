import { FhirElement } from "./FhirElement";
import { DateTime } from "./primitives/DateTime";

export class Period extends FhirElement {
    start?: DateTime;
    end?: DateTime;
}