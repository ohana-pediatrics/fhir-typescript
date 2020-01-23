import {FhirElement} from './FhirElement';
import {Code, Decimal, FhirString, Uri} from './primitives';

export class SimpleQuantity extends FhirElement {
  value?: Decimal;
  unit?: FhirString;
  system?: Uri;
  code?: Code;
}

export class Quantity extends SimpleQuantity {
  comparator?: Code = new Code('=');
}
