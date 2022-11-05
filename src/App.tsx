import "./App.css";
import "./dist/output.css";
import SpecsList from "./layout/SpecsList/SpecsList";
import SpecsForm from "./layout/SpecsForm/SpecsForm";
import "antd/dist/antd.css";
import SpecsCTXProvider from "./contexts/SpecsListContext";

function App() {
  return (
    <>
      <SpecsCTXProvider>
        <div className="w-10/12 mx-auto">
          <div className="justify-between mt-10 flex w-full">
            <SpecsList />
            <SpecsForm />
          </div>
        </div>
      </SpecsCTXProvider>
    </>
  );
}

export default App;
