import { component_base_name, defineComponent } from "./config";
import { template } from './footer.template';

export class FooterComponent extends HTMLElement {
  static TEMPLATE_ID = 'footer-template';
  
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const footer = this._buildFooter();
    if (footer) {
      shadow.appendChild(footer);
    }
  }

  private _buildFooter() {
    const element = document.getElementById(FooterComponent.TEMPLATE_ID) as HTMLTemplateElement;
    if (element) {
      return element.content.cloneNode(true);
    }
    //else
    console.error("FooterComponent - missing template");
    return null;
  }

  public static init() {
    defineComponent(`${component_base_name}-footer`, FooterComponent, template(FooterComponent.TEMPLATE_ID));
  }
}