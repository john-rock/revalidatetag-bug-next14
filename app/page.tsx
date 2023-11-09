import Image from "next/image";

export default async function Home() {

  const response = await (
    await fetch("http://worldtimeapi.org/api/timezone/America/New_York", {
      next: { tags: ["test"] },
    })
  ).json();

  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">

      <div className="mb-auto mt-auto text-black">{response.datetime}</div>
    </main>
  );
}
