export type Validator = {
  validations: {
    flag: ValidityStateFlags;
    condition: (elem: TextInputInterface) => boolean;
    message?: string;
  }[];
};

export type ValidatorsMapping = {
  [K: string]: Validator
}

export type TextInputInterface = HTMLElement & Pick<HTMLInputElement, 'value' | 'required'> & {
  validator: Validator,
  validity: ValidityState,
  input: HTMLInputElement,
  [symbolMethod: symbol]: () => void
}
