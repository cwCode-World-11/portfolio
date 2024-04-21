import React from "react";
import * as IE from "./importAndExports";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

import ScrollToHashElement from "./ScrollToHashElement";

/* Bold 700--font tilte size */
/* body font size=48,36,32,21,16px-regular */
// https://www.wix.com/website/templates/?criteria=developer&dashboardFirstMetaSiteId=4430c40d-fb89-4323-b037-9d56b64f0504

// installed package
// npm i react-router-dom
// npm i react-icons
// npm i react-type-animation
// npm i aos
// npm install nodemailer
// npm install --save @emailjs/browser
// i'm using "emailjs" platform to send gmail and i sign up with "code world"(not google account,only email) password is same as my google account

// Alert : Don't forget to remove divider line.
// Alert : Don't forget to change a logo.

function App() {
  return (
    <React.Fragment>
      <ScrollToHashElement />
      <Routes>
        <Route index element={<IE.HomeComponent />} />
        <Route path="/viewAllProject" element={<IE.ProjectModalComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
