import React, { Component } from "react";

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

  handleLightbox = () => {};

  renderProductImage = images => {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return `image_not_availble.png`;
    }
  };

  renderThumbs = details =>
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
        <div className="main_thumbs">{this.renderThumbs(detail)}</div>
      </div>
    );
  }
}

export default ProductImages;
