import React, { useEffect, useState } from "react";
import { fetchStoreData } from "../utils/firebase-store";
import { Link } from "react-router-dom";

import "./Store.css";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const Store = () => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStoreData(); // Mengambil data dari koleksi "store"
      setStores(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-7xl p-4 sm:px-2 lg:px-2 lg:py-6 min-h-[50vh]">
      <div className="flex flex-col space-y-10">
        <div>
          <h1 className="text-xl font-extrabold sm:text-3xl">
            Joki Mobile Legends
          </h1>
        </div>
        <div className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-52 sm:w-80 sm:h-14 text-lg leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Cari Jasa..."
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>
        {/* value={searchKeyword}
            onChange={handleSearchChange} */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredStores.map((store, index) => (
            <Link key={index} to="/Buy" className="store-card">
              <div className="store-card-inner">
                <img
                  src={store.image}
                  alt={store.name}
                  className="store-card-image rounded-xl w52"
                />

                <div className="store-card-details">
                  <h2 className="store-card-title">{store.name}</h2>
                  <p className="store-card-description">Moonton</p>
                  <p className="store-card-price">
                    {formatCurrency(store.harga)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
