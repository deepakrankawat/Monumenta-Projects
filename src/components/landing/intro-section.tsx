import Image from "next/image";
import { Container } from "../container";

export function IntroSection() {
  return (
    <section className="py-28 bg-background relative">
      <Container className="max-w-4xl mx-auto text-center">
        <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Who We Are</h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8 text-primary leading-tight font-display">
            Breathing new life into <br className="hidden md:block"/>India's architectural history.
        </h3>
        <p className="text-xl text-muted-foreground leading-loose font-body">
            We are a heritage conservation firm dedicated to blending traditional craftsmanship with modern engineering. Specializing in ASI and CSR-funded projects, we work meticulously to honor the past while securing the future of our monuments.
        </p>
        <div className="mt-12">
            <Image
              alt="Divider decoration"
              className="h-4 mx-auto opacity-40"
              height={16}
              width={220}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQzIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMjQzIDE3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIxLjUgMi4zMjIyN0wxMjQuNzM3IDguNUwxMjEuNSAxNC42NzE3TDEyMC4xNDggOC41TDEyMS41IDIuMzIyMjdaIiBzdHJva2U9IiM4QzZBNUQiIHN0cm9rZS1widthPSIyIi8+CjxwYXRoIGQ9Ik0xIDguNUgyMC41IiBzdHJva2U9IiM4QzZBNUQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMjIuNSA4LjVIMjQyIiBzdHJva2U9IiM4QzZBNUQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMy4xNjY1IDguNUgxMDguODMzIiBzdHJva2U9IiM4QzZBNUQiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtZGFzaGFycmF5PSI1IDUiLz4KPHBhdGggZD0iTTEzNC4xNjcgOC41SDIwOS44MzMiIHN0cm9rZT0iIzhDNkE1RCIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8L3N2Zz4K"
            />
        </div>
      </Container>
    </section>
  );
}
