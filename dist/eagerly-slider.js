var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,lit/directives/class-map.js';const { LitElement,html,css,svg } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,lit/directives/class-map.js';const { customElement,property } = packd_export_2;;
import { packd_export_3 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,lit/directives/class-map.js';const { classMap } = packd_export_3;;
import './eagerly-slider.css.js';
let EagerlySlider = class EagerlySlider extends LitElement {
    constructor() {
        var _a;
        super();
        this.index = 0;
        this.clickable = true;
        this.title = 'Slides';
        this.hideHeader = false;
        this.showProgress = false;
        // set first slide as active slide
        (_a = this.children[this.index]) === null || _a === void 0 ? void 0 : _a.classList.add('is-active');
        Array.from(this.children).forEach((slide) => {
            slide.addEventListener('transitionend', () => {
                // Check for the old active transition and if clickable is false
                // to not trigger it more than once
                if (slide === this.activeSlide && !this.clickable) {
                    this.clickable = true;
                    // Remove all CSS animation classes on old active
                    this.activeSlide.className = '';
                }
            });
        });
    }
    get hasSlides() {
        return this.children.length > 0;
    }
    firstUpdated() {
        var _a;
        (_a = this.children[this.index]) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent('entered'));
        if (this.children.length > 1) {
            Array.from(this.renderRoot.querySelectorAll('.btn')).forEach((el) => {
                el.classList.add('show-btn');
            });
        }
    }
    updated(changedProps) {
        var _a;
        super.updated(changedProps);
        if (changedProps.has('index') && this.hasSlides) {
            (_a = this.children[changedProps.get('index')]) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent('exited'));
            this.children[this.index].dispatchEvent(new CustomEvent('entered'));
        }
    }
    changeSlide(forward) {
        if (this.clickable) {
            this.clickable = false;
            this.activeSlide = this.querySelector('.is-active');
            if (forward) {
                this.activeSlide.classList.add('slide-out-left');
                this.index = ((this.index + 1) % this.children.length);
                const nextActiveSlide = this.children[this.index];
                nextActiveSlide.classList.add('slide-in-right', 'is-active');
            }
            else {
                // If backbutton is used
                this.activeSlide.classList.add('slide-out-right');
                this.index = ((this.index - 1 + this.children.length) % this.children.length);
                const prevActiveSlide = this.children[this.index];
                prevActiveSlide.classList.add('slide-in-left', 'is-active');
            }
        }
    }
    render() {
        return this.hasSlides
            ? html `
				${this.hideHeader ? '' : html `
					<div class="header">
						<p><strong>${this.title}</strong></p>

						<p><strong>${this.index + 1} / ${this.children.length}</strong></p>
					</div>
				`}

				<div class="viewport">
					<slot></slot>
				</div>

				<div class="actions">
					<button class="btn" data-action="slideBack" @click=${() => this.changeSlide(false)} aria-label="Prev Slide">
						${svg `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.42 7.4l-4.6 4.6 4.6 4.6-1.4 1.4-6-6 6-6z"/></svg>`}
					</button>
					<button class="btn" data-action="slideNext" @click=${() => this.changeSlide(true)} aria-label="Next Slide">
						${svg `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9.98 6l6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6z"/></svg>`}
					</button>
				</div>

				${this.showProgress ? html `
					<div class="progress">
						${Array.from(this.children).map((_, i) => html `
							<div class=${classMap({ watched: i <= this.index })}></div>
							<!-- @click=${(_) => (this.index = i)} -->
						`)}
					</div>
				` : ''}
			` : html `<h1>No slides to show</h1>`;
    }
};
EagerlySlider.styles = css `
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    .viewport {
      position: relative;
      overflow: hidden;
      aspect-ratio: var(--eagerly-slider-ratio, 5/3);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .actions {
      position: absolute;
      z-index: 30;
      display: flex;
      align-items: center;
      justify-content: space-between;
      pointer-events: none;
      inset: 0;
    }

    .btn {
      display: none;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      padding: 0.25rem;
      cursor: pointer;
      pointer-events: all;
      color: var(--eagerly-slider-clr-primary, #fff);
      border: none;
      border-radius: var(--eagerly-slider-radius, 50%);
      background-color:  var(--eagerly-slider-clr-secundary, #000);
    }

    .show-btn {
      display: flex;
    }

    .progress {
      position: relative;
      top: calc(100% - 1.5rem);
      height: 1.5rem;
      width: 50%;
      margin: 0 auto;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      grid-gap: 1rem;
      align-content: center;
    }

    .progress > div {
      background-color: grey;
      height: 4px;
      transition: background-color 0.3s linear;
      /* cursor: pointer; */
    }

    .progress > div.watched {
      background-color: black;
    }

    ::slotted(img),
    ::slotted(video) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ::slotted(*) {
      position: absolute;
      inset: 0;
      z-index: -1;
      height: 100%;
      transition: transform var(--eagerly-slider-duration, 700ms) ease;
      animation-duration: var(--eagerly-slider-duration, 700ms);
      transform: translateX(0);
    }

    ::slotted(.is-active) {
      z-index: 20;
    }

    ::slotted(.slide-in-left) {
      z-index: 20;
      animation-name: animateInLeft;
    }

    ::slotted(.slide-in-right) {
      z-index: 20;
      animation-name: animateInRight;
    }

    ::slotted(.slide-out-left) {
      transform: translateX(-100%);
    }

    ::slotted(.slide-out-right) {
      transform: translateX(100%);
    }
  `;
__decorate([
    property({ type: Number })
], EagerlySlider.prototype, "index", void 0);
__decorate([
    property({ type: Boolean })
], EagerlySlider.prototype, "clickable", void 0);
__decorate([
    property({ type: String })
], EagerlySlider.prototype, "title", void 0);
__decorate([
    property({ type: Boolean })
], EagerlySlider.prototype, "hideHeader", void 0);
__decorate([
    property({ type: Boolean })
], EagerlySlider.prototype, "showProgress", void 0);
__decorate([
    property()
], EagerlySlider.prototype, "activeSlide", void 0);
EagerlySlider = __decorate([
    customElement('eagerly-slider')
], EagerlySlider);
export { EagerlySlider };
