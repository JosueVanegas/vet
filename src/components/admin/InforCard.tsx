export const InfoCard = ({
  title,
  information,
}: {
  title: string;
  information: string;
}) => {
  return (
    <div className="mt-5 group overflow-hidden cursor-pointer">
      <h3 className="font-bold text-xl border-l-4 border-primary pl-2">
        {title}
      </h3>
      <p className="pl-5">{information}</p>
    </div>
  );
};
export default InfoCard;
