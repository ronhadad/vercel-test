"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { Destination } from "@/data/destinations";

export default function DestinationsGrid({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  const active = openIndex !== null ? destinations[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2">
        {destinations.map((d, i) => (
          <button
            key={d.slug}
            onClick={() => setOpenIndex(i)}
            className="flex flex-col overflow-hidden rounded-[20px] border border-[#0d2b45]/6 bg-white text-right shadow-[0_8px_30px_rgba(13,43,69,0.1)] transition hover:-translate-y-1"
          >
            <div className="relative h-70 overflow-hidden bg-[#0d2b45]">
              <PlaceholderImage gradient={d.gradient} />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0d2b45]/75" />
              <div className="absolute inset-x-6 bottom-5">
                <div className="text-xs font-semibold tracking-[4px] text-[#e8cf8c]">
                  {d.en}
                </div>
                <div className="font-serif text-[38px] font-bold leading-none text-white">
                  {d.name}
                </div>
                <div className="mt-1 text-[15px] text-white/85">{d.tag}</div>
              </div>
            </div>
            <div className="flex flex-1 flex-col px-7 py-7">
              <p className="mb-5 flex-1 text-[16px] leading-relaxed text-[#5b6b7d]">
                {d.blurb}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3.5">
                <span className="text-[14px] font-semibold text-[#0d2b45]">
                  🗓️ {d.best}
                </span>
                <span className="rounded-full bg-[#0d2b45] px-6 py-2.5 text-[14.5px] font-bold text-[#faf8f2] transition group-hover:bg-[#c2a05a]">
                  לפרטים על היעד
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#08192a]/60 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-auto rounded-[22px] bg-[#faf8f2] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          >
            <div className="relative h-67.5 overflow-hidden bg-[#0d2b45]">
              <PlaceholderImage gradient={active.gradient} />
              <div className="absolute inset-0 bg-linear-to-b from-[#0d2b45]/20 to-[#0d2b45]/75" />
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 left-4 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-white/90 text-xl leading-none text-[#0d2b45]"
              >
                ×
              </button>
              <div className="absolute inset-x-7 bottom-5.5">
                <div className="text-xs font-semibold tracking-[4px] text-[#e8cf8c]">
                  {active.en}
                </div>
                <div className="font-serif text-[42px] font-bold leading-none text-white">
                  {active.name}
                </div>
              </div>
            </div>
            <div className="px-8.5 py-8.5">
              <p className="mb-6.5 text-[17px] leading-relaxed text-[#3d4b5c]">
                {active.desc}
              </p>
              <div className="mb-3.5 text-[13px] font-bold tracking-[2px] text-[#c2a05a]">
                נקודות שאסור לפספס
              </div>
              <div className="mb-6.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2.5 rounded-xl border border-[#0d2b45]/7 bg-white px-3.5 py-3"
                  >
                    <span className="h-2 w-2 flex-none rounded-full bg-[#c2a05a]" />
                    <span className="text-[15px] font-medium text-[#0d2b45]">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0d2b45]/10 pt-5">
                <div>
                  <div className="text-[13px] text-[#94a3b0]">
                    זמן ביקור מומלץ
                  </div>
                  <div className="text-[16px] font-bold text-[#0d2b45]">
                    {active.best}
                  </div>
                </div>
                <button
                  onClick={() =>
                    router.push(`/contact?dest=${encodeURIComponent(active.name)}`)
                  }
                  className="rounded-full bg-[#0d2b45] px-7 py-3.5 text-[15.5px] font-bold text-[#faf8f2] transition hover:bg-[#c2a05a] hover:text-[#0d2b45]"
                >
                  תתחילו לתכנן את המסע ←
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
