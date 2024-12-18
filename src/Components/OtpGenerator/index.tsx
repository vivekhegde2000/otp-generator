import React, { useState } from "react";
import Tab from "../Tab/Tab";
import ToggleSwitch from "../ToogleSwitch";

const OtpGenerator: React.FC = () => {
  const [otpLength, setOtpLength] = useState<number>(4);
  const [otp, setOtp] = useState<string>("    ");
  const [activeTab, setActiveTab] = useState<string>("four");
  const [includeSpecialChars, setIncludeSpecialChars] =
    useState<boolean>(false);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);

  const generateOtp = (length: number) => {
    let result = "";
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let characters = numbers;

    if (includeUppercase) {
      characters += uppercase;
    }

    if (includeLowercase) {
      characters += lowercase;
    }

    if (includeSpecialChars) {
      characters += specialChars;
    }

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setOtp(result);
  };

  const resetOtp = () => {
    setOtp(" ".repeat(otpLength));
  };

  const handleTabChange = (value: string) => {
    if (value === "custom") {
      setOtpLength(6);
      setOtp(" ".repeat(6));
    } else {
      setOtpLength(4);
      setOtp(" ".repeat(4));
      setIncludeLowercase(false);
      setIncludeSpecialChars(false);
      setIncludeUppercase(false);
    }
    setActiveTab(value);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-10 text-black">
        OTP Generator
      </h1>
      <div className="sm:w-[90%] md:w-[85%] lg:w-[60%] mx-auto mt-10 p-8 border rounded-2xl shadow-lg bg-white">
        <Tab
          tabs={[
            { label: "4 Digit OTP", value: "four" },
            { label: "Custom OTP", value: "custom" },
          ]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {activeTab === "custom" && (
          <div className="grid gap-12 p-4 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ToggleSwitch
                checked={includeUppercase}
                onChange={setIncludeUppercase}
                label="Include Uppercase Characters"
              />
              <ToggleSwitch
                checked={includeLowercase}
                onChange={setIncludeLowercase}
                label="Include Lowercase Characters"
              />
              <ToggleSwitch
                checked={includeSpecialChars}
                onChange={setIncludeSpecialChars}
                label="Include Special Characters"
              />
              <div className="flex items-center gap-6">
                <label htmlFor="otpLength" className="text-xl text-gray-700">
                  OTP Length :
                </label>
                <select
                  id="otpLength"
                  value={otpLength}
                  onChange={(e) => {
                    const tempOtpLength = Number(e.target.value);
                    setOtpLength(tempOtpLength);
                    setOtp(" ".repeat(tempOtpLength));
                  }}
                  className="border-2 border-slate-400 rounded p-2 w-[6rem] font-medium bg-white text-black focus-visible:outline-none"
                >
                  {[3, 4, 5, 6, 7, 8, 9, 10].map((length) => (
                    <option key={length} value={length}>
                      {length}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center min-h-12 mb-4">
          {otp.split("").map((digit, index) => (
            <div
              key={index}
              className="w-12 h-12 flex items-center rounded-md justify-center border border-gray-400 text-xl font-bold mx-1 text-black"
            >
              {digit}
            </div>
          ))}
        </div>

        <div className="flex justify-between py-4">
          <button
            className="bg-green-600 text-white text-xl py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:text-black hover:font-medium"
            onClick={() => generateOtp(otpLength)}
          >
            Generate OTP
          </button>
          <button
            className="bg-cyan-400 text-white text-xl py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 hover:text-black hover:font-medium"
            onClick={resetOtp}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default OtpGenerator;
