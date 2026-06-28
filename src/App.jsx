import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        <Nav />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default App;