import type { ElementMeta } from "../decorator";

type DecoratedElement = HTMLElement & { elementMeta: ElementMeta }

export function attachTemplate(context: DecoratedElement): void {
  const template = document.createElement("template");
  template.innerHTML = context.elementMeta.template ?? "";
  context.appendChild(template.content.cloneNode(true));
}

function tagged(template: TemplateStringsArray, ...rest: any): string {
  let str = "";

  template.forEach((string, i) => {
    str += `${string} ${rest[i] || ""}`;
  });

  return str;
}

export { tagged as html, tagged as css }
