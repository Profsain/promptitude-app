import "@styles/globals.css";


export const metadata = {
  title: "💖Promptitude",
  description:
    "Discover and share the best of the web AI prompt, curated by Promptitude.",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
