
import './Home.css'
import Cards from '../Cards/Cards';

function Home({product,visible}){
    return (
        <>
        
        <div className='row'>
            {
                product.slice(0,visible).map((houseApp,item,index) =>(
                    <div className='col-3'>
                        <Cards item={houseApp} />
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Home;