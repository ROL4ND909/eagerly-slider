import "../src/index.ts";

export default {
  // parameters: {
  //   layout: "centered",
  // },
};

export const story1 = () => `
    <eagerly-slider>
      <eagerly-slider-slide>
        <img slot="media" src="https://i.imgur.com/88RbRIc.jpg" />
        <h1 style="font-family: serif">A SLIDE COMPONENT</h1>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <video slot="media" src="https://i.imgur.com/KfpqUdC.mp4" loop playsinline></video>
        <div>
          <h2>This video will</h2>
          <h1 style="font-family: serif">AUTOPLAY</h1>
          <h3>when it's focused</h3>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <img slot="media" src="https://i.imgur.com/1wTXrAu.jpg" />
        <div>
          <h1>This text</h1>
          <p>uses <i>default</i> overlay styling.</p>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <video slot="media" src="https://i.imgur.com/PwTsAT3.mp4" loop playsinline></video>
        <div>
          <p>The next card is just a plain</p>
          <h1>&lt;img&gt; tag</h1>
        </div>
      </eagerly-slider-slide>

      <img src="https://i.imgur.com/ktDKGxb.jpg">
      
      <div style="background-color: aquamarine;">
				<h1>Hi</h1>
				<p>I'm just a &lt;div&gt; element with content</p>
			</div>
    </eagerly-slider>
`;
