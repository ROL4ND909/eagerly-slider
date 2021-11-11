import { LitElement, html, css } from 'lit'
import { customElement, query } from 'lit/decorators.js'


@customElement('eagerly-slider-slide')
export class EagerlySliderSlide extends LitElement {

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
  private get _slottedMedia(): HTMLMediaElement | null {
    const el = this._mediaSlot && this._mediaSlot.assignedNodes()[0]
    return el instanceof HTMLMediaElement ? el : null;
	}

  /*
   * @query(selector) is shorthand for
   * this.renderRoot.querySelector(selector)
   */
	@query('slot[name="media"]')
	private _mediaSlot!: HTMLSlotElement;

	static styles = css`
    ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Default styles for content */
    .slide-content {
      position: absolute;
			inset: 0;
      padding: 48px;
      font-family: sans-serif;
      color: white;
      font-size: 24px;
    }

    .slide-content > slot::slotted(*) {
      margin: 0;
    }

		@keyframes animateInLeft {
			0% {
				transform: translateX(-100%);
			}

			100% {
				transform: translateX(0);
			}
		}

		@keyframes animateInRight {
			0% {
				transform: translateX(100%);
			}

			100% {
				transform: translateX(0);
			}
		}
  `;

	render() {
		return html`
			<slot name="media"></slot>
      <div class="slide-content">
        <slot></slot>
      </div>
		`
	}
}
