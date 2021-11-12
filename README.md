# Slider Component

## usage 

**properties:**
- hideHeader | Boolean
- showProgress | Boolean
- title | String

**styling:**
- --eagerly-slider-clr-primary
- --eagerly-slider-clr-secundary
- --eagerly-slider-ratio
- --eagerly-slider-radius
- --eagerly-slider-duration


```html
<script type="module" src="/index.js"></script>

<eagerly-slider>
  <img src="https://i.imgur.com/ktDKGxb.jpg">
</eagerly-slider>

<eagerly-slider hideHeader>
  <img src="https://i.imgur.com/ktDKGxb.jpg">
</eagerly-slider>

<eagerly-slider title="All Slides">
  <img src="https://i.imgur.com/ktDKGxb.jpg">
</eagerly-slider>

<eagerly-slider showProgress>
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
</eagerly-slider>
```