
  // Bhargav M — Lab 11

  // ZIP Code Validation
  const zipInput = document.querySelector<HTMLInputElement>("#zip");
  const zipPattern = /^\d{5}$/;

  if (zipInput) {
    zipInput.addEventListener("input", function (): void {
      const isValidZip = zipPattern.test(zipInput.value);
      console.log("ZIP:", zipInput.value, "Valid:", isValidZip);
    });
  }

  // Lab 7 — Variables and Data Types
  console.log("TypeScript is connected");

  const studentName: string = "Ada";
  let labsCompleted: number = 6;
  const isEnrolled: boolean = false;

  labsCompleted++;
  console.log(`${studentName} has completed ${labsCompleted} labs.`);

  const count: number = 5;
  const total: string = `You have ${count} items`;
  console.log(total);

  // Lab 10 — Like Counter with localStorage
  const likeBtn = document.querySelector<HTMLButtonElement>("#like-btn");
  const likeCount = document.querySelector<HTMLElement>("#like-count");
  const likeMessage = document.querySelector<HTMLElement>("#like-message");

  const LikeCounter = {
    likes: Number(localStorage.getItem("likes")) || 0,

    increment(): void {
      this.likes = this.likes + 1;
      localStorage.setItem("likes", this.likes.toString());
      this.render();
    },

    render(): void {
      if (likeCount) {
        likeCount.textContent = `${this.likes} likes`;
      }

      if (likeMessage) {
        if (this.likes >= 10) {
          likeMessage.textContent = "Wow, thanks for all the likes!";
        } else if (this.likes >= 5) {
          likeMessage.textContent = "Glad you like it!";
        } else {
          likeMessage.textContent = "";
        }
      }
    }
  };

  LikeCounter.render();

  if (likeBtn) {
    likeBtn.addEventListener("click", function (): void {
      LikeCounter.increment();
    });
  }

  // Lab 10 — Dark Mode with localStorage
  const themeBtn = document.querySelector<HTMLButtonElement>("#theme-btn");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function (): void {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Lab 8 — Typed Arrays and Loops
  const goals: string[] = ["HTML", "CSS", "JavaScript", "Git"];
  const goalsList = document.querySelector<HTMLUListElement>("#goals-list");

  if (goalsList) {
    goals.forEach(function (goal: string): void {
      const item = document.createElement("li");
      item.textContent = goal;
      goalsList.appendChild(item);
    });
  }

  // Lab 9 — Promises
  function getGreetingAfterDelay(): Promise<string> {
    return new Promise<string>(function (resolve) {
      setTimeout(function (): void {
        resolve("Hello from the future!");
      }, 800);
    });
  }

  // Lab 9 — Async/Await
  async function showGreeting(): Promise<void> {
    const message: string = await getGreetingAfterDelay();
    console.log(message);
  }

  showGreeting();

  // Lab 11 — CatFact Interface
  interface CatFact {
    fact: string;
    length: number;
  }

  // Lab 9 — Fetching Real Data from API
  document.addEventListener("DOMContentLoaded", function (): void {
    const factBtn = document.querySelector<HTMLButtonElement>("#fact-btn");
    const factDisplay = document.querySelector<HTMLElement>("#fact-display");

    async function loadFact(): Promise<void> {
      if (!factDisplay) return;

      factDisplay.textContent = "Loading...";

      try {
        const response = await fetch("https://catfact.ninja/fact");

        if (!response.ok) {
          throw new Error("Server responded with an error");
        }

        const data = (await response.json()) as CatFact;
        factDisplay.textContent = data.fact;

      } catch (error: unknown) {
        factDisplay.textContent =
          "Couldn't load a fact right now. Try again.";

        console.error(error);
      }
    }

    if (factBtn && factDisplay) {
      factBtn.addEventListener("click", loadFact);
    }
  });

  // Lab 9 — Graduate Extension: Promise.all()
  async function compareFetchTiming(): Promise<void> {
    const url = "https://catfact.ninja/fact";

    console.time("sequential");

    const a = await (await fetch(url)).json();
    const b = await (await fetch(url)).json();

    console.timeEnd("sequential");

    console.time("concurrent");

    const [respA, respB] = await Promise.all([
      fetch(url),
      fetch(url)
    ]);

    const c = await respA.json();
    const d = await respB.json();

    console.timeEnd("concurrent");
  }

  compareFetchTiming().catch(console.error);

  // Lab 10 — Geolocation API
  const locationBtn = document.querySelector<HTMLButtonElement>("#location-btn");
  const locationDisplay = document.querySelector<HTMLElement>("#location-display");

  if (locationBtn && locationDisplay) {
    locationBtn.addEventListener("click", function (): void {
      if (!("geolocation" in navigator)) {
        locationDisplay.textContent = "Geolocation isn't supported.";
        return;
      }

      navigator.geolocation.getCurrentPosition(
        function (position: GeolocationPosition): void {
          const lat = position.coords.latitude.toFixed(2);
          const lon = position.coords.longitude.toFixed(2);

          locationDisplay.textContent = `You're near ${lat}, ${lon}`;
        },

        function (error: GeolocationPositionError): void {
          locationDisplay.textContent = "Location access was denied.";
          console.warn(error);
        }
      );
    });
  } else {
    console.warn("Location elements not found on this page.");
  }
