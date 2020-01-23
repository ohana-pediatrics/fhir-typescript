import { FhirElement } from "./FhirElement";
import { Reference } from "./Reference";
import { FhirString, DateTime } from "./primitives";
import { Markdown } from "./primitives/Markdown";

export class Annotation extends FhirElement {
    authorReference?: Reference<{}>;
    authorString?: FhirString;
    time?: DateTime;
    text: Markdown;
}