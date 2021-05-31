import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import{GatsbyImage,getImage} from 'gatsby-plugin-image';
import {css} from '@emotion/react';

const Encuentra = () => {
    const {imagen} = useStaticQuery(graphql`
    query{
       imagen: file(relativePath: {eq: "encuentra.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
      `);

    return(
        <div
        css={css`
           display: grid;
        `}
        >
        <GatsbyImage 
           image={getImage(imagen)}
           alt="Hero Inicio"	
           css={css`
             grid-area: 1/1;
               height:300px;
           `}
           />
           <div
           css={css`   
               grid-area: 1/1;
               position: relative;
               place-items: center;
               display: grid;
               color: #FFF;
           `}>
               <h3 
                   css={css`
                       
                       font-size:2rem;
                       margin: 0;
                       max-width: 800px;

                       @media(min-width:992px){
                           &{
                               font-size: 4rem;
                           }
                       }
                   `}
               > Encuentra la casa de tus sueños </h3>
           </div>
       </div>
        );
}
export default Encuentra