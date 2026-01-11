import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about.css";

import trailLogo from "../../../assets/trail.png";
import twitterIcon from "../../../assets/twitter.svg";
import instagramIcon from "../../../assets/instagram.svg";
import youtubeIcon from "../../../assets/youtube.svg";
import linkedinIcon from "../../../assets/linkedin.svg";

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
            TRAIL es una plataforma web sencilla pero efectiva que conecta a ciclistas con los recursos
            turísticos y culturales de la zona, facilitando la organización de rutas y promoviendo
            el turismo local.
          </p>

          <h3 className="tr-about__h3">Rutas y quedadas</h3>
          <ul className="tr-about__list">
            <li>Calendario mensual visual</li>
            <li>Formulario simple para crear quedadas</li>
            <li>Listado de próximos eventos</li>
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
