var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,lit/directives/class-map.js';const { LitElement,html,css } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,lit/directives/class-map.js';const { customElement,query } = packd_export_2;;
let EagerlySliderSlide = class EagerlySliderSlide extends LitElement {
    constructor() {
        super();
        this.addEventListener('entered', () => {
            if (this._slottedMedia) {
                this._slottedMedia.currentTime = 0;
                this._slottedMedia.play();
            }
        });
        this.addEventListener('exited', () => {
            if (this._slottedMedia) {
                this._slottedMedia.pause();
            }
        });
    }
    /**
   * The element in the "media" slot, ONLY if it is an
   * HTMLMediaElement, such as <video>.
   */
    get _slottedMedia() {
        const el = this._mediaSlot && this._mediaSlot.assignedNodes()[0];
        return el instanceof HTMLMediaElement ? el : null;
    }
    render() {
        return html `
			<slot name="media"></slot>
      <div class="slide-content">
        <slot name="content"></slot>
      </div>
		`;
    }
};
EagerlySliderSlide.styles = css `
    ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Default styles for content */
    .slide-content {
      position: absolute;
			inset: 0;
      padding: 3rem;
      font-family: sans-serif;
      color: white;
      font-size: 1.5rem;
    }

    .slide-content > slot::slotted(*) {
      margin: 0;
    }
  `;
__decorate([
    query('slot[name="media"]')
], EagerlySliderSlide.prototype, "_mediaSlot", void 0);
EagerlySliderSlide = __decorate([
    customElement('eagerly-slider-slide')
], EagerlySliderSlide);
export { EagerlySliderSlide };
