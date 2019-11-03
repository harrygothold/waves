import React, { Component } from "react";
import ImageLightBox from "react-images";

class Lightbox extends Component {
  state = {
    lightboxIsOpen: true,
    current: this.props.position,
    images: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.images) {
      const images = [];
      nextProps.images.forEach(element => {
        images.push({ src: `${element}` });
      });
      return (prevState = { images });
    }
    return false;
  }

  goToPrevious = () => {
    this.setState({ current: this.state.current - 1 });
  };

  goToNext = () => {
    this.setState({ current: this.state.current + 1 });
  };

  closeLightbox = () => {
    this.props.onclose();
  };

  render() {
    const { current, images, lightboxIsOpen } = this.state;
    return (
      <ImageLightBox
        currentImage={current}
        images={images}
        isOpen={lightboxIsOpen}
        onClickPrev={() => this.goToPrevious()}
        onClickNext={() => this.goToNext()}
        onClose={() => this.closeLightbox()}
      />
    );
  }
}

export default Lightbox;
