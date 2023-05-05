import { useEffect } from "react";
import "./featuredProperties.css";
import {useDispatch, useSelector} from 'react-redux'
import { fetchFeatuerd } from "../../reducers/featuerdHotelsSlice";

const FeaturedProperties = () => {
  //const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  

  const featuerdHotels = useSelector(store => store.featuredHotels)
  console.log(featuerdHotels)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFeatuerd())
  },[dispatch])

  return (
    <div className="fp">
      {featuerdHotels.status==='loading' ? (
        <span className="loader"></span>
      ) : (
        <>
          {featuerdHotels.hotels.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;