export type Testimonial = {
  id: number;
  name: string;
  content: string;
  src: string;
  title?: string;
};

export interface TestimonialCardProp {
  name: string;
  content: string;
  src: string;
}
