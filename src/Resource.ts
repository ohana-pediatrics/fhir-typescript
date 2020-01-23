import { Id, Uri, Code } from "./primitives";
import { Coding } from "./Coding";
import { Instant } from "./primitives/Instant";
import { Canonical } from "./primitives/Canonical";

export type Meta = {
    versionId?: Id;
    lastUpdated?: Instant;
    source?: Uri;
    profile: Canonical[];
    security: Coding[];
    tag: Coding[];
}

export class Resource {
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
}