"use client";
import { useRef, useEffect } from "react";
import type { Testimonial } from "@/types/testimonial";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeftPos.current = slider.scrollLeft;
      slider.classList.add("cursor-grabbing");
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;

      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(() => {
        scrollRef.current!.scrollLeft = scrollLeftPos.current - walk;
      });
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="max-w-360 w-full overflow-y-hidden my-6">
      <div
        ref={scrollRef}
        className="w-full overflow-hidden scroll-smooth cursor-grab select-none"
      >
        <div className="flex gap-5 flex-nowrap">
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-128.75">
              <TestimonialCard name={t.name} content={t.content} src={t.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
