import { Resource } from "./Resource";
import { Extension } from "./Extension";
import { Narrative } from "./Narrative";

export class DomainResource extends Resource {
    text?: Narrative;
    contained: Resource[];
    extension: Extension[];
    modifierExtension: Extension[];

}