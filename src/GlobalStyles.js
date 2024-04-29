import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{  
    font-size:10px;
    @media (max-width:650px){
      font-size:9px;
    }
    @media (max-width:550px){
      font-size:8px;
    }
    @media (max-width:380px){
      font-size:7px;
    }
  --clr-primary:#ffebcd;  
}
body, header{
padding:0;
margin:0;
box-sizing:border-box;
font-size:2rem;
}
#root{
  min-height:100vh;
  font-family: 'Lato', sans-serif;
}
a{
  text-decoration:none;
}
`;
