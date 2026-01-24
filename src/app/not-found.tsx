import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <Container>
        <div className="">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-4 text-red-600">
            404 – Page Not Found
          </h1>
          <p className="text-sm md:text-base mb-6">
            Sorry, we couldn’t find the page you were looking for.
          </p>
          <Link href="/" className="text-primary-100 hover:underline mt-5">
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
