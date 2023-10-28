import "@styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "💖Promptitude",
  description:
    "Discover and share the best of the web AI prompt, curated by Promptitude.",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          {Children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
