import { Layout } from "./components/layout/Layout";
import { MenuProvider } from "./contexts/Menu";
import { CurrentPage, PageProvider } from "./contexts/Page";

export default function App() {
  return (
    <MenuProvider>
      <PageProvider>
        <Layout>
          <CurrentPage />
        </Layout>
      </PageProvider>
    </MenuProvider>
  );
}
