export const site = {
  name: "Ashish Patel",
  title: "Software Developer",
  tagline:
    "Building games and applications with Python, Unity, and modern web technologies.",
  email: "ashishpatel626@gmail.com",
  resumeUrl: "/resume.pdf",
  links: [
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: "resume",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:ashishpatel626@gmail.com",
      icon: "email",
      external: false,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashishpatel626/",
      icon: "linkedin",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/ashishpatel626",
      icon: "github",
      external: true,
    },
  ],
  skills: [
    "Co Pilot",
    "Claude AI",
    "Python",
    "C#",
    "Unity",
    "Pygame",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Object-Oriented Design",
  ],
  projects: [
    {
      title: "Asteroid Pygame",
      image: "/images/Asteroid_pygame.png",
      href: "https://github.com/ashishpatel626/Asteroid_pygame",
      tags: ["Python", "Pygame", "OOP"],
      description:
        "An Asteroid-style arcade game built with Pygame, applying object-oriented programming, callback functions, and modular code organization. Inspired by a Real Python tutorial on sprite management, collision detection, and game loop mechanics. Code is split across __main__.py, game.py, utils.py, and models.py.",
      tutorialUrl: "https://realpython.com/asteroids-game-python/",
    },
    {
      title: "Resilience Unity Game",
      image: "/images/Resilience.png",
      href: "https://www.sungrazerstudio.com/",
      tags: ["Unity", "C#", "Team Project"],
      description:
        "A socially conscious city-builder developed during senior year using Unity. Contributed to a refugee camp management simulation with event-driven architecture and large-scale project management alongside a team of 15 students.",
    },
  ],
} as const;