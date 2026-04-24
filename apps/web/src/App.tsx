import React, { useState } from "react";
import RegPage from "./pages/RegPage";
import DriverDetailsPage from "./pages/DriverDetailsPage";

type Step = "reg" | "driver";

export default function App() {
  const [step, setStep] = useState<Step>("reg");
  const [reg, setReg] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="bg-mono-white border-b border-border px-8 py-4">
        <span className="font-poppins font-bold text-xl text-mono-black">Confused.com</span>
      </header>
      <main className="max-w-xl mx-auto px-6 py-12">
        {step === "reg" && (
          <RegPage
            reg={reg}
            onRegChange={setReg}
            onContinue={() => setStep("driver")}
          />
        )}
        {step === "driver" && (
          <DriverDetailsPage reg={reg} onContinue={() => {}} />
        )}
      </main>
    </div>
  );
}
