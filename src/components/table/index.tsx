import { FC } from 'react';
import { Column, useTable, useSortBy } from 'react-table';

import Button from 'components/button';

type TableListProperties = {
  title?: string;
  description?: string;
  buttonTitle?: string;
  columns: Column<any>[];
  hiddenColumns: string[];
  data: any;
  styles?: string;
  onRowClick?: (id: string) => () => void;
};

const TableList: FC<TableListProperties> = ({
  title,
  description,
  buttonTitle,
  columns,
  hiddenColumns,
  data,
  styles,
  onRowClick,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        initialState: { hiddenColumns },
        columns,
        data,
      },
      useSortBy,
    );

  return (
    <>
      <div className="flex items-center">
        <div className="flex-auto">
          <h2 className="text-base font-semibold text-gray-200">{title}</h2>
          <p className="mt-2 text-sm text-gray-300">{description}</p>
        </div>
        <div className="mt-4">
          <Button
            buttonStyle="primary"
            render={buttonTitle}
            size="md"
            variant="py-2"
            link
            url="/admin/users/new"
          />
        </div>
      </div>
      <table {...getTableProps()} className={`mt-10 w-full ${styles || ''}`}>
        <thead className="bg-gray-700 h-12 text-left text-gray-300">
          {headerGroups.map((item, index) => (
            <tr
              {...item.getHeaderGroupProps()}
              key={`header-${item?.headers[index].id}`}
            >
              {item.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth, width: column.width },
                  })}
                  key={`column-${column?.Header}`}
                  className="px-2"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={`row-${row?.id}`}
                onClick={onRowClick && onRowClick(row.values.id)}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps({
                      style: {
                        // @ts-ignore
                        padding: cell.column.padding,
                      },
                    })}
                    key={`cell-${cell?.column?.id}`}
                    className="px-2 text-gray-400"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
