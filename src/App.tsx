import { Layout } from "./components/layout/Layout";
import { CurrentPage, PageProvider } from "./contexts/Page";

export default function App() {
  return (
    <PageProvider>
      <Layout>
        <CurrentPage />
      </Layout>
    </PageProvider>
  );
}
