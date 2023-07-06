type CardReportPropersties = {
  title: string;
  data: any[];
};

const CardReport = ({ title, data }: CardReportPropersties) => (
  <div>
    <h3 className="text-base font-semibold leading-6 text-gray-200">{title}</h3>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {data?.map((item) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-lg bg-gray-600 px-4 py-5 shadow sm:p-6"
        >
          <dt className="truncate text-sm font-medium text-gray-200">
            {item.title}
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-300">
            {item.total}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export default CardReport;
