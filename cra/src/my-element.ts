import { LitElement, html, customElement, property } from "lit-element";

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  name = "World";

  @property({ type: Number })
  count = 0;

  render() {
    console.log("render tick");
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
    console.log("btn clicked!", this.count);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "my-element": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
