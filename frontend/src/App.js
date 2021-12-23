import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameLayout from "./layouts/GameLayout";
import Layout from "./layouts/Layout";
// pages
import HomePage from "./pages/Home";
import Play from "./pages/Play";

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
      </Routes>
    </Router>
  );
}
