const Oreder = ({ closeHour, openHour }) => {
  return (
    <div>
      <p className="text-xs font-bold py-4">
        We are open from {openHour}:00 to {closeHour}:00 . Come visit us or
        order online.
      </p>
      <button className="bg-yellow-400 text-xs font-bold px-4 pt-2 pb-3 mb-10">
        Order now
      </button>
    </div>
  );
};

export default Oreder;
