import BikeCard from "./BikeCard";
import "../../../styles/garage.css";

const Garage = () => {
  return (
    <section className="garage">
      <div className="garage-header">
        <h2>Mi Garaje</h2>
        <button className="add-bike">+ Añadir Bici</button>
      </div>

      <div className="garage-list">
        <BikeCard
          active
          name="Santa Cruz Nomad CC"
          specs="SRAM X01 Eagle · Fox 38 Factory"
          km="842 km registrados"
          image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdqF8m2lv7_IwdvWLwJw48JM-CVj1eaxX46P_Pk2dWjVicbQ64_X1fxmvny4F6AkePOlaoh2BKg2R1RJex4s5o4R6TsacX63bNjE9dTJjs_ci38J8MTQ6I"
        />

        <BikeCard
          name="Specialized Diverge"
          specs="GRX 800 · Carbon Wheels"
          km="1.520 km registrados"
          image="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwde406811/images/blog/articles/blog-gravel-bike-groupset-explained-imahe-main.jpg?sw=503&sfrm=jpg&q=80"
        />
      </div>
    </section>
  );
};

export default Garage;
