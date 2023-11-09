import Image from "next/image";

export default async function Home() {

  const response = await (
    await fetch("http://worldtimeapi.org/api/timezone/America/New_York", {
      next: { tags: ["test"] },
    })
  ).json();

  return (
    <main className="flex min-h-screen bg-white text-black flex-col items-center justify-between p-24">
      <p >Minimial reproduction on a fresh Nextjs install confirming revalidateTag() does not work when hosted on Vercel.</p>
      <p className="mt-10">To test:</p>
      <ol >
      <li>- Take note of the current time value below.</li>
      <li>- Hard refresh the page.</li>
      <li>- Time value should change but does not when hosted on Vercel.</li>
      <li>- Pull down the repo and run locally, time value will update as expected</li>
      </ol>


      <div className="mb-auto mt-auto text-black">{response.datetime}</div>
    </main>
  );
}
