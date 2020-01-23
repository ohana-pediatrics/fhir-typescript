import { CodeableConcept } from "../CodeableConcept";
import { DomainResource } from "../DomainResource";
import { Identifier } from "../Identifier";
import { Period } from "../Period";
import { Code, DateTime } from "../primitives";
import { Reference } from "../Reference";
import { Resource } from "../Resource";
import { Medication } from "./Medication";
import { Annotation } from "../Annotation";
import { Dosage } from "./Dosage";

export class MedicationStatement extends DomainResource {
    identifier?: Identifier;
    status: Code;
    statusReason: CodeableConcept[];
    category?: CodeableConcept;
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference<Medication>;
    subject: Reference<{}>;
    context?: Reference<{}>;
    effectiveDateTime?: DateTime;
    effectivePeriod?: Period;
    dateAsserted?: DateTime;
    informationSource?: Reference<{}>;
    derivedFrom?:Reference<Resource>;
    reasonCode: CodeableConcept[];
    reasonReference: Reference<{}>[];
    node: Annotation[];
    dosage: Dosage[];

}