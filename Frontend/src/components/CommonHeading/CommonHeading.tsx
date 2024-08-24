const CommonHeading = ({ title, des }: { title: string; des?: string }) => {
  return (
    <div className=" flex mb-8 justify-center flex-col gap-1 items-center">
      <h2 className=" text-2xl md:text-4xl font-bold text-gray-700">{title}</h2>
      <p className=" text-sm md:text-base font-medium text-gray-600">{des}</p>
    </div>
  );
};

export default CommonHeading;
