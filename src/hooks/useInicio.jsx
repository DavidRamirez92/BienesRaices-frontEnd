import {graphql,useStaticQuery} from 'gatsby';

const useInicio = () => {
   const resultado = useStaticQuery(graphql`
   query{
    allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
        nodes {
            id
            nombre
            contenido
            imagen {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                      layout:FULL_WIDTH 
                      formats: [AUTO, WEBP,AVIF] 
                      placeholder:BLURRED
                      transformOptions:{duotone:{
                          highlight:"#222222",shadow:"192500", opacity:30}
                      })
                }
              }
            }
          }
    }
  }
  
   `);

  return resultado.allStrapiPaginas.nodes.map(inicio =>({
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen:inicio.imagen
  })); 
}
 
export default useInicio;
