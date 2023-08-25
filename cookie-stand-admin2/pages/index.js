import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import CreateForm from '@/components/createForm';
import ReportTable from '@/components/ReportTable';
import Footer from '@/components/Footer';


 

export default function Home() {
  // State to store the cookie stand data
  const [cookieStands, setCookieStands] = useState([]);

  // Function to add a new cookie stand
  const addCookieStand = (event) => {
    event.preventDefault();

    // Create a new cookie stand object
    const newCookieStand = {
      id: cookieStands.length + 1, // Generate a unique ID
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    // Update the cookie stands state with the new cookie stand
    setCookieStands([...cookieStands, newCookieStand]);

    // Reset the form fields
    event.target.reset();
  };

  return (
  <div>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    <Header />
    <CreateForm  handeler={addCookieStand}/>
    <ReportTable handeler={cookieStands.length} handeler2={cookieStands}/>
    <Footer  />
  </div>
);
  }