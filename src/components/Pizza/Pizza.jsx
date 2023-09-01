const Pizza = ({ pizzaObj }) => {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className="p-5">
      <div className="flex">
        <img
          className={`h-32 w-32 ${pizzaObj.soldOut ? "grayscale" : ""} `}
          src={pizzaObj.photoName}
          alt={pizzaObj.photoName}
        />
        <div
          className={`flex flex-col p-2 ${
            pizzaObj.soldOut ? "text-gray-600" : ""
          }`}
        >
          <strong className="text-xs pt-2">{pizzaObj.name}</strong>
          <p className="text-xs pt-2">{pizzaObj.ingredients}</p>
          <span className="text-xs pt-2">
            {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Pizza;
