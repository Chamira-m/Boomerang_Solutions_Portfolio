import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mx-auto mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary sm:mx-0 sm:justify-start md:justify-center">
          {icon}
        </div>
        <h3 className="mb-5 text-center text-xl font-bold text-black dark:text-white sm:text-left sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-center text-base font-medium leading-relaxed text-body-color sm:text-left">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
