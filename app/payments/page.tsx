import { columns } from "./columns";
import { getData } from "./data";
import { DataTable } from "./data-table";

const PaymentPage = async () => {
  const data = await getData();
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className=" font-semibold">All Payments</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentPage;
