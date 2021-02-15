import {Redirect, Router} from "@reach/router";
import NotFound from "../pages/404/NotFound";
import BucketDetailPage from "../pages/bucket-detail/BucketDetail";
import BucketPage from "../pages/buckets/Buckets";

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
