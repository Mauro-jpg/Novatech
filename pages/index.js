import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Typed from 'react-typed';

const Navbar = () => <header id="header">
  <nav className="navbar navbar-expand-lg navbar-light w-100 border-3 border-bottom border-dark">
  <a className="navbar-brand logoNavBar p-4" href="#">
    <div className='badge'>
      <div className='textLogo'>
        
      </div>
    </div>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
  aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav nav">
        <li className="nav-item">
          <Link href="#Nosotros">
            <a className="nav-link text-dark">Nosotros</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#Soporte">
            <a className="nav-link text-dark">Soporte T.I</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#Desarrollo">
            <a className="nav-link text-dark">Desarrollo</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#Servicios">
            <a className="nav-link text-dark">Servicios en la Nube</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#Staff">
            <a className="nav-link text-dark">Staff Augmentation</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#Contactanos">
            <a className="nav-link text-dark">Contactanos</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</header>

const Nosotros = () => <div id="Nosotros" className='border-5 border-bottom border-success' style={{'height':'100vh'}}>
<div className='Content'>
    <video autoPlay muted loop>         
      <source src="/background1.mp4" type="video/mp4"/>       
    </video>
    <div id="NostrosTextBackground">
      <Typed
            strings={[`NUEVAS NECESIDADES,
            <br>
            NUEVAS TECNOLOGÍAS,
            <br>
            NUEVAS SOLUCIONES`]}
            typeSpeed={15}
        />
    </div>
    <div className='NosotrosContent'>
      <div className='NosotrosParrafo'>
        Desde 2006, Dimensionamos, Implementamos y Administramos las soluciones tecnológicas que tu empresa necesita.
            <br/>
            Somos tu socio tecnológico, basamos nuestros servicios en la confianza, la buena comunicación y la agilidad para brindarte soluciones flexibles, seguras y de alto 
            impacto que te ayuden a lograr tus objetivos.
      </div>
  </div>
</div>
</div>

const Soporte = () => <div id="Soporte" className='backgroundBlocked border-5 border-bottom border-success' style={{'height':'95vh'}}>        
<div className='col50 Content' style={{'width':'50%', 'height' : '100%'}}>
  <video autoPlay muted loop>         
      <source src="/it.mp4" type="video/mp4"/>       
  </video>
  <div className='SoporteContent'>
      <div className='SoporteParrafo'>
          <div className='SoporteCambia'>
            Concentrate en tu negocio
            <br/>
            nosotros en tu tecnología
          </div>
      </div>
    </div>
</div>
<div className='col50'>
  <div style={{'marginTop' : '69px'}}>
  <div className="wp container animated fadeInUp" data-animate="fadeInUp">
      <h3><b>Soporte T.I.</b></h3>
      <p>Te apoyamos en la administración de tu infraestructura de tecnología. Contarás con un departamento de
        informática independiente de tu estructura o tamaño. Apoyado con personal técnico capacitado y comprometido
        para que todo funcione correctamente.</p>
      <p>Te ofrecemos asesoría en tecnología para asegurarte que tu empresa estará actualizada y aplicando las
        mejores herramientas y soluciones para tu negocio.</p>
      <p>Contamos con amplia experiencia en Administracion de Centros de Computos, Administración de Comunicaciones,
        Servidores, Telefonia IP y Servicio a Usuarios.</p>
    </div>
  </div>
</div>
</div>

const Desarrollo = () => <div id="Desarrollo"  className='backgroundBlocked border-5 border-bottom border-success' style={{'height':'95vh'}}>
<div className='col50'>
    <div className="wp container animated fadeInUp">
        <h3><b>Desarrollo de Software</b></h3>
        <p>Desarrollamos soluciones en múltiples plataformas para distintos mercados y destinos.</p>
        <p>Tomemos un café y hablemos sobre tus necesidades puntuales y desarrollaremos una solución acorde, ágil, innovadora y que ayude a la mejora y automatización en tus procesos.</p>
        <p>Staff Augmentation Contamos con recursos altamente calificados para sumar a tu equipo o proyectos. Desarrolladores, Project Manager.</p>
    </div>
</div>
<div className='col50 Content' style={{'width':'50%', 'height' : '100%'}}>
      <div className='DesarrolloContent'>
          <div className='SoporteParrafo'>
              <div className='SoporteCambia'>
              Tu solución a medida,
              <br/>
              ágil y eficiente
              </div>
          </div>
        </div>
    </div>
</div>

const Servicios = () => <div id="Servicios"  className='backgroundBlocked border-5 border-bottom border-success' style={{'height':'95vh'}}>
<div className='col50 Content' style={{'width':'50%', 'height' : '100%'}}>
    <video autoPlay muted loop>         
        <source src="/satelites.mp4" type="video/mp4"/>       
    </video>
    <div className='ServicioContent'>
        <div className='SoporteParrafo'>
            <div className='SoporteCambia'>
            Te conectamos con la nube
            </div>
        </div>
      </div>
  </div>
  <div className='col50'>
    <div style={{'marginTop' : '69px'}}>
    <div className="wp container animated fadeInUp" data-animate="fadeInUp">
        <h3><b>Servicios en la Nube.</b></h3>
        <p>Uno de los principales desafíos de las empresas hoy en día es asegurar la disponibilidad 
          de sus aplicacaciones de negocio, con nuestros servicios de cloud computing usted gana en tranquilidad.</p>

        <p>Ofrecemos servicios de respaldos en la nube, servicios de servidores 100% en 
          la nube y contingencia, lo que asegura la continuidad de su negocio pase lo que pase.</p>
      </div>
    </div>
  </div>
</div>

const Staff = () => <div id="Staff" className='backgroundBlocked border-5 border-bottom border-success' style={{'height':'95vh'}}>
<div className='col50'>
    <div className="wp container animated fadeInUp">
        <h3><b>Staff Augmentation</b></h3>
        <p>Los recursos necesarios en el momento justo</p>
        <p>Este servicio te permite subcontratar personal calificado, demanera que se cubran todas las necesidades de conocimientos y habilidades que tu proyecto requiere.</p>
        <p>Necesitas darle un impulso a tu proyecto?</p>
        <p>Ponerte al día con tus objetivos de desarrollo?</p>
        <p>Tienes un proyecto que no puedes atenderlo únicamente con tu personal interno?</p>
        <p>Novatech es la extensión que tu equipo necesita.</p>
    </div>
</div>
<div className='col50 Content' style={{'width':'50%', 'height' : '100%'}}>
      <div className='DesarrolloContent'>
          <div className='SoporteParrafo'>
              <div className='SoporteCambia'>
              Los recursos necesarios en el momento justo
              </div>
          </div>
        </div>
    </div>
</div>

const Contactanos = () => <div id="Contactanos" style={{'height':'800px'}}>
  <div className='col50'>
    <h1>Contactanos</h1>
    <p>info@novatech.com.uy</p>
    <p>22049488</p>
    <p>25 de Mayo 747, Montevideo, Uruguay.</p>
  </div>
  <div className='col50'>
    
  </div>
  <br/>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.4001684723034!2d-56.199288011437595!3d-34.90342800784708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802bd4be3925%3A0xb976bfbfab04f514!2s25%20de%20Mayo%20749%2C%2011000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1653854208173!5m2!1ses-419!2suy" 
width="400" height="300" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Nosotros/>

      <Soporte/>

      <Desarrollo />

      <Servicios />

      <Staff />

      <Contactanos />

    </div>
  )
}