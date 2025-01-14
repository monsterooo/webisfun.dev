import { Nav } from "./nav";

export function Header() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="flex justify-between">
        <h1>webisfun.dev</h1>
        <div>
          <Nav />
        </div>
      </div>
    </section>
  );
}
