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
    }, 100000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-red-200 py-6 transition-colors duration-300 dark:bg-slate-800">
      <div className="section-container px-4 lg:px-8">
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
              className="h-[280px] w-full flex-none snap-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat shadow-2xl md:h-[340px] lg:h-[380px]"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="flex h-full flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 text-white md:p-10">
                <h2 className="max-w-2xl text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-gray-100 md:text-base">
                  {item.desc}
                </p>
                <button className="mt-6 w-fit rounded-full bg-red-600 px-6 py-2.5 font-semibold text-white shadow-lg transition duration-300 hover:bg-red-700 active:scale-95">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="mt-5 flex justify-center gap-2">
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
    </section>
  );
};

export default Banner;
