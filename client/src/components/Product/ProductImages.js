import React, { Component } from "react";
import Lightbox from "../utils/Lightbox";

class ProductImages extends Component {
  state = {
    lightbox: false,
    imagePosition: 0,
    lightboxImages: []
  };

  componentDidMount() {
    const { detail } = this.props;
    if (detail.images.length > 0) {
      let lightboxImages = [];
      detail.images.forEach(item => {
        lightboxImages.push(item.url);
      });
      this.setState({ lightboxImages });
    }
  }

  handleLightbox = position => {
    if (this.state.lightboxImages.length > 0) {
      this.setState({ lightbox: true, imagePosition: position });
    }
  };

  handleLightboxClose = () => this.setState({ lightbox: false });

  renderProductImage = images => {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return `image_not_availble.png`;
    }
  };

  renderThumbs = () =>
    this.state.lightboxImages.map((item, i) =>
      i > 0 ? (
        <div
          key={i}
          onClick={() => this.handleLightbox(i)}
          className="thumb"
          style={{ background: `url(${item}) no-repeat` }}
        ></div>
      ) : null
    );

  render() {
    const { detail } = this.props;
    const { lightbox, lightboxImages, imagePosition } = this.state;

    return (
      <div className="product_image_container">
        <div className="main_pic">
          <div
            style={{
              background: `url(${this.renderProductImage(
                detail.images
              )}) no-repeat`
            }}
            onClick={() => this.handleLightbox(0)}
          ></div>
        </div>
        <div className="main_thumbs">{this.renderThumbs()}</div>
        {lightbox && (
          <Lightbox
            id={detail.id}
            images={lightboxImages}
            open={lightbox}
            position={imagePosition}
            onclose={() => this.handleLightboxClose()}
          />
        )}
      </div>
    );
  }
}

export default ProductImages;
