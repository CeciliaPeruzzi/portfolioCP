import React from 'react'
import Image from 'next/image'


function Proyectos() {

  const proyectos = [
    {
      id: 1,
      titulo: 'Patagonic',
      descripcion: 'Participé en el desarrollo de un sitio web grupal con enfoque en usabilidad e interfaz intuitiva. Usé React, Node.js, Express y Sequelize en un entorno de trabajo ágil bajo metodología Scrum.',
      skills: 'JavaScript | NodeJS | Express.js | MySQL',
      imagen: '/images/patagonic.png',
      enlace: 'https://patagonic-ew96.onrender.com/',
    },
    {
      id: 2,
      titulo: 'Acortador de links',
      descripcion: 'Este sitio está creado para optimizar el trabajo de los usuarios a la hora de incorporar links. Mejora la usabilidad, la accesibilidad y ahorro de espacio de los enlaces en cualquier plataforma que se desee.',
      skills: 'JavaScript | NodeJS | Express.js | MongooDB',
      imagen: '/images/urlshortner.png',
      enlace: 'https://urlshortener-20u9.onrender.com/',
    },
    {
      id: 3,
      titulo: 'Saneamiento Integral',
      descripcion: 'Desarrollé una landing page responsiva con Next.js y React para la empresa Saneamiento Integral, integrando navegación adaptable (navbar con menú hamburguesa en mobile), cambio de idioma (español/inglés) con i18next y despliegue en Vercel con dominio personalizado. Implementé buenas prácticas de UI/UX, SEO y control de versiones con Git y GitHub. Implementé diseño responsive y buenas prácticas de accesibilidad. Coordiné directamente con el cliente para entender requerimientos y asegurar entregables a tiempo.',
      skills: 'Next.js | React | JavaScript | CSS | i18next | Vercel',
      imagen: '/images/saneamiento.png',
      enlace: 'https://saneamiento-integral.vercel.app/',
    },
    
  ]
    return (
    <div className="proyectos-container" id= "proyectos">
      <h1>Proyectos</h1>
      <div className='proyectos'>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className='proyecto-card'>
          <Image src={proyecto.imagen} alt={proyecto.titulo} width={300} height={150}/>
          <h3>{proyecto.titulo}</h3>
          <p className='descripcion'>{proyecto.descripcion}</p>
          <p className='skills'>{proyecto.skills}</p>
          <a href={proyecto.enlace} target='_blanck' rel='noopener nonreferrer'>
            Ver Proyecto
          </a>
        </div>  
      ))}
      </div>
    </div>
    )
      }

export default Proyectos;