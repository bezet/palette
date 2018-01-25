import Clipboard from 'clipboard';
import anime from 'animejs';

class Palette {
  constructor( paletteSelector = '.color-palette', paletteColorSelector = '.color-palette__color' ) {
    this.paletteSelector = paletteSelector;
    this.paletteColorSelector = paletteColorSelector;
    this.palette = document.querySelector( this.paletteSelector );
    this.createPalette();
  }

  createPalette() {
    const paletteColors = this.palette.querySelectorAll( this.paletteColorSelector );

    [ ...paletteColors ].forEach( ( color ) => {
      let colorValue = window.getComputedStyle( color, 'after' ).getPropertyValue( 'content' );
      colorValue = colorValue.replace( /"/g, '' );
      color.dataset.clipboardText = colorValue;
    } );

    this.bindEvents();
  }

  bindEvents() {
    const clipboard = new Clipboard( this.paletteColorSelector );
    clipboard.on( 'success', () => {
      anime( {
        targets: event.target,
        translateY: -5,
        scale: 1.2,
        duration: 300,
        direction: 'alternate'
      } );
    } );
  }
}

export default Palette;
