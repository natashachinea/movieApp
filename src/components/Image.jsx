 function Image({src, alt, ...others}) {
    const notFound = <img src='images/Screenshot 2023-06-07 at 17.33.58.png' alt="not found" />;

     return (

         <div>
             {<img src={src} alt={alt} />} ?
         </div>
     );
 }

 export default Image;