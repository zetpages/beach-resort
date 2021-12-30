import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    playground,
    parking
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // console.log("asdfasdfasdf-----asdf");
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  // const roomsF = Object.keys(rooms).length;
  // console.log("rooms fileterd: " + roomsF);


  return (
    <section className="filter-container">
      {/* <Title title="search rooms" /> */}
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Тип недвиж.</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Кол. комнат</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>

        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">цена ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">площадь м.кв</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={playground}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Фичи</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={parking}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Мичи</label>
          </div>
        </div>
        {/* end of extras type */}
        {/* <Link to="/results-rooms">Показать предложений</Link> */}
      </form>
    </section>
  );
};

export default RoomsFilter;
