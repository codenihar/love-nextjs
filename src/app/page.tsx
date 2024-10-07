"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

const STORED_PASSWORD = "10-08";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === STORED_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("tappu code enter chesav :/");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      {!isAuthenticated ? (
        <div className="login-box bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">
            Secret Code Plsssss
          </h2>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ikkada type chey"
            className="mb-4 border-pink-300 focus:ring-pink-500"
          />
          <Button
            onClick={handleLogin}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
          >
            Lessgoooo
          </Button>
          {error && (
            <Alert variant="destructive" className="mt-4">
              {error}
            </Alert>
          )}
        </div>
      ) : (
        <div className="love-letter bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Deyyyy!</h2>
          <p className="text-lg text-pink-700">
            Inkenni rojulu ra baabu, I love youuuu, nuv lekpothe nen lenu😭
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
