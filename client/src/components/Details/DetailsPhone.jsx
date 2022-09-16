import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesById, getClean } from "../../redux/Actions";
import { Link, useParams } from "react-router-dom";

export default function DetailsPhone(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPhonesById(id));
    return dispatch(getClean());
  }, [dispatch]);
  const myProducts = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loading);
  console.log(myProducts);
  return (
    <div>
      <Link to="/home">Back</Link>
      {!loading ? (
        <div>
<<<<<<< HEAD
            <Link to="/home">Back</Link>
            { !loading ?
                
                    <div>
                        <h1>{myProducts&&myProducts.model}</h1>
                        <h3>Category: {myProducts&&myProducts.category}</h3>
                        <h3>Brand: {myProducts&&myProducts.brand}</h3>
                        <h5 >Capacity: { myProducts&&myProducts.capacity}</h5>
                        <img src={myProducts&&myProducts.image} alt="Not found" width="200px" height="250px"></img>
                        <h6>{myProducts&&myProducts.description} </h6>
                    </div> : <h1>Loading...</h1>
            }
            {/* <div>
            <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/js/swiffy-slider.min.js" ></script>
            <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/css/swiffy-slider.min.css" rel="stylesheet" ></link>
            
            <div className="swiffy-slider">
            <ul className="slider-container">
                <li><img src="https://source.unsplash.com/49b9l_29ceA/1600x900" style={{maxWidth: '100%', height: 'auto'}}></img></li>
                <li><img src="https://source.unsplash.com/nKAglN6HBH8/1600x900" style={{maxWidth: '100%', height: 'auto'}}></img></li>
                <li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900" style={{maxWidth: '100%', height: 'auto'}}></img></li>
            </ul>

            <button type="button" className="slider-nav"></button>
            <button type="button" className="slider-nav slider-nav-next"></button>

            <div className="slider-indicators">
                <button className="active"></button>
                <button></button>
                <button></button>
            </div>
</div>

            </div> */}
=======
          <h1>{myProducts && myProducts.model}</h1>
          <h3>Category: {myProducts && myProducts.category}</h3>
          <h3>Brand: {myProducts && myProducts.brand}</h3>
          <h3>
            Price:{" "}
            {myProducts.price
              ? myProducts.price.map((e) => "$" + e + ". ")
              : "Loading..."}
          </h3>
          <h3>
            Capacity:{" "}
            {myProducts.capacity
              ? myProducts.capacity.map((e) => e + "Gb. ")
              : "Loading..."}
          </h3>
          <img
            src={myProducts && myProducts.image}
            alt="Not found"
            width="200px"
            height="250px"
          ></img>
          <h6>{myProducts && myProducts.description} </h6>
>>>>>>> db056447f9cde9855f6d88fb7e294115f26a6263
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
