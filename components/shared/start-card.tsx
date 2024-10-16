"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const reviews = [
  {
    name: "Sarah",
    username: "@sarah_bakes",
    body: "Testimonials helped me collect glowing reviews from my happy customers. My website conversion rate has skyrocketed!",
    img: "https://avatar.vercel.sh/sarah_bakes",
  },
  {
    name: "David Chen",
    username: "@david_dev",
    body: "The Testimonials platform was easy to use, and the team went above and beyond to ensure I got high-quality testimonials. Highly recommend!",
    img: "https://avatar.vercel.sh/david_dev",
  },
  {
    name: "Maria Garcia",
    username: "@maria_designs",
    body: "I was skeptical at first, but Testimonials delivered! The testimonials look fantastic and really add credibility to my brand.",
    img: "https://avatar.vercel.sh/maria_designs",
  },
  {
    name: "Michael Lee",
    username: "@michael_fitness",
    body: "The Testimonials platform could have been a bit faster, but overall, I'm happy with the testimonials I received. They've been a valuable addition to my marketing efforts.",
    img: "https://avatar.vercel.sh/michael_fitness",
  },
  {
    name: "Emily Walker",
    username: "@emily_writes",
    body: "Testimonials is a great resource for businesses of all sizes. I'd definitely recommend them to anyone looking to build social proof.",
    img: "https://avatar.vercel.sh/emily_writes",
  },
  {
    name: "Alex Turner",
    username: "@alex_music",
    body: "I was impressed with the variety of testimonial templates offered by Testimonials. They made it easy to create professional and visually appealing testimonials for my website.",
    img: "https://avatar.vercel.sh/alex_music",
  },
  {
    name: "Olivia Young",
    username: "@olivia_art",
    body: "The Testimonials team was incredibly helpful and responsive. They went above and beyond to ensure I was satisfied with the final product.",
    img: "https://avatar.vercel.sh/olivia_art",
  },
  {
    name: "Noah Smith",
    username: "@noah_tech",
    body: "I love how easy it is to manage and showcase my testimonials on my website using Testimonials. It's a game-changer for my business.",
    img: "https://avatar.vercel.sh/noah_tech",
  },
  {
    name: "Ava Davis",
    username: "@ava_travel",
    body: "Testimonials helped me increase my website traffic and conversions by adding social proof to my pages. I'm so glad I found this platform.",
    img: "https://avatar.vercel.sh/ava_travel",
  },
  {
    name: "Ethan Brown",
    username: "@ethan_fitness",
    body: "The Testimonials platform is a great value for the price. I've been able to collect and showcase a lot of positive reviews for my business.",
    img: "https://avatar.vercel.sh/ethan_fitness",
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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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

const StartCard = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/home");
  };
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <RainbowButton
        onClick={onClick}
        className="flex items-center space-x-3 mb-8 group rounded-lg hover:scale-105 transition duration-200 ease-linear"
      >
        <span>Get Started</span>{" "}
        <ArrowRightIcon className="size-5 group-hover:-rotate-45 transition duration-200 ease-linear" />
      </RainbowButton>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default StartCard;
