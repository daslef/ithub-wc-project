function closestRoot(baseElement: Element): any {
  if (baseElement.getRootNode() !== document) {
    return baseElement.getRootNode();
  }

  return document.head;
}

export function attachStyle(context: any): void {
  const id = `${context.elementMeta.selector}`;
  const closest = closestRoot(context);

  if (closest.tagName === "HEAD" && document.querySelector(`#${id}-component-style`)) {
    return;
  }

  if (closest.querySelector(`#${id}-component-style`)) {
    return;
  }

  const styleElement = document.createElement("style");
  styleElement.setAttribute("id", `${id}-component-style`);
  styleElement.innerText = context.elementMeta.style;

  closest.appendChild(styleElement);
}
