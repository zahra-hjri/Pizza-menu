import Oreder from "../Order/Oreder";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  console.log(hour);

  return (
    <footer>
      {isOpen ? (
        <Oreder closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="text-xs font-bold pb-10">
          We are happy to welcome you between {openHour}:00 and
          {closeHour}:00 .
        </p>
      )}
      <div className="h-4 w-full bg-yellow-400 fixed bottom-0"></div>
    </footer>
  );
};

export default Footer;
