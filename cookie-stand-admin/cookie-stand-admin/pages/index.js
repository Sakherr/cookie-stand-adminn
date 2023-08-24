import Head from 'next/head';

const Header = () => (
  <header className="bg-green-500 p-4 text-center">
    <h1 className="text-3xl font-bold text-white">Cookie Stand Admin</h1>
  </header>
);
 function submitHandler(event) {
    event.preventDefault();

    const cookieStand = {
      location: event.target.location.value,
      MinimumCustomersPerHour: event.target.minCustomers.value,
      MaximumCustomersPerHour: event.target.maxCustomers.value,
      AverageCookiesPerSale: event.target.AverageCookies.value
    };

    setJsonString(JSON.stringify(cookieStand, null, 2));
  }
const Main = () => (
  <main className="p-3">
  <div className="flex justify-center  items-center h-screen">

    <form  className="bg-green-200  p-5 rounded-lg w-2/3	"
          onSubmit={submitHandler}>
    <h2 className="text-xxl font-semibold text-center text-black mb-4">Create Cookie Stand</h2>
      <label className="block mb-1">
        Location:
        <input
          type="text"
          className="w-full border rounded-md p-2"
          placeholder="Enter location"
          name ="location"
        />
      </label>
      <div className="flex items-center space-x-2">
      <label className="block mb-3">
        Minimum Customers per Hour:
        <input
          type="number"
          className="w-full border rounded-md p-2"
          placeholder="Enter minimum customers"
          name ="MinimumCustomersPerHour"
        />
      </label>
      <label className="block mb-2">
        Maximum Customers per Hour:
        <input
          type="number"
          className="w-full border rounded-md p-2"
          placeholder="Enter maximum customers"
          name ="MaximumCustomersPerHour"
        />
      </label>
      <label className="block mb-2">
        Average Cookies per Sale:
        <input
          type="number"
          step="0.01"
          className="w-full border rounded-md p-2"
          placeholder="Enter average cookies"
          name ="AverageCookiesPerSale"
        />
      </label>
      <button
        type="submit"
        className="bg-green-500 text-white w-48 h-24	 px-4 py-2 rounded"
      >
        Create
      </button>
      </div>

    </form >
    </div>
    <div className="p-4 bg-gray-100">
      {}
    </div>
  </main>
);

const Footer = () => (
  <footer className="bg-green-500 p-4 text-center">
    <p className="text-white"> &copy; 2023 Cookie Stand</p>
  </footer>
);

const Home = () => (
  <div>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Home;