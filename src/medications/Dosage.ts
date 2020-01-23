import { BackBoneElement } from "../BackBoneElement";
import { Integer } from "../primitives/Integer";
import { FhirString, FhirBoolean } from "../primitives";
import { CodeableConcept } from "../CodeableConcept";
import { Ratio } from "../Ratio";
import { SimpleQuantity } from "../Quantity";
import { FhirRange } from "../FhirRange";
import { Timing } from "../Timing";

export class Dosage extends BackBoneElement {
    sequence?: Integer;
    text?: FhirString;
    additionalInstructions: CodeableConcept[];
    patientInstruction?: FhirString;
    timing?: Timing;
    asNeededBoolean?: FhirBoolean;
    asNeededCodeableConcept?: CodeableConcept;
    site?: CodeableConcept;
    route?: CodeableConcept;
    method?: CodeableConcept;
    doseAndRate: {
        type?: CodeableConcept;
        doseRange: FhirRange;
        doseQuantity: SimpleQuantity;
        rateRatio: Ratio;
        rateRange: FhirRange;
        rateQuantity: SimpleQuantity;
    }[];
    maxDosePeriod: Ratio;
    maxDosePerAdministration: SimpleQuantity;
    maxDosePerLifetime: SimpleQuantity;
}