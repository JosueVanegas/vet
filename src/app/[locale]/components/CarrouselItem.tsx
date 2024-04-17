const CarrouselItem = ({
  title,
  url,
  image,
}: {
  url: string;
  image: string;
  title: string;
}) => {
  return (
    <a href={url}>
      <div className="relative cursor-pointer  h-[500px] w-full ">
        <img
          className=" object-cover w-full h-full brightness-50 "
          src={image}
          alt={title}
        />
        <div className="absolute top-1/2 text-white text-2xl -translate-x-1/2 left-1/2 -translate-y-1/2">
          <h2 className="transition-all md:text-6xl text-2xl">{title}</h2>
        </div>
      </div>
    </a>
  );
};

export default CarrouselItem;
