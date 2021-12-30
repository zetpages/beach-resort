import React, { Component } from "react";
import reactDom from "react-dom";
import { Carousel } from "react-responsive-carousel";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import SlickSlider from "../components/SlickSlider";
import LoadingImage from "../images/gif/loading-arrow.gif"
import Loading from "../components/Loading";

export default class SingleRoom extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log("1111111111111asddddddddddddddddddddddddd");

    if (!room) {
      return (
        <>
          <Loading />
        </>
      );
    }
    const {
      description,
      capacity,
      size,
      price,
      extras,
      playground,
      parking,
      images
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);
    console.log("1111111111111asdddddddddddddddddddddddddddddddddsssssssssssssssssswwwwwwwwwwwwwwwwwwwwwddddddddddddddddd");
    console.log(typeof (extras));

    return (
      <>
        <section className="single-room">
          <div className="single-room-images">
            <Carousel showArrows={true}>
              {defaultImages.map((item, index) => (
                <img key={index} src={item} alt="" />
              ))}
            </Carousel>
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Описание</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Характеристики</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{parking ? "parking allowed" : "no parking allowed"}</h6>
              <h6>{playground && "playground included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Дополнтельно</h6>
          <ul className="extras">
            {Object.keys(extras).length != 0 ? extras.map((item, index) => (
              <li key={index}> - {item}</li>
            )) : `no json data`}

            {/* {extras.map((item, ind) => (
              <li key={ind}> - {item}</li>
            ))}
             */}
          </ul>
        </section>
        <SlickSlider />
      </>
    );
  }
}
