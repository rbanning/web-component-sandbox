export type Template = {
  id: string;
  content: string;
}

export const component_base_name = "hallpass";

export function defineComponent(name: string, component: CustomElementConstructor, template?: Template, options?: ElementDefinitionOptions) {
  if (template) {
    if (!document.getElementById(template.id)) {
      document.body.appendChild(buildTemplate(template));
    }
  }
  if (!customElements.get(name)) {
    customElements.define(name, component, options);
  }
}

function buildTemplate(config: Template): HTMLTemplateElement {
  const template = document.createElement('template');
  template.id = config.id;
  template.innerHTML = config.content;
  return template;
}

export function moveChildNodesInto(source: HTMLElement, target: HTMLElement) {
  if (source && target) {
    while (source.lastChild) {
      const clone = source.lastChild.cloneNode(true);
      source.removeChild(source.lastChild);
      target.appendChild(clone);
    }
  }
}