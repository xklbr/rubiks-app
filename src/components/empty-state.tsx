type EmptyStateProperties = {
  image: string;
  title: string;
  description: string;
  buttonTitle?: string;
  buttonOnClick?: () => void;
};

const EmptyState = ({
  image,
  title,
  description,
  buttonTitle,
  buttonOnClick,
}: EmptyStateProperties) => (
  <div className="text-center ui__h-90 flex flex-col justify-center">
    <img className="mx-auto h-80 w-80" src={image} alt="" />
    <h3 className="mt-10 text-lg font-semibold text-gray-200">{title}</h3>
    <p className="mt-1 text-md text-gray-400">{description}</p>
    {buttonTitle && (
      <div className="mt-6">
        <button
          onClick={buttonOnClick}
          type="button"
          className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {buttonTitle}
        </button>
      </div>
    )}
  </div>
);

export default EmptyState;
