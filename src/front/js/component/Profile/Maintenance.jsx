import "../../../styles/maintenance.css";

const Maintenance = () => {
    return (
        <section className="maintenance">
            <h2>Seguimiento de mantenimiento</h2>

            <div className="bar">
                <span>Llantas</span>
                <div className="progress">
                    <div className="ok" style={{ width: "85%"}} />
                </div>
            </div>

            <div className="bar">
                <span>Frenos</span>
                <div className="progress">
                    <div className="warn" style={{ width: "42%" }} />
                </div>
            </div>

            <div className="bar">
                <span>Cadena</span>
                <div className="progress">
                    <div className="bad" style={{ width: "12%" }} />
                </div>
            </div>
        </section>
    );
};

export default Maintenance;