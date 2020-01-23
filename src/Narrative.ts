import { Code } from "./primitives";
import { Xhtml } from "./primitives/Xhtml";

export class Narrative extends Element {
    status: Code;
    div: Xhtml;
}