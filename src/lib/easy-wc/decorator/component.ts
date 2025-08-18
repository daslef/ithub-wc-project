export interface ElementMeta {
  custom?: ElementDefinitionOptions;
  selector?: string;
  style?: string;
  template?: string;
}

export function Component(meta: ElementMeta) {
  return (target: CustomElementConstructor) => {
    target.prototype.elementMeta = {
      style: meta.style ?? "",
      template: meta.template ?? ""
    };

    if (meta.selector && !meta.custom) {
      customElements.define(meta.selector, target)
    } else if (meta.selector && meta.custom) {
      customElements.define(meta.selector, target, meta.custom)
    }

    return target;
  };
}
