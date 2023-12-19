import './MediaCard.css';


function Image({src, alt}) {

     // const style = {
     //     width: '120px',
     //     height: '100%',
     // }


     return (
         <div className='image-container'>
             {!!src ? <img src={`https://image.tmdb.org/t/p/w300/${src}`} alt={alt} /> :
                 <img src={'https://placehold.co/400x550?text=Image+no+found'} />}
         </div>
     );
 }

 export default Image;