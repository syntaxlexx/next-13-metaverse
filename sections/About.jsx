"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> Seamlessly
        innovate user friendly paradigms and customized web services. Credibly
        implement effective infrastructures without multifunctional scenarios.
        Conveniently promote collaborative human capital with interoperable
        human capital. Holisticly parallel task world-class e-commerce for
        pandemic e-business. Uniquely mesh 2.0 initiatives whereas effective
        growth strategies.{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        Enthusiastically re-engineer timely testing procedures vis-a-vis unique
        web-readiness. Proactively visualize vertical paradigms without
        inexpensive portals. Continually myocardinate customized sources before
        superior architectures. Phosfluorescently monetize just in time
        collaboration and idea-sharing and open-source e-commerce. Holisticly
        parallel task client-centered innovation for seamless leadership skills.{" "}
        <span className="font-extrabold text-white">VR</span> Efficiently
        underwhelm extensive experiences via performance based experiences.
        Conveniently disseminate competitive content after principle-centered
        quality vectors. Collaboratively impact flexible ROI whereas
        frictionless scenarios. Holisticly syndicate 24/365 communities with
        robust testing procedures. Progressively conceptualize multifunctional
        collaboration and idea-sharing after client-focused metrics. Let's{" "}
        <span className="font-extrabold text-white">explore </span> the madness
        of the metaverse bys crolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
