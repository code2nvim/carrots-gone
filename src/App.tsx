import { Layout } from "./components/layout/Layout";
import { MenuProvider } from "./components/layout/Menu";
import { Home } from "./Home";

export default function App() {
  return (
    <MenuProvider>
      <Layout>
        <Home />
      </Layout>
    </MenuProvider>
  );
}
