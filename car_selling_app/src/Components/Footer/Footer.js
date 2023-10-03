
import './Footer.css';

function Footer({totalPages,cardsPerPage,setCurrentPage,currentPage, index}){

        let pages = [];
        let npages = Math.ceil(totalPages/cardsPerPage);

        for(let i=1; i<= npages; i++){
                pages.push(i);
        }

        function preClick(){
                if(currentPage !== 1){
                        setCurrentPage(currentPage -1);
                }
        }

        function nextClick(){
                if(currentPage !== npages){
                        setCurrentPage(currentPage + 1)
                }
        }

        return(
               <div className='footer'>
                <div className='count'>
                        <h5> {currentPage} of {npages} </h5>
                </div>
                <div className='button'> 
                <button  onClick={preClick}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                             <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                             </svg></button>
                {
                        pages.map((pages,index) =>{
                                return (<>
                                        <button key={index} onClick={() => setCurrentPage(pages)}> {pages} </button>
                                </>
                                );

                        })
                }
                <button onClick={nextClick} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                             </svg>
                </button>
                </div>
               </div>
        );
}

export default Footer;