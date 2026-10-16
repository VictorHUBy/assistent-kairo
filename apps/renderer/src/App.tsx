import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tight">Kairo</h1>
      <Button>Começar</Button>
    </div>
  );
}
