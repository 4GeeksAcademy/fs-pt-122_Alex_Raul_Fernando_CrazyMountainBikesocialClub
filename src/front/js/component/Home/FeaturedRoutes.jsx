import "../../../styles/featuredRoutes.css";

const FeaturedRoutes = () => {
  return (
    <section className="featured-routes home-section">
      <div className="featured-header">
        <h2>Rutas destacadas</h2>
        <button className="link-btn">Ver todas</button>
      </div>

      <div className="featured-list">
        
        {/* CARD 1 */}
        <article className="route-card">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Descenso de la Cresta"
          />

          <div className="route-info">
            <div className="route-tags">
              <span className="tag">Gravel</span>
              <span className="tag">Intermedio</span>
            </div>

            <h3>Descenso de la Cresta</h3>

            <div className="route-stats">
              <span>42 km</span>
              <span>•</span>
              <span>840 m</span>
            </div>
          </div>
        </article>

        {/* CARD 2 */}
        <article className="route-card">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Bucle de Dark Peak"
          />

          <div className="route-info">
            <div className="route-tags">
              <span className="tag">MTB</span>
              <span className="tag">Pro</span>
            </div>

            <h3>Bucle de Dark Peak</h3>

            <div className="route-stats">
              <span>18 km</span>
              <span>•</span>
              <span>1.200 m</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedRoutes;
