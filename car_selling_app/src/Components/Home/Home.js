

import "./Home.css";
import Card from "../Cards/Card";

function Home({product}){
    return (
        <div>
            <div className='row'>
          {
            product.map((carApp, item, index ) =>(
              <div className='col-3'>
                <Card item={carApp}  key={index} />
              </div>
            ))}
        </div> 

        </div>
    );
}

export default Home;