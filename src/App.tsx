import { Layout } from "./components/layout/Layout";
import { MenuProvider } from "./contexts/Menu";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <MenuProvider>
      <Layout>
        <Home />
      </Layout>
    </MenuProvider>
  );
}
