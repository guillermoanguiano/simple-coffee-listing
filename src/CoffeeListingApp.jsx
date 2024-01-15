import { useEffect, useState } from "react"
import Item from "./components/Item";

const CoffeeListingApp = () => {

  const [isActive, setIsActive] = useState(true)

  const [data, setData]         = useState([])

  const [available, setAvailable] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const res = await response.json();
        setData(res);

        const dataAvailable = data.filter( datos => datos.available)

        setAvailable(dataAvailable)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [isActive]);
  
  
  return (
    <>
        <div className="vector rounded-lg bg-color-p sm:w-8/12 xl:w-11/12 lg:w-3/4 flex flex-col text-center justify-center items-center px-10 pt-14 pb-20 mx-auto my-40">

          <div className="space-y-5 flex flex-col items-center sm:w-10/12 w-2/4 py-5">
            <h1 className="font-medium text-4xl">Our Collection</h1>
            <p className="text-color">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          </div>

          <div className="space-x-3 mb-10 font-bold text-base">   
            <input className={`cursor-pointer px-3 py-2 rounded-lg ${ isActive && 'btn-true'}`} type="button" value="All Products" onClick={() => setIsActive( prev => !prev)} />

            <input className={`cursor-pointer px-3 py-2 rounded-md ${ !isActive && 'btn-true'}`}  type="button" value="Available Now" onClick={() => setIsActive( prev => !prev)} />
          </div>


          <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-5/6 gap-8">
            { isActive ? (
              data.map( item => (
                <Item 
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  votes={item.votes}
                  popular={item.popular}
                  available={item.available}
                />
              ))) : (
                available.map( item => (
                  <Item 
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    votes={item.votes}
                    popular={item.popular}
                    available={item.available}
                  />
                ))
              )}
          </div>
        </div>
    </>
  )
}

export default CoffeeListingApp