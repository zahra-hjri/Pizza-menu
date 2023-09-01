import Pizza from "../Pizza/Pizza";
import { pizzaData } from "../../data";

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzasLength = pizzas.length;

  return (
    <main className="w-1/2 md:w-3/6 mx-auto">
      <h3 className="mx-auto font-bold border-t-2 border-b-2 border-black w-24 mb-5">
        OUR MENU
      </h3>

      {pizzasLength > 0 ? (
        <>
          <span className="font-normal text-xs mx-auto block">
            Authentic Italian cuizine. 6 creative dishes to choose from. All
            from our stone oven, all delicious.
          </span>
          <ul className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 ">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p className="font-normal text-xs mx-auto py-6">
          We are working on our menu. please come back later :)
        </p>
      )}
    </main>
  );
};

export default Menu;
