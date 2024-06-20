import React, { useState } from 'react';
import Header from './components/Header';
import BehanceList from './components/BehanceList';
import { behanceImages } from './Data';
import Footer from './components/Footer';

const App = () => {
  const [sortedItems, setSortedItems] = useState(behanceImages);

  return (
    <>
      <div className="main relative overflow-hidden">
        <Header setSortedItems={setSortedItems} />
        <BehanceList sortedItems={sortedItems} />
        <Footer/>
      </div>
    </>
  );
};

export default App;
