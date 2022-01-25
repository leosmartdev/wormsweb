import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MmLayout from "./layouts/MmLayout";

// pages
import HomePage from "./pages/Home";
import MmLoginPage from "./pages/MmLogin";
import MarketPlacePage from "pages/Marketplace";
import MarketLayout from "./layouts/MarketLayout";
import WalletPage from "pages/Wallet";
import WalletLayout from "layouts/WalletLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <MmLayout>
              <MmLoginPage />
            </MmLayout>
          }
        />
        <Route
          path="/marketplace"
          element={
            <MarketLayout>
              <MarketPlacePage />
            </MarketLayout>
          }
        />
        <Route
          path="/wallet"
          element={
            <WalletLayout>
              <WalletPage />
            </WalletLayout>
          }
        />
      </Routes>
    </Router>
  );
}
