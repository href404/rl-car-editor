import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header title="Rocket League Car Editor" />
      <Main />
      <Footer title="Made with ❤️ by Pierre Julien" />
    </div>
  );
}
