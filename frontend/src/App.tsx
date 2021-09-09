import NavBar from 'assets/components';
import DataTable from 'assets/components/DataTable';
import Footer from 'assets/components/Footer';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">App React Started</h1>
        <DataTable/>
      </div>
      <Footer />
    </>
  );
}

export default App;
