import { Outlet } from "react-router-dom";
import Header from "../../../Components/Shop/Header";

const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* All Shop Pages */}
      <div className="min-w-0 lg:ml-72">
        <Outlet />
      </div>
    </div>
  );
};

export default ShopLayout;
