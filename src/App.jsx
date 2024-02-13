import Page from "./Page";
import NewsProvider from "./provider/NewsProvider";

const App = () => {
  return (
    <div>
      <NewsProvider>
        <Page />
      </NewsProvider>
    </div>
  );
};

export default App;
