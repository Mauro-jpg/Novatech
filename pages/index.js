import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Typed from 'react-typed';

const Navbar = () => <header id="header">
  <nav className="navbar navbar-expand-lg navbar-light w-100 border-3 border-bottom border-dark">
  <a className="p-4" href="#">
    <div className='logo'>
      <div>
        
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

const Nosotros = () => <div id="Nosotros" className='border-5 border-bottom border-success'>
<div className='Content fullHeight'>
    <video autoPlay muted loop>         
      <source src="/background1.mp4" type="video/mp4"/>       
    </video>
    <div id="NostrosTextBackground">
      <Typed
            strings={[`NUEVAS NECESIDADES,
            <br>
            NUEVAS TECNOLOGÍAS,
            <br>
            NUEVAS SOLUCIONES...`]}
            typeSpeed={15}
        />
    </div>
    <div className='NosotrosContent fullWidth'>
      <div className='NosotrosParrafo'>
        Desde 2006, Dimensionamos, Implementamos y Administramos las soluciones tecnológicas que tu empresa necesita.
            <br/>
            Somos tu socio tecnológico, basamos nuestros servicios en la confianza, la buena comunicación y la agilidad para brindarte soluciones flexibles, seguras y de alto 
            impacto que te ayuden a lograr tus objetivos.
      </div>
  </div>
</div>
</div>

const Soporte = () => <div id="Soporte" className='backgroundBlocked border-5 border-bottom border-success'>        
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
  <div className='subCol50'>
  <div className="subCol50 wp container animated fadeInUp" data-animate="fadeInUp">
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

const Desarrollo = () => <div id="Desarrollo"  className='backgroundBlocked border-5 border-bottom border-success'>
<div className='col50'>
    <div className="subCol50 wp container animated fadeInUp">
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

const Servicios = () => <div id="Servicios"  className='backgroundBlocked border-5 border-bottom border-success'>
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
    <div className="wp container animated fadeInUp" data-animate="fadeInUp">
        <h3><b>Servicios en la Nube.</b></h3>
        <p>Uno de los principales desafíos de las empresas hoy en día es asegurar la disponibilidad 
          de sus aplicacaciones de negocio, con nuestros servicios de cloud computing usted gana en tranquilidad.</p>

        <p>Ofrecemos servicios de respaldos en la nube, servicios de servidores 100% en 
          la nube y contingencia, lo que asegura la continuidad de su negocio pase lo que pase.</p>
      </div>
  </div>
</div>

const Staff = () => <div id="Staff" className='backgroundBlocked border-5 border-bottom border-success'>
<div className='col50'>
    <div className="wp container animated fadeInUp">
        <h3><b>Staff Augmentation</b></h3>
        <p>Los recursos necesarios en el momento justo<br/><br/>
        Este servicio te permite subcontratar personal calificado, demanera que se cubran todas las necesidades de conocimientos y habilidades que tu proyecto requiere.<br/><br/>
        Necesitas darle un impulso a tu proyecto?<br/>
        Ponerte al día con tus objetivos de desarrollo?<br/>
        Tienes un proyecto que no puedes atenderlo únicamente con tu personal interno?<br/><br/>
        Novatech es la extensión que tu equipo necesita.</p>
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

const Contactanos = () => <footer id="Contactanos" style={{'height':'800px'}}>
  <h1>Contactanos</h1>
  <div className='col30 line'>
    
    <p>info@novatech.com.uy</p>
    <p>22049488</p>
    <p>25 de Mayo 747, Montevideo, Uruguay.</p>
  </div>
  <div className='col30 line'>
    
  <form id="form-email" abineguid="3401ED4161E94E128C6F6CFA05A4B13E">
            <label>
              <input placeholder="Nombre:" id="nombre" type="text" name="nombre" data-validation-engine="validate[required]" />
            </label>
            <label>
              <input placeholder="Correo electrónico:" id="email" type="email" name="email" data-validation-engine="validate[required,custom[email]]" />
            <div id="pwm-inline-icon-24111" class="pwm-field-icon" style={{"position": "absolute !important;",
            "width": "18px !important;", "height": "18px !important;", "min-height": "0px !important;", "min-width": "0px !important;", "z-index": "2147483645 !important;", "box-shadow": "none !important;", "box-sizing": "content-box !important;", "background": "none !important;", "border": "none !important;", "padding": "0px !important;", "cursor": "pointer !important;", "outline": "none !important;", "margin-top": "-27.5px;", "margin-left": "270px;"}}>
              <svg style={{"display": "inline-block !important;", "width": "16px !important;", "height": "16px !important;", "fill": "rgb(230, 0, 23) !important;", "margin-top": "0.5px !important;", "position": "absolute !important;", "top": "0px !important;", "left": "0px !important;"}} viewBox="0 0 40 64">
                <g>
                  <path d="m20,28.12a33.78,33.78 0 0 1 13.36,2.74a22.18,22.18 0 0 1 0.64,5.32c0,9.43 -5.66,17.81 -14,20.94c-8.34,-3.13 -14,-11.51 -14,-20.94a22.2,22.2 0 0 1 0.64,-5.32a33.78,33.78 0 0 1 13.36,-2.74m0,-28.12c-8.82,0 -14,7.36 -14,16.41l0,5.16c2,-1.2 2,-1.49 5,-2.08l0,-3.08c0,-6.21 2.9,-11.41 8.81,-11.41l0.19,0c6.6,0 9,4.77 9,11.41l0,3.08c3,0.58 3,0.88 5,2.08l0,-5.16c0,-9 -5.18,-16.41 -14,-16.41l0,0zm0,22c-6.39,0 -12.77,0.67 -18.47,4a31.6,31.6 0 0 0 -1.53,9.74c0,13.64 8.52,25 20,28.26c11.48,-3.27 20,-14.63 20,-28.26a31.66,31.66 0 0 0 -1.54,-9.77c-5.69,-3.3 -12.08,-4 -18.47,-4l0,0l0.01,0.03z">
                    </path>
                    <path d="m21.23,39.5a2.81,2.81 0 0 0 1.77,-2.59a2.94,2.94 0 0 0 -3,-2.93a3,3 0 0 0 -3,3a2.66,2.66 0 0 0 1.77,2.48l-1.77,4.54l6,0l-1.77,-4.5z">
                </path>
                </g></svg>
                </div></label>
            <label>
              <textarea name="mensaje" placeholder="Mensaje:"></textarea>
            </label>
            <label>
              <input value="enviar" id="enviar" type="button" name="enviar" />
            </label>
          </form>
  </div>
  <div className='col30'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.4001684723034!2d-56.199288011437595!3d-34.90342800784708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802bd4be3925%3A0xb976bfbfab04f514!2s25%20de%20Mayo%20749%2C%2011000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1653854208173!5m2!1ses-419!2suy" 
width="400" height="300" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  
</footer>

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