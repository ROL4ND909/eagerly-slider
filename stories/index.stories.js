import "../src/index.ts";

export default {
  // parameters: {
  //   layout: "centered",
  // },
};

export const story1 = () => `
    <eagerly-slider name="Slides">
      <eagerly-slider-slide>
        <img slot="media" src="https://i.imgur.com/88RbRIc.jpg" />
        <div class="bottom">
          <h1 style="font-family: serif">A STORY COMPONENT</h1>
          <p>swipe to navigate</p>
					<p>1</p>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <video slot="media" src="https://i.imgur.com/KfpqUdC.mp4" loop playsinline></video>
        <div class="bottom">
          <h2>This video will</h2>
          <h1 style="font-family: serif">AUTOPLAY</h1>
          <h3>when it's focused</h3>
					<p>2</p>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <img slot="media" src="https://i.imgur.com/1wTXrAu.jpg" />
        <h1>This text</h1>
        <p>uses <i>default</i> overlay styling.</p>
				<p>3</p>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <video slot="media" src="https://i.imgur.com/PwTsAT3.mp4" loop playsinline></video>
        <div class="bottom">
          <p>The next card is just a plain</p>
          <h1>img</h1>
					<p>4</p>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
	      <img slot="media" src="https://i.imgur.com/ktDKGxb.jpg">
			</eagerly-slider-slide>
    </eagerly-slider>
`;
