// Import Assets
import Create from "../../components/create/Create";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/Table";

function BucketDetailPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/* Crate New Item */}
        <Create extra placeholder="Add New Item" />
        {/* Item Table */}
        <section className="section table __shadow--sm">
          <Table />
        </section>
        {/* Item Table Completed */}
        <section className="section table table--success __shadow--sm">
          {/* Item Table Completed */}
          <Table />
        </section>
      </main>
    </div>
  );
}

export default BucketDetailPage;
