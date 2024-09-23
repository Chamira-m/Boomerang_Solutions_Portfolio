import { Portfolio } from "@/types/Portfolio";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SinglePortfolio = ({ blog }: { blog: Portfolio }) => {
  const { title, image, paragraph } = blog;

  // Motion variants for staggered animations
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const transitionSettings = {
    duration: 0.6,
    ease: "easeInOut",
  };

  return (
    <>
      <motion.div
        className="wow fadeInUp group relative h-[450px] overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark md:h-[600px] 2xl:h-[500px]"
        data-wow-delay=".1s"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        transition={transitionSettings}
      >
        <Link href="#" className="relative block aspect-[37/22] w-full">
          <Image src={image} alt="image" fill />
        </Link>

        <motion.div
          className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 "
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ ...transitionSettings, delay: 0.2 }}
        >
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ ...transitionSettings, delay: 0.3 }}
          >
            <Link
              href="#"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </motion.h3>

          <motion.p
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ ...transitionSettings, delay: 0.4 }}
          >
            {paragraph}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SinglePortfolio;
