import * as htmlToImage from 'html-to-image';

class HtmlToImage {
  urlPng(card) {
    htmlToImage
      .toPng(card)
      .then(dataUrl => {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(error => {
        console.error('oops, something went wrong!', error);
      });
  }
}

export default HtmlToImage;
