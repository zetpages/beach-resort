
import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
import Carousel from "react-bootstrap/Carousel";

const Room = memo(({ room }) => {
  const { address, slug, images, price, size, capacity, id } = room;
  const [...listImages] = images;
  const square = price / size;

  // console.log(name);
  return (
    <article className="room">
      <Link to={`/rooms/${slug}`} className="img_parent">
        <div className="img-container">
          <Carousel interval={null}>
            {listImages.map((item, index) => (
              <Carousel.Item key={index}>
                <img src={item} alt={address} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
        </div>
      </Link>
      <p className="room-info">{address}</p>
      <p>{price}$</p>
      <p>{size} площадь</p>
      <p>{square.toFixed(1)}$ за м.кв</p>
      <p>{capacity} КОЛИЧ КОМНАТ</p>
      <p>{address}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    address: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
