import Link from "next/link";
const mockUrls = [
  "https://djcsjonbvl.ufs.sh/f/QFZ1TXOK6LewVKJD0ATFCsz6gNeOp0S14Pnw2cZ7Fd9RQibm",
  "https://djcsjonbvl.ufs.sh/f/QFZ1TXOK6LewxunWVldw8VMghdpqxF4K5JHZlLvE9c7mkzX1",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#8d8989] to-[#2f3030] text-white">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-58">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
