"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface ProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();
const Providers: React.FC<ProviderProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
