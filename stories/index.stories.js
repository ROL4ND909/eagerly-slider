import "../src/index.ts";

export default {
  // parameters: {
  //   layout: "centered",
  // },
};

export const SliderExample1 = () => `
    <eagerly-slider title="title">
      <img src="https://i.imgur.com/88RbRIc.jpg" />
      <img src="https://i.imgur.com/1wTXrAu.jpg" />
      <img src="https://i.imgur.com/ktDKGxb.jpg">
    </eagerly-slider>
`;

export const SliderExample2 = () => `
    <style>
      :root {
        --eagerly-slider-ratio: 1;
        --eagerly-slider-clr-secundary: tomato;
        --eagerly-slider-radius: 0;
      }
    </style>
    <eagerly-slider hideHeader>
      <eagerly-slider-slide>
        <img slot="media" src="https://i.imgur.com/88RbRIc.jpg" />
        <h1 slot="content" style="font-family: serif">A SLIDE COMPONENT</h1>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <video slot="media" src="https://i.imgur.com/KfpqUdC.mp4" loop playsinline></video>
        <div slot="content">
          <h2>This video will</h2>
          <h1 style="font-family: serif">AUTOPLAY</h1>
          <h3>when it's focused</h3>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <img slot="media" src="https://i.imgur.com/1wTXrAu.jpg" />
        <div slot="content">
          <h1>This text</h1>
          <p>uses <i>default</i> overlay styling.</p>
        </div>
      </eagerly-slider-slide>

      <eagerly-slider-slide>
        <video slot="media" src="https://i.imgur.com/PwTsAT3.mp4" loop playsinline></video>
        <div slot="content">
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

export const SliderExample3 = () => `
    <eagerly-slider hideHeader showProgress>
      <div style="background-color: aquamarine;">
				<h1>Hi</h1>
				<p>I'm just a &lt;div&gt; element with content</p>
			</div>
            
      <div style="background-color: tomato; color: hsl(50 30% 80%);">
				<h1>Hi from slide 2</h1>
				<p>I'm just a &lt;div&gt; element with content</p>
			</div>

      <div style="background-color: purple;">
				<h1>Hi from slide 3</h1>
				<p>I'm just a &lt;div&gt; element with content</p>
			</div>
    </eagerly-slider>
`;