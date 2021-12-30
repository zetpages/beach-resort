import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";


export default class Responsive extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });
        var settings = {
            dots: false,
            infinite: true,
            loop: true,
            speed: 500,
            slidesToShow: 4,
            centerPadding: "20px",
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 10000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (

            <section className="slick-slides">
                <h2> Лучшие предложения </h2>
                <Slider {...settings}>
                    {loading ? <Loading /> : rooms}
                    {/* <div className="box">
                        <h3>1</h3>
                    </div>
                    <div className="box">
                        <h3>2</h3>
                    </div>
                    <div className="box">
                        <h3>3</h3>
                    </div>
                    <div className="box">
                        <h3>4</h3>
                    </div>
                    <div className="box">
                        <h3>5</h3>
                    </div>
                    <div className="box">
                        <h3>6</h3>
                    </div>
                    <div className="box">
                        <h3>7</h3>
                    </div>
                    <div className="box">
                        <h3>8</h3>
                    </div> */}
                </Slider>
            </section>
        );
    }
}



// import React, { Component } from "react";
// import Carousel from "react-multi-carousel";
// import Slider from "react-slick";
// import Title from "./Title";
// import { RoomContext } from "../context";
// import Room from "./Room";
// import Loading from "./Loading";
// import ButtonGroup from "./button-group";

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1619 },
//         items: 4,
//         slidesToSlide: 4, // optional, default to 1.
//     },
//     laptop: {
//         breakpoint: { max: 1619, min: 1024 },
//         items: 3,
//         slidesToSlide: 3, // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 640 },
//         items: 2,
//         slidesToSlide: 2, // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 639, min: 0 },
//         items: 1,
//         slidesToSlide: 1, // optional, default to 1.
//     },
// };

// const carouselParams = {
//     additionalTransfrom: 0,
//     arrows: false,
//     autoPlaySpeed: 3000,
//     centerMode: false,
//     className: "",
//     containerClass: "carousel-container",
//     customButtonGroup: <ButtonGroup />,
//     dotListClass: "",
//     draggable: true,
//     focusOnSelect: false,
//     infinite: true,
//     itemClass: "",
//     keyBoardControl: true,
//     minimumTouchDrag: 80,
//     renderButtonGroupOutside: true,
//     renderDotsOutside: false,
//     responsive: responsive,
//     showDots: false,
//     sliderClass: "",
//     slidesToSlide: 1,
// }

// export default class extends Component {
//     static contextType = RoomContext;
//     render() {
//         let { loading, featuredRooms: rooms } = this.context;

//         rooms = rooms.map(room => {
//             return <Room key={room.id} room={room} />;
//         });

//         return (

//             <section className="slick-slides">
//                 <h2> Responsive </h2>
//                 <Carousel {...carouselParams} responsive={responsive} >
//                     {loading ? <Loading /> : rooms}
//                 </Carousel>
//             </section>
//         );
//     }
// }













// const styles = {
//     carouselWrapper: {
//         display: 'flex',
//         justifyContent: 'flex-end',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         mt: '-30px',
//         px: '15px',
//         '.carousel-container': {
//             width: '100%',
//             maxWidth: [
//                 '100%',
//                 null,
//                 null,
//                 '750px',
//                 '1000px',
//                 '1180px',
//                 null,
//                 'calc(50% + 865px)',
//             ],
//             mr: ['auto', null, null, null, null, null, null, '-220px'],
//             ml: 'auto',
//             '.react-multi-carousel-item': {
//                 transition: 'all 0.25s',
//             },
//             '.react-multi-carousel-item--active:nth-of-type(4n)': {
//                 opacity: '0.5',
//                 '@media screen and (max-width: 1620px)': {
//                     opacity: 1,
//                 },
//             },
//         },
//     },
//     reviewCard: {
//         boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
//         transition: 'all 0.3s',
//         borderRadius: '6px',
//         p: [
//             '30px 20px 35px',
//             '30px 25px 35px',
//             '30px 20px 35px',
//             '35px 30px 40px 40px',
//             '30px 30px 35px',
//             '35px 30px 40px 40px',
//         ],
//         bg: 'white',
//         textAlign: 'left',
//         m: [
//             '28px 5px 30px 5px',
//             '28px 20px 30px 20px',
//             '28px 15px 30px 15px',
//             '28px 15px 30px 15px',
//             '30px 20px 40px',
//         ],
//         '&:hover': {
//             boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
//         },
//         '.rating': {
//             mb: [1, null, null, 2],
//             ul: {
//                 pl: 0,
//                 listStyle: 'none',
//                 mb: 0,
//                 display: 'flex',
//             },
//             svg: {
//                 marginRight: '2px',
//                 '&:last-of-type': {
//                     marginRight: 0,
//                 },
//             },
//             '.star': {
//                 color: 'primary',
//                 mr: '1px',
//             },
//             '.star-o': {
//                 color: '#ddd',
//                 mr: '1px',
//             },
//         },
//         '.card-footer': {
//             display: 'flex',
//             alignItems: 'center',
//             marginTop: [5, null, null, '33px'],
//             '.image': {
//                 flexShrink: 0,
//                 mr: [3, null, null, 4],
//                 display: 'flex',
//                 img: {
//                     width: '55px',
//                     height: '55px',
//                     borderRadius: '50%',
//                     objectFit: 'cover',
//                 },
//             },
//         },
//     },
//     title: {
//         fontSize: [1, 2],
//         fontWeight: 700,
//         mb: [3, null, null, '22px'],
//         color: 'text',
//         lineHeight: 1.6,
//     },
//     description: {
//         fontSize: [1, null, null, 2],
//         fontWeight: 'normal',
//         color: 'text',
//         lineHeight: [1.85, null, 2],
//     },
//     heading: {
//         fontSize: [1, null, null, 2],
//         fontWeight: 700,
//         mb: '3px',
//         color: 'text',
//         lineHeight: 1.3,
//     },
//     designation: {
//         color: 'primary',
//         fontWeight: '500',
//         fontSize: 1,
//         lineHeight: 1.4,
//     },
// };