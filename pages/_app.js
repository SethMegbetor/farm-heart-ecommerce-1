// import React from "react";

// import { Layout } from "../components";
// import { StateContext } from "../context/StateContext";
// import { Toaster } from "react-hot-toast";

// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <StateContext>
//       <Layout>
//         <Toaster/>
//         <Component {...pageProps} />
//       </Layout>
//     </StateContext>
//   );
// }

// export default MyApp;

import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
