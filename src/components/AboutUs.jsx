import { motion } from "framer-motion";
const paragraphParts = [
  { text: "Shaurya, IIT Kharagpur's annual inter-collegiate sports fest, held over a span of three days.", direction: "left" },
  { text: "Since its inception, Shaurya has become a platform that celebrates the spirit of sportsmanship and fosters a vibrant sports culture among college athletes across the nation.", direction: "right" },
  { text: "Now in its sixth edition, Shaurya brings together passion, competition, and camaraderie, offering a stage where athletes can showcase their skills, push their limits, and create unforgettable memories.", direction: "left" },
  { text: "Join us in this journey of determination, energy, and sports excellence.", direction: "right" },
];
const directionVariants = {
  left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
};
const AboutUs = () => {
  return (
    <div id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl text-center">
        <div >
          <h2 className="glow-text">About Us</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
<div className="about-container ">
  {paragraphParts.map(({ text, direction }, index) => (
    <motion.p
      key={index}
      initial={directionVariants[direction].hidden}
      whileInView={directionVariants[direction].visible}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay: index * 1 }}
      className="glow-paragraph "
    >
      {text}
    </motion.p>
  ))}
</div>
      </div>
    </div>
  );
};
export default AboutUs;
