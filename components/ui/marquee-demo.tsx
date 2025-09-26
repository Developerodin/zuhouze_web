import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Aarav",
    username: "@aarav_in",
    body: "Zuhouze makes finding homes in India so simple. The video tours save me so much time.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Fatima",
    username: "@fatima_dxb",
    body: "Searching in Dubai feels easy now. Zuhouze is clear, modern, and transparent.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Wei Ling",
    username: "@weiling_sg",
    body: "I love how smooth and aspirational the experience feels in Singapore.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Amir",
    username: "@amir_my",
    body: "In Malaysia, Zuhouze is a game-changer. Video-first makes it so engaging.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Neha",
    username: "@neha_in",
    body: "Zuhouze stands out. The video listings are clear and super helpful.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Omar",
    username: "@omar_dxb",
    body: "Finally, a platform in Dubai that feels modern and trustworthy.",
    img: "https://avatar.vercel.sh/james",
  },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
