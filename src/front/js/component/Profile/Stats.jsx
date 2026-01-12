import "../../../styles/profile.css";

const Stats = () => {
    return (
        <section className="stats">
            <div className="stat-card">
                <p>Distancia</p>
                <h3>2,4kms</h3>
            </div>
            <div className="stat-card">
                <p>Desnivel</p>
                <h3>42kms</h3>
            </div>
            <div className="stat-card">
                <p>Rutas</p>
                <h3>128</h3>
            </div>
        </section>
    );
};

export default Stats;