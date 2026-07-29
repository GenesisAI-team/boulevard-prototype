import { useEffect, useState, type ComponentType } from "react";
import {
  Accessibility,
  Clock,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  Star,
  Utensils,
  X,
} from "lucide-react";

const TEL = "+34948143003";
const TEL_DISPLAY = "+34 948 14 30 03";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Bar+Boulevard+P.%C2%BA+Anelier+9+31014+Pamplona+Navarra";
const ADDRESS = "P.º Anelier, 9 · 31014 Pamplona, Navarra";

const dishes = [
  ["Entrecot al punto", "Brasa", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=82"],
  ["Carrilleras melosas", "Cocina lenta", "https://upload.wikimedia.org/wikipedia/commons/6/69/Braised_Beef_Cheek_Casserole_with_Seasonal_Vegetables_-_La_Terrasse%2C_Rouen_2026-05-10_%281%29.jpg"],
  ["Pescado del día", "Mercado", "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=82"],
  ["Menestra de verduras", "Temporada", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=82"],
  ["Para compartir", "En el centro", "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1000&q=82"],
  ["Postres caseros", "Final dulce", "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=82"],
] as const;

const reviews = [
  "Comida rica, casera y bien servida. Se sale contento y con ganas de volver.",
  "Trato cercano y atento desde que entras. Se nota el cuidado en cada plato.",
  "Los postres caseros son un final perfecto para una comida abundante.",
];

const moments: Array<{
  icon: ComponentType<{ size?: number }>;
  title: string;
  text: string;
  cta: string;
}> = [
  {
    icon: Clock,
    title: "Menú del día",
    text: "Una propuesta diferente cada día. Llámanos y te contamos qué ha preparado hoy la cocina.",
    cta: "Consultar menú",
  },
  {
    icon: Utensils,
    title: "A la carta",
    text: "Entrantes para compartir, carnes, pescados, platos de cuchara y postres caseros.",
    cta: "Reservar mesa",
  },
  {
    icon: ShoppingBag,
    title: "Para llevar",
    text: "Disfruta de tus platos favoritos en casa. Consúltanos disponibilidad y haz tu pedido por teléfono.",
    cta: "Pedir para llevar",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    ["#cocina", "La cocina"],
    ["#carta", "Carta"],
    ["#opiniones", "Opiniones"],
    ["#visita", "Visítanos"],
  ];

  return (
    <div className="site-shell">
      <header className={`header ${scrolled || menuOpen ? "header--solid" : ""}`}>
        <div className="header__inner container">
          <a className="logo" href="#inicio" aria-label="Boulevard, inicio">
            BOULEVARD
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {nav.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <a className="button button--primary header__cta" href={`tel:${TEL}`}>
            <Phone size={17} /> Reservar mesa
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="button button--primary" href={`tel:${TEL}`}>
              <Phone size={17} /> Reservar mesa
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <img
            className="hero__image"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=84"
            alt="Mesa con diferentes platos de cocina mediterránea"
          />
          <div className="hero__overlay" />
          <div className="hero__content container">
            <p className="eyebrow eyebrow--light"><span /> Pamplona · Navarra</p>
            <h1>Cocina con carácter.<br /><em>Sabor</em> para recordar.</h1>
            <p className="hero__lead">
              Cocina española y mediterránea en el corazón de Pamplona:
              platos variados, raciones generosas y un ambiente para disfrutar.
            </p>
            <div className="button-row">
              <a className="button button--primary button--large" href={`tel:${TEL}`}>
                <Phone size={19} /> Reservar por teléfono
              </a>
              <a className="button button--ghost button--large" href="#carta">Ver la carta</a>
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Reconocimientos y valoración">
          <div className="trust__grid container">
            <article>
              <div className="stars" aria-label="4,2 de 5">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={17} />)}
              </div>
              <strong>4,2 / 5 en Google</strong>
              <small>Valoración pública</small>
            </article>
            <article>
              <strong><span>N.º 2</span> en Pamplona</strong>
              <small>De 14 restaurantes</small>
            </article>
            <article>
              <Utensils size={25} />
              <strong>Española y mediterránea</strong>
              <small>Con opciones vegetarianas</small>
            </article>
          </div>
          <p className="source-note">Datos públicos mostrados por Restaurant Guru, 2026.</p>
        </section>

        <section id="cocina" className="section container editorial">
          <div className="editorial__copy">
            <p className="eyebrow">La cocina</p>
            <h2>Aquí se viene<br />a <em>disfrutar</em>.</h2>
            <div className="rule" />
            <p>
              Cocina casera y variada, con producto bien trabajado y sin artificios.
              Guisos que respetan los tiempos, brasa cuando el corte lo pide y
              verduras de temporada en su punto.
            </p>
            <p>
              Raciones generosas, sabores reconocibles y un final dulce hecho en casa.
              Un sitio para venir con hambre y salir contento.
            </p>
          </div>
          <div className="editorial__visual">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=82"
              alt="Emplatado de cocina contemporánea"
              loading="lazy"
            />
            <img
              className="editorial__detail"
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=600&q=82"
              alt="Detalle de un plato servido"
              loading="lazy"
            />
          </div>
        </section>

        <section id="carta" className="section section--dark">
          <div className="container">
            <p className="eyebrow eyebrow--gold">Nuestra carta</p>
            <h2>Sabores que hablan<br />por sí <em>solos</em>.</h2>
            <p className="section-intro">
              Una muestra de los sabores que puedes encontrar. La oferta puede cambiar
              según el día: llámanos y te contamos la propuesta actual.
            </p>
            <div className="dish-grid">
              {dishes.map(([name, tag, image], index) => (
                <article className={`dish ${index === 0 ? "dish--featured" : ""}`} key={name}>
                  <img src={image} alt={name} loading="lazy" />
                  <div className="dish__overlay" />
                  <div className="dish__copy">
                    <small>{tag}</small>
                    <h3>{name}</h3>
                  </div>
                </article>
              ))}
            </div>
            <div className="food-notes">
              <span><Leaf size={17} /> Opciones vegetarianas</span>
              <span>Postres caseros</span>
              <span>Producto de temporada</span>
            </div>
          </div>
        </section>

        <section className="section container moments">
          <p className="eyebrow">Para cada momento</p>
          <h2>Como más te <em>apetezca</em>.</h2>
          <div className="moment-grid">
            {moments.map(({ icon: Icon, title, text, cta }) => (
              <article className="moment-card" key={title}>
                <Icon size={33} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={`tel:${TEL}`}><Phone size={16} /> {cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="opiniones" className="section reviews">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=82"
            alt=""
            loading="lazy"
          />
          <div className="reviews__overlay" />
          <div className="reviews__content container">
            <p className="eyebrow eyebrow--gold">Opiniones</p>
            <h2>Lo que más valoran<br />nuestros <em>clientes</em>.</h2>
            <p className="rating">★ ★ ★ ★ ★ <strong>4,2 / 5</strong></p>
            <div className="review-grid">
              {reviews.map((review) => (
                <blockquote key={review}>
                  “{review}”
                  <footer>Reseña pública</footer>
                </blockquote>
              ))}
            </div>
            <p className="review-note">Textos representativos de temas recurrentes en reseñas públicas.</p>
          </div>
        </section>

        <section id="visita" className="section container visit">
          <div>
            <p className="eyebrow">Visítanos</p>
            <h2>Te esperamos<br />en <em>Pamplona</em>.</h2>
            <div className="contact-list">
              <p><MapPin /> <span><strong>Dirección</strong>{ADDRESS}</span></p>
              <p><Phone /> <span><strong>Reservas y pedidos</strong><a href={`tel:${TEL}`}>{TEL_DISPLAY}</a></span></p>
            </div>
            <div className="service-list">
              <span><Utensils size={16} /> Reservas</span>
              <span><Leaf size={16} /> Terraza</span>
              <span><ShoppingBag size={16} /> Para llevar</span>
              <span><Accessibility size={16} /> Accesible</span>
            </div>
            <div className="button-row">
              <a className="button button--primary button--large" href={MAPS_URL} target="_blank" rel="noreferrer">
                <MapPin size={19} /> Cómo llegar
              </a>
              <a className="button button--outline button--large" href={`tel:${TEL}`}>
                <Phone size={19} /> Llamar ahora
              </a>
            </div>
          </div>
          <a className="map-card" href={MAPS_URL} target="_blank" rel="noreferrer">
            <img
              src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=1400&q=82"
              alt="Mapa visual de ubicación de Boulevard en Pamplona"
              loading="lazy"
            />
            <div>
              <MapPin size={38} />
              <strong>Boulevard · Pamplona</strong>
              <small>{ADDRESS}</small>
              <span>Abrir en Google Maps</span>
            </div>
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__grid container">
          <div>
            <p className="logo logo--footer">BOULEVARD</p>
            <p>Bar Restaurante en Pamplona. Cocina española y mediterránea, casera y variada.</p>
          </div>
          <nav aria-label="Navegación del pie">
            <strong>Navegar</strong>
            {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div>
            <strong>Contacto</strong>
            <p>{ADDRESS}</p>
            <a href={`tel:${TEL}`}>{TEL_DISPLAY}</a>
          </div>
        </div>
        <div className="footer__bottom container">
          <span>© {new Date().getFullYear()} Bar Restaurante Boulevard</span>
          <em>Propuesta web demostrativa</em>
        </div>
      </footer>

      <nav className="mobile-actions" aria-label="Acciones rápidas">
        <a href={`tel:${TEL}`}><Phone size={19} /> Llamar</a>
        <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={19} /> Cómo llegar</a>
      </nav>
    </div>
  );
}
