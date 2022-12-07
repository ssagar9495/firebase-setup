import React, { useEffect, useState } from "react";
import { db } from "./component/firebaseConfig";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import { onValue } from "firebase/database";

const App = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setAllData(data);
      }
    });
  }, []);

  console.log(allData);

  return (
    <div>
      {/* {data.map((items) => (
        <>
          <h6></h6>
          <h6></h6>
        </>
      ))} */}
    </div>
  );
};

export default App;
