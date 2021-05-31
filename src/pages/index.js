import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import {getImage,GatsbyImage} from 'gatsby-plugin-image';
import {css} from '@emotion/react';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';



const Index = () => {

    const inicio = useInicio();
    const {nombre,contenido,imagen} = inicio[0];

    const image = getImage(imagen.localFile);

    return ( 

        <Layout>
            <div
             css={css`
                display: grid;
             `}
             >
             <GatsbyImage 
                image={image}
                alt="Hero Inicio"	
                css={css`
                  grid-area: 1/1;
                    height:800px;
                   // max-width: 1200px;
                `}
                />
                <div
                css={css`   
                    grid-area: 1/1;
                    position: relative;
                    place-items: center;
                    display: grid;
                `}>
                    <h1 
                        css={css`
                            color: #FFF;
                            font-size:2rem;
                            margin: 0;
                            max-width: 800px;

                            @media(min-width:992px){
                                &{
                                    font-size: 4rem;
                                }
                            }
                        `}
                    > Venta de casas y departamentos exclusivos </h1>
                </div>
            </div>
            <main>
                <div css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p css={css`
                            text-align: center;
                    `}>{contenido}</p>
                </div>
            </main>

            <Encuentra/>

            <ListadoPropiedades/>
         
           
        </Layout>
            );
        
        
}
 
export default Index;