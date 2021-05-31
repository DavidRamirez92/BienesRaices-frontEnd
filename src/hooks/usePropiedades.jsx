import {graphql, useStaticQuery} from 'gatsby';


const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query{
        allStrapiPropiedades {
          nodes {
            nombre
            descripcion
            id
            wc
            precio
            Estacionamiento
            habitaciones
            categorias {
              nombre
            }
            agentes {
              nombre
              telefono
              email
            }
            imagen {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    width: 600
                    height: 400
                  )
                }
              }
            }
          }
        }
      }
    `);

    // console.log(datos);
    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        estacionamiento: propiedad.Estacionamiento,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categoria: propiedad.categorias
    }))
}
export default usePropiedades;