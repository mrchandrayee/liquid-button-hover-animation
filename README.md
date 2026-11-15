# Liquid Button Hover Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/liquid-button-hover-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable recreation of the uploaded screen recording (360 × 640, 30 fps, 15.67 seconds).

## What the video shows
- A dark `#0d0d13` page with a centered pink “Hover Me” pill button.
- CSS source in an editor panel, with `.liquid-button`, `.btn-text`, and five `.blob` spans.
- The five circular blobs expand on hover with staggered transition delays to create the liquid-fill shape.
- The button background changes from pink to a brighter pink and the expanded blobs change to blue.

## Visible CSS values transcribed
- `padding: 18px 45px`
- `background-color: #ff007f`
- `color: #fff`
- `font-size: 18px`
- `font-weight: bold`
- `letter-spacing: 1px`
- Blob: `top: 50%`, `width: 30px`, `height: 30px`, `border-radius: 50%`
- Initial transform: `translateY(-50%) scale(0)`
- Transition: `transform 0.6s ease`
- Blob positions: `10%`, `30%`, `50%`, `60%`, `85%`
- Staggered delays visible in the recording: `0.1s`, `0.05s`, `0.1s`, `0.15s`
- Hover blob transform: `translateY(-50%) scale(3.5)`
- Hover button color: `#ff3399`

## Run
Extract the ZIP and open `index.html` in a modern browser. No dependencies or build step required.

## Fidelity note
The screen recording shows the interface and CSS editor, not the original project files. Readable CSS properties and values were transcribed from the frames. The HTML markup, accessibility, responsive layout, touch toggle, and copy button are reconstructed to make a complete runnable project. Minor selector details and presentation styles have been normalized; this is not a byte-for-byte source extraction.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
