
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about.css";

import trailLogo from "../../../assets/trail.png";
import twitterIcon from "../../../assets/twitter.png";
import instagramIcon from "../../../assets/instagram.png";
import youtubeIcon from "../../../assets/youtube.png";
import linkedinIcon from "../../../assets/linkedin.png";

export const About = () => {
  return (
    <main className="tr-about">
      <header className="tr-about__topbar">
        <div className="tr-about__wrap tr-about__topbarInner">
          <div className="tr-about__brand">
            <img
              src={trailLogo}
              alt="TRAIL logo"
              className="tr-about__brandLogo"
            />
          </div>

          <nav className="tr-about__nav">
            <span className="tr-about__navItem tr-about__navItem--active">
              Quiénes somos
            </span>
          </nav>

          <div className="tr-about__auth">
            <Link className="tr-about__authLink" to="/login">
              Iniciar sesión
            </Link>
            <Link className="tr-about__authLink tr-about__authLink--accent" to="/signup">
              Registrarse
            </Link>
          </div>
        </div>
      </header>

      <section className="tr-about__content tr-about__wrap">
        <div className="tr-about__main">
          <h2 className="tr-about__h2">Quiénes somos</h2>
          <p className="tr-about__p">
            TRAIL es una plataforma web diseñada para ciclistas que buscan planificar, registrar y compartir sus rutas de forma sencilla y eficiente. Conectamos a la comunidad ciclista con el entorno, facilitando el descubrimiento de rutas, la organización de actividades y la interacción con los recursos locales, promoviendo una experiencia deportiva completa y sostenible.
          </p>

          <h3 className="tr-about__h3">Rutas y quedadas</h3>
          <ul className="tr-about__list">
            <li>Visualización del perfil topográfico de cada recorrido</li>
            <li>Registro de entrenamientos y distancias recorridas en diferentes intervalos de tiempo</li>
            <li>Calendario visual para la organización de quedadas</li>
            <li>Biblioteca de rutas geolocalizadas sobre mapa</li>
            <li>Creación y gestión de eventos grupales</li>
            <li>Listado de próximas rutas y actividades</li>
          </ul>

          <h3 className="tr-about__h3">Perfil del ciclista</h3>
          <ul className="tr-about__list">
            <li>Configuración del estilo de ciclismo (gravel, mountain, etc.)</li>
            <li>Gestión del equipamiento de la bicicleta</li>
            <li>Registro de música asociada a entrenamientos y rutas</li>
            <li>Seguimiento de récords personales y evolución deportiva</li>
          </ul>

          <h3 className="tr-about__h3">Mantenimiento y rendimiento</h3>
          <ul className="tr-about__list">
            <li>Sistema de tracking de mantenimiento de la bicicleta</li>
            <li>Control del uso y desgaste de componentes</li>
            <li>Historial de revisiones y recomendaciones de mantenimiento</li>
            <li>Registro y comparación de marcas personales</li>
          </ul>

          <h3 className="tr-about__h3">Comunidad y retos</h3>
          <ul className="tr-about__list">
            <li>Seguimiento de otros ciclistas</li>
            <li>Retos individuales y competitivos</li>
            <li>Comparación de resultados y progresos</li>
            <li>Organización de quedadas grupales</li>
          </ul>

          <h3 className="tr-about__h3">Sitios de interés</h3>
          <ul className="tr-about__list">
            <li>Restaurantes cercanos a la ruta</li>
            <li>Tiendas de bicis para reparaciones</li>
          </ul>

          <h3 className="tr-about__h3">Desarrolladores</h3>
          <p className="tr-about__p tr-about__muted">
            (Pendiente de completar con la información del equipo)
          </p>
        </div>

        <aside className="tr-about__right">
          <div className="tr-about__rightBlock">
            <div className="tr-about__sectionTitle">Seguir</div>

            <a className="tr-about__social2" href="#" aria-label="X / Twitter">
              <span className="tr-about__icon">
                <img src={twitterIcon} alt="" />
              </span>
              <span>X / Twitter</span>
            </a>

            <a className="tr-about__social2" href="#" aria-label="Instagram">
              <span className="tr-about__icon">
                <img src={instagramIcon} alt="" />
              </span>
              <span>Instagram</span>
            </a>

            <a className="tr-about__social2" href="#" aria-label="YouTube">
              <span className="tr-about__icon">
                <img src={youtubeIcon} alt="" />
              </span>
              <span>YouTube</span>
            </a>

            <a className="tr-about__social2" href="#" aria-label="LinkedIn">
              <span className="tr-about__icon">
                <img src={linkedinIcon} alt="" />
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </aside>
      </section>

      <footer className="tr-about__bottom">
        <div className="tr-about__wrap tr-about__bottomInner">
          <div className="tr-about__logoBig">
            <img src={trailLogo} alt="TRAIL" className="tr-about__bottomLogo" />
          </div>

          <div className="tr-about__legal">
            <div>© {new Date().getFullYear()} TRAIL</div>
            <a href="#" className="tr-about__mutedLink">Reservados todos los derechos</a>
            <a href="#" className="tr-about__mutedLink">Política de privacidad</a>
            <a href="#" className="tr-about__mutedLink">No compartir mi información personal</a>
          </div>
        </div>
      </footer>
    </main>
  );
};