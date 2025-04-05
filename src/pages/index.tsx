import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const { setTheme } = useTheme();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl text-primary">Hello World</h1>
        <Button>Sentuh Aku</Button>
        <Button size="icon" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
        <Button size="icon" onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      </main>
    </>
  );
}
