import { useState } from "react";
import { LoadingStatus } from "./lib/_Common/UiConstants";
import { BButton } from "./lib/BButton/BButton";
import { BiAlarm } from "react-icons/bi";
import { BLoading } from "./lib/BLoading/BLoading";

function App() {

  const [loading, setLoading] = useState(LoadingStatus.None);

  const clcik = () => {
    setLoading(LoadingStatus.Loading);
    setTimeout(() => {
      setLoading(LoadingStatus.None);
    }, 5000);

  }

  return (
    <>
      <BButton title="Kaydet" status={loading} icon={<BiAlarm />} onClick={(e) => clcik()} loadingText={"Lütfen Bekleyiniz..."} />
    </>
  );
}

export default App;
