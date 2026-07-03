export default function Hero() {
  const navItems = ["Projects", "Skills", "Experience", "Socials"];
  const activeItem = "Projects";
  const projectDescriptions = [
    "View completed applications, recent infrastructure projects, and open-source repositories.",
    "Project 2: A mobile app that helps users find nearby restaurants and read reviews.",
    "Project 3: An e-commerce platform that enables users to buy and sell products online.",
    "Project 4: A social media platform that connects people with similar interests.",
  ];

  return (
    <div className="flex h-dvh w-full overflow-hidden">
      {/* Sidebar */}
      <aside className="relative z-20 flex h-full w-[40%] flex-col justify-center bg-sidebar py-24">
        <div>
          {/* Top Header / Title */}
          <h2 className="pl-8 font-edo-sz text-5xl tracking-widest text-muted-foreground uppercase">
            Menu
          </h2>

          {/* Divider */}
          <div className="my-6 h-0.5 w-full bg-divider" />

          {/* Navigation Items */}
          <nav className="flex flex-col gap-8 font-edo-sz text-foreground">
            {navItems.map((item) => {
              const isActive = item === activeItem;

              return (
                <button
                  key={item}
                  className={`w-full pt-2 pb-4 pl-16 text-left text-6xl ${
                    isActive ? "relative bg-menu-select" : ""
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>

        <div>
          {/* Divider */}
          <div className="my-6 h-0.5 w-full bg-divider" />
          {/* Description */}
          <p className="w-full px-16 font-montserrat text-2xl tracking-widest text-muted-foreground">
            {projectDescriptions[navItems.indexOf(activeItem)]}{" "}
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative flex h-full w-[60%] flex-col items-center justify-center bg-zinc-950">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url('/images/Dragon.png')` }}
        />

        {/* Title Content */}
        <div className="z-10 text-center">
          <h1 className="font-edo-sz text-8xl tracking-widest text-foreground">
            Verzional
          </h1>
          <p className="mt-4 font-montserrat text-4xl font-bold tracking-[0.5em] text-primary-foreground uppercase">
            Full-Stack Engineer
          </p>
        </div>
      </main>
    </div>
  );
}
