import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/layout/Layout";
import { CurrentPage, PageProvider } from "./contexts/Page";
import { Floating } from "./components/layout/Floating";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageProvider>
        <Layout>
          <CurrentPage />
        </Layout>
      </PageProvider>
      <Floating />
    </QueryClientProvider>
  );
}
