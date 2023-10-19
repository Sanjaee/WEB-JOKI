import Navigasi from "./Navigasi";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class WinRateCalculator extends Component {
  constructor() {
    super();
    this.state = {
      totalMatches: "",
      currentWinRate: "",
      desiredWinRate: "",
      matchesNeeded: 0,
      showResult: false,
    };
  }

  handleTotalMatchesChange = (e) => {
    // Pastikan hanya menerima angka dengan menggunakan inputMode
    if (!isNaN(e.target.value)) {
      this.setState({ totalMatches: e.target.value });
    }
  };

  handleCurrentWinRateChange = (e) => {
    // Pastikan hanya menerima angka dengan menggunakan inputMode
    if (!isNaN(e.target.value)) {
      this.setState({ currentWinRate: e.target.value });
    }
  };

  handleDesiredWinRateChange = (e) => {
    // Pastikan hanya menerima angka dengan menggunakan inputMode
    if (!isNaN(e.target.value)) {
      this.setState({ desiredWinRate: e.target.value });
    }
  };

  calculateMatchesNeeded = () => {
    const { totalMatches, currentWinRate, desiredWinRate } = this.state;
    let matchesNeeded = Math.ceil(
      (totalMatches * (desiredWinRate / 100) -
        totalMatches * (currentWinRate / 100)) /
        (desiredWinRate / 100 - 1)
    );

    matchesNeeded = Math.abs(matchesNeeded);

    this.setState({ matchesNeeded, showResult: true });
  };

  render() {
    const { showResult, matchesNeeded, desiredWinRate } = this.state;
    return (
      <div>
        <Navigasi />
        <div className="flex justify-center items-center bg-opacity-50 h-screen bg-gray-200">
          <div
            className="bg-gray-50 p-4 rounded-xl shadow-xl"
            style={{ width: "410px", height: "555px" }}
          >
            <h2 className="text-2xl font-bold mb-4">Win Rate Calculator</h2>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Total Pertandingan Anda:
              </label>
              <input
                className="w-full p-2 border rounded mb-2"
                type="text"
                inputMode="numeric" // Hanya menerima angka
                value={this.state.totalMatches}
                onChange={this.handleTotalMatchesChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Total Win Rate Anda :
              </label>
              <input
                className="w-full p-2 border rounded mb-2"
                type="text"
                inputMode="numeric" // Hanya menerima angka
                value={this.state.currentWinRate}
                onChange={this.handleCurrentWinRateChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Win Rate yang Anda Inginkan :
              </label>
              <input
                className="w-full p-2 border rounded mb-2"
                type="text"
                inputMode="numeric" // Hanya menerima angka
                value={this.state.desiredWinRate}
                onChange={this.handleDesiredWinRateChange}
              />
            </div>
            <button
              className="bg-blue-500 text-white p-3 rounded mt-10 w-full hover:bg-blue-700 cursor-pointer"
              onClick={this.calculateMatchesNeeded}
            >
              Hitung
            </button>
            <Link to={"/buy"}>
              <button
                className=" bg-green-500 w-full p-3 mt-3 rounded"
                id="tombol"
              >
                <p className=" font-bold text-white">Pesan Joki</p>
              </button>
            </Link>
            <div>
              {showResult && (
                <p className="text-lg mt-4">
                  Kamu memerlukan sekitar{" "}
                  <span className="font-semibold">{matchesNeeded}</span>{" "}
                  pertandingan tanpa kekalahan untuk mencapai win rate{" "}
                  <span className="font-semibold">{desiredWinRate}</span>%.
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WinRateCalculator;
