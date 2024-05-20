import { component_base_name, defineComponent, moveChildNodesInto } from "../config";
import { surfaceCss, surfaceParts } from "../helpers/surface";

// @Component({
//   imports: [SurfaceComponent]
// })
export class ButtonComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.append(this._buildStyle());
    shadow.appendChild(this._buildButton());

  }

  private _buildStyle() {
    const style = document.createElement('style');
    const surface = surfaceParts('primary', 'surface', 'half');
    style.textContent = `
        button {
          ${surfaceCss(surface)}
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;  
        }
    `;    
    return style;
  }
  private _buildButton() {    
    const button = document.createElement('button');
    moveChildNodesInto(this, button);
    return button;
  }

  public static init() {
    defineComponent(`${component_base_name}-button`, ButtonComponent);
  }
}