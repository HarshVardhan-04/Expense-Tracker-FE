import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import TransTable from "./components/TransTable";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";

function App() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        <Nav />

        {/* Main Content */}
        <main className=" bg-gray-100 ">
          <div className="flex">
             <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Income"
          amount="12000"
          />
          <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Income"
          amount="12000"
          />
          <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Income"
          amount="12000"
          />
          </div>
         

          <TransTable/>
        </main>
      </div>
    </div>
  );
}

export default App;