import { LitElement, html, css, svg } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

@customElement('eagerly-slider')
export class EagerlySlider extends LitElement {
  @property({type: String}) name = ''
  @property({type: Number}) _index = 0;
  @property({type: Boolean}) clickable = true
  @property() activeSlide!: Element | any

  get index() {
    return this._index;
  }

  set index(value: number) {
    this.children[this._index].dispatchEvent(new CustomEvent('exited'));
    this.children[value].dispatchEvent(new CustomEvent('entered'));
    this._index = value;
  }

  constructor() {
    super()

    this.index = 0;

    // set first slide as active slide
    this.children[this.index].classList.add('is-active')
  }

  firstUpdated() {
    this.children[this._index].dispatchEvent(new CustomEvent('entered'));
  }

  update(changedProperties: Map<string | number | symbol, unknown>) {
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

    super.update(changedProperties);
  }

  changeSlide(forward: Boolean): void {
    if (this.clickable) {
      this.clickable = false;
      this.activeSlide = this.querySelector('.is-active')

      if (forward) {
        this.index = ((this._index + 1) % this.children.length)

        const nextActiveSlide = this.children[this.index]
        nextActiveSlide.classList.add('slide-in-right', 'is-active')

        this.activeSlide.classList.add('slide-out-left')
      } else {
        // If backbutton is used
        this.index = ((this._index - 1 + this.children.length) % this.children.length)

        const prevActiveSlide = this.children[this.index]
        prevActiveSlide.classList.add('slide-in-left', 'is-active')

        this.activeSlide.classList.add('slide-out-right')
      }
    }
  }

  static styles = css`
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
      aspect-ratio: 5/3;
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
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      padding: 0.25rem;
      cursor: pointer;
      pointer-events: all;
      color: var(--slider-primary-clr, #fff);
      border: none;
      border-radius: var(--slider-radius, 50%);
      background-color:  var(--slider-secundary-clr, #000);
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
      transition: transform var(--slider-duration, 700ms) ease;
      animation-duration: var(--slider-duration, 700ms);
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
  `

  render() {
    return html`
      <div class="header">
        <p><strong>${this.name}</strong></p>

        <p><strong>${this.index + 1} / ${this.children.length}</strong></p>
      </div>

      <div class="viewport">
        <slot></slot>
      </div>

      <div class="actions">
        <button class="btn" data-action="slideBack" @click=${() => this.changeSlide(false)} aria-label="Prev Slide">
          ${svg`<svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.42 7.4l-4.6 4.6 4.6 4.6-1.4 1.4-6-6 6-6z"/></svg>`}
        </button>
        <button class="btn" data-action="slideNext" @click=${() => this.changeSlide(true)} aria-label="Next Slide">
          ${svg`<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9.98 6l6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6z"/></svg>`}
        </button>
      </div>

      <div class="progress">
        ${Array.from(this.children).map((_, i) => html`
          <div class=${classMap({ watched: i <= this.index })}></div>
          <!-- @click=${(_: any) => (this.index = i)} -->
        `)}
      </div>
    `
  }
}

