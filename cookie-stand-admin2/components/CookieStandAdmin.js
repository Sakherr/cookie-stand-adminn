import Head from "next/head";
import { useState, useEffect } from "react";
import { Arima } from "next/font/google";

import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";
import { getAllCookieStands, deleteCookieStand, addCookieStand } from "@/services/cookieStandsTable";
import { Header } from "./Header";

const arima = Arima({ subsets: ["latin"] });

export default function CookieStandAdmin() {
  const [cookieStands, setCookieStands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addStandStatus, setAddStandStatus] = useState({ loading: false, error: null });
  const [deletingError, setDeletingError] = useState(null);

  useEffect(function fetchCookies() {
    setLoading(true);
    setError(null);
    try {
      getAllCookieStands().then(function(data) {
        setCookieStands(data);
      }).catch(function(error) {
        setError(error.message);
      });
    } finally {
      setLoading(false);
    }
  }, []);

  function handleAddCookieStand(cookieStand) {
    setAddStandStatus({ loading: true, error: null });

    addCookieStand(cookieStand).then(function(createdCookie) {
      setCookieStands(function(prevCookieStands) {
        return [...prevCookieStands, createdCookie];
      });
    }).catch(function(error) {
      setAddStandStatus({ loading: false, error: error.message });
    }).finally(function() {
      setAddStandStatus(function(prev) {
        return { ...prev, loading: false };
      });
    });
  }

  function handleDeleteCookieStand(standToDelete) {
    setDeletingError(null);

    deleteCookieStand(standToDelete.id).then(function() {
      setCookieStands(function(prevCookieStands) {
        return prevCookieStands.filter(function(stand) {
          return stand.id !== standToDelete.id;
        });
      });
    }).catch(function(error) {
      console.error({ error });
      setDeletingError(error.message);
    });
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className={`flex flex-col min-h-screen ${arima.className}`}>
        <Header />
        <main className="mx-1 mt-8 grow sm:mx-12 md:mx-24 lg:mx-36">
          <CreateForm
            handleAddCookieStand={handleAddCookieStand}
            addStandStatus={addStandStatus}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          {loading ? (
            <p className="text-green-500 text-center">Loading...</p>
          ) : (
            <>
              <ReportTable
                cookieStands={cookieStands}
                deleteCookieStand={handleDeleteCookieStand}
              />
              {deletingError && (
                <p className="text-red-500 text-center">{deletingError}</p>
              )}
            </>
          )}
        </main>
        <footer className="p-5 text-lg font-semibold text-gray-700 bg-green-500">
          {cookieStands.length} Locations World Wide
        </footer>
      </div>
    </>
  );
}
