import {Redirect, Router} from "@reach/router";
import NotFound from "../pages/404";
import BucketDetailPage from "../pages/bucket-detail";
import BucketPage from "../pages/buckets";

function AppRouter() {
  return (
    <Router>
      <BucketPage path="/" />
      <Redirect from="/buckets" to="/" noThrow />
      <BucketDetailPage path="/buckets/:bucketId" />
      <NotFound default />
    </Router>
  );
}

export default AppRouter;
