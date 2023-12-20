import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto 2fr;
  grid-template-rows: 1fr;
  gap: 2.5%; /* Assuming a default font size of 16px, this is roughly equivalent to 40px */
  max-width: 90vw;
  max-height: 60vh; 
  margin: 5% 10%;
  color: #fff;
  
`

export const DetailsContainer = styled.div`
  grid-column: 2/5;
  grid-row: 1/2;
  justify-self: center;
  align-self: start;
  
  h1 {
    
  
  
`

export const Poster = styled.div`
  
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: end;
    align-self: start;


  img {
    max-width: 80vw; /* 80% of the viewport width */
    max-height: 60vh; /* 60% of the viewport height */
    border-radius: 10px; /* Assuming a default font size of 16px, this is roughly equivalent to 10px */
  
  }
  
`

export const BgImage = styled.div`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position:  left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  height: 80vh;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -1;
  opacity: 0.8;
 
  

  div {
    background-image: linear-gradient(
            to right,
            rgba(1, 20, 35.3, 1) calc((50vw - 170px) - 340px),
            rgba(1, 20, 35.3, 0.20) 100%,
            rgba(1, 20, 35, 0.1) 138%,
            rgba(1, 20, 35, 0.1) 83%
  );
    
    background-size: cover;
    height: 100%;
    background-position: center;
    z-index: 2;

  }


`

