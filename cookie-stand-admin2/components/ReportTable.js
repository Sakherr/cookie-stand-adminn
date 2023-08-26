import { hours } from "@/data";
import { calculateTotal } from "../helper/calculateTotal";
import { useUser } from "@/context/authCtx";

const tdClass = "px-3 border border-gray-600";

function ReportTable({ cookieStands, deleteCookieStand }) {
  const { id } = useUser();

  if (cookieStands.length === 0) {
    return (
      <h2 className="p-5 text-lg font-semibold text-center text-gray-700">
        No Cookie Stands Available
      </h2>
    );
  }

  const { hourlyTotals, totalAll } = calculateTotal(cookieStands);

  function getRowClassName(index, stand) {
    return "bg-white";
  }
  

  return (
    <div className="my-4 overflow-x-auto shadow-md sm:rounded-md">
      <table className="min-w-full text-sm">
        <thead className="bg-green-200">
          <tr className="px-5">
            <th>Location</th>
            {hours.map(function (hour) {
              return <th key={hour}>{hour}</th>;
            })}
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cookieStands.map(function (stand, i) {
            return (
              <tr key={i} className={getRowClassName(i, stand)}>
                <td className={tdClass}>{stand.location}</td>
                {hours.map(function (hour, i) {
                  return (
                    <td key={hour} className={tdClass}>
                      {stand.hourly_sales && stand.hourly_sales[i]}
                    </td>
                  );
                })}
                <td className={tdClass}>
                  {stand.hourly_sales
                    ? stand.hourly_sales.reduce(function (prev, curr) {
                        return prev + curr;
                      }, 0)
                    : "-"}
                </td>
                <td className={`${tdClass} text-center`}>
                  {stand.owner === id && (
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                      role="button"
                      onClick={function () {
                        deleteCookieStand(stand);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="font-bold text-center bg-green-200">
          <tr>
            <td className={tdClass}>Totals</td>
            {hourlyTotals.map(function (hourlyTotal, i) {
              return (
                <td key={i} className={tdClass}>
                  {hourlyTotal}
                </td>
              );
            })}
            <td className={tdClass}>{totalAll}</td>
            <td className={tdClass}> - </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ReportTable;
