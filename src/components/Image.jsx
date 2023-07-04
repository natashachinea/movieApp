
function Image({src, alt}) {

     const style = {
         width: '120px',
         height: '100%',
     }

     return (
         <div>
             {!!src ? <img src={`https://image.tmdb.org/t/p/w300/${src}`} alt={alt} style={style}/> :
                 <img src={'https://placehold.co/400x550?text=Image+no+found'} style={style}/>}
         </div>
     );
 }

 export default Image;