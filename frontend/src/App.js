import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameLayout from "./layouts/GameLayout";
import Layout from "./layouts/Layout";
import MmLayout from "./layouts/MmLayout";

// pages
import HomePage from "./pages/Home";
import Play from "./pages/Play";
import MmLoginPage from "./pages/MmLogin"

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
          path="/play"
          element={
            <GameLayout>
              <Play />
            </GameLayout>
          }
        />
        <Route
          path="/mmlogin"
          element={
            <MmLayout>
              <MmLoginPage/>
            </MmLayout>
          }
        />
      </Routes>
    </Router>
  );
}
