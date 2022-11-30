import { useState } from "react";

import AllPages from "./AllPages";
import HomePage from "./HomePage";

export default function Routes() {
  const [showHome, setShowHome] = useState("true");

  return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}