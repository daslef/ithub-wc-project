// export type Validator = {
//   validations: {
//     flag: ValidityStateFlags;
//     condition: (elem: TextInputInterface) => boolean;
//     message?: string;
//   }[];
// } | null;

// export type ValidatorsMapping = {
//   [K: string]: Validator
// }

// export type TextInputInterface =
//   HTMLElement & {
//     validator: Validator | null,
//     setValidity(
//         flags: ValidityStateFlags,
//         message?: string,
//         anchor?: HTMLElement
//     ): void,
//     input: HTMLInputElement
//   } & Pick<HTMLInputElement, 'value' | 'required' | 'validity' >

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
  validator: Validator
}
