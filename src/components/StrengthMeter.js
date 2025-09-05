import { useState } from "react";

export default function StrengthMeter() {
  const [password, setPassword] = useState("");
  const [strong, setStrong] = useState(false);
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);

  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\+\-=\{\}\[\]:;"'<>,\.?\/\\|~`]).{8,}$/;
  const goodRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const weekRegex = /^.{6,}$/;

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setStrong(strongRegex.test(value));
    setGood(!strongRegex.test(value) && goodRegex.test(value));
    setBad(
      !strongRegex.test(value) &&
        !goodRegex.test(value) &&
        weekRegex.test(value)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <p className="text-3xl font-bold mb-4">Password Strength Meter</p>
      <input
        className="border border-black rounded-md w-[200px]"
        type="password"
        placeholder="Enter the Password"
        value={password}
        onChange={handleChange}
      />
      <div className="border rounded-md border-black w-[300px]">
        <div
          className={`
             p-[3px] transition-all duration-300
            ${bad ? "bg-red-500 w-[99px]" : ""}
            ${good ? "bg-orange-500 w-[200px]" : ""}
            ${strong ? "bg-green-500 w-[298.5px]" : ""}
          `}
        ></div>
      </div>
    </div>
  );
}
