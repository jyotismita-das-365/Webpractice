import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import banner1 from "../assets/banner/banner1.png";
import banner2 from "../assets/banner/banner2.png";
import banner3 from "../assets/banner/banner3.png";

const banners = [
  {
    title: "Welcome to SSIET",
    desc: "Admissions are open for 2026.",
    image: banner1,
  },
  {
    title: "Modern Campus Life",
    desc: "Learn, grow, and succeed with us.",
    image: banner2,
  },
  {
    title: "Join Our Community",
    desc: "Build your future with quality education.",
    image: banner3,
  },
];

const Banner = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    if (!scrollRef.current) return;
    const total = banners.length;
    const nextIndex = (index + total) % total;
    const width = scrollRef.current.clientWidth;

    scrollRef.current.scrollTo({
      left: nextIndex * width,
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  };

  const scroll = (direction) => {
    goToSlide(direction === "left" ? currentIndex - 1 : currentIndex + 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % banners.length;
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: next * scrollRef.current.clientWidth,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 1000000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-100 transition-colors duration-300 dark:bg-slate-900">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg transition hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-700 lg:left-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-slate-800 dark:text-slate-100" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg transition hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-700 lg:right-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-slate-800 dark:text-slate-100" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {banners.map((item, index) => (
              <div
                key={index}
                className="h-96 w-full flex-none snap-center rounded-3xl bg-cover bg-center shadow-2xl transition-transform duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="flex h-full flex-col justify-end rounded-3xl bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 text-white md:p-12 lg:p-16">
                  <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm text-gray-100 md:text-base lg:text-lg">
                    {item.desc}
                  </p>
                  <button className="mt-8 w-fit rounded-full bg-red-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-red-700 active:scale-95">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-red-600 dark:bg-cyan-400"
                    : "w-3 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
