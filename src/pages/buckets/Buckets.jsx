// Import Assets
import Create from "../../components/create/Create";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/Table";

function BucketPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/* Add New Bucket Section */}
        <Create placeholder="Create New Bucket" />
        {/* Buckets Table */}
        <div className="section table __shadow--sm">
          <Table />
        </div>
      </main>
    </div>
  );
}

export default BucketPage;
