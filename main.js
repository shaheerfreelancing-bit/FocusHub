import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="dashboard" id="top">
  <div class="shooting-stars">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
  <div class="background-glow glow-one"></div>
  <div class="mouse-glow" id="mouseGlow"></div>
<div class="background-glow glow-two"></div>
<div class="background-glow glow-three"></div>
    <header class="header">
      <div class="logo">
        Focus<span>Hub</span>
      </div>

      <form class="search-form">
        <input
          type="text"
          placeholder="Search Google..."
          aria-label="Search Google"
        />

        <button type="submit">
          Search
        </button>
      </form>

      <button class="theme-button" aria-label="Change theme">
        🌙
      </button>
    </header>
    <section class="hero">
  <h1 id="greeting">Good Afternoon, Shaheer 👋</h1>

  <p class="subtitle">
    Stay focused. Build something amazing today.
  </p>
  <div class="clock">
    <h2 id="time">00:00:00</h2>
    <p id="date">Friday, July 17</p>
  </div>
</section>
<section class="goal-section">
  <div class="goal-card">
    <h3>🎯 Today's Goal</h3>

    <input
      type="text"
      id="dailyGoal"
      placeholder="What is your main goal today?"
    />
    <button id="completeGoalBtn">
  ✅ Complete Goal
</button>

<p id="goalMessage"></p>
  </div>
</section>


<section class="stats-section">

  <div class="stat-card">
    <h2 id="taskCount">0</h2>
    <p>Tasks</p>
  </div>

  <div class="stat-card">
    <h2 id="favoriteCount">0</h2>
    <p>Websites</p>
  </div>

  <div class="stat-card">
    <h2>25</h2>
    <p>Pomodoro</p>
  </div>

</section>
<section class="dashboard-grid">

<article class="card weather-card">
  <h3>
    <i data-lucide="cloud-sun"></i>
    Weather
  </h3>

  <div class="weather-main">
    <img id="weatherIcon" alt="Weather icon" />

    <div>
      <h2 id="temperature">--°C</h2>
      <p id="city">Loading...</p>
      <p id="condition">Please wait...</p>
    </div>
  </div>

  <div class="weather-details">
    <div>
      <span>Feels like</span>
      <strong id="feelsLike">--°C</strong>
    </div>

    <div>
      <span>Humidity</span>
      <strong id="humidity">--%</strong>
    </div>

    <div>
      <span>Wind</span>
      <strong id="windSpeed">-- km/h</strong>
    </div>
  </div>
</article>

<article class="card">
  <h3>
<i data-lucide="calendar-days"></i>
Calendar
</h3>

  <div class="calendar">
    <div class="calendar-header">
      <button id="prevMonth">&lt;</button>

      <h4 id="monthYear"></h4>

      <button id="nextMonth">&gt;</button>
    </div>

    <div class="weekdays">
      <span>Sun</span>
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
    </div>

    <div id="calendarDays" class="calendar-days"></div>
  </div>
</article>

  <article class="card">
  <h3>
<i data-lucide="notebook-pen"></i>
Quick Notes
</h3>
    <textarea placeholder="Write a quick note..."></textarea>
  </article>

  <article class="card pomodoro-card">
  <h3>
    <i data-lucide="timer"></i>
    Pomodoro Pro
  </h3>

  <div class="pomodoro-modes">
    <button
      type="button"
      class="mode-btn active"
      data-mode="focus"
    >
      Focus
    </button>

    <button
      type="button"
      class="mode-btn"
      data-mode="short"
    >
      Short Break
    </button>

    <button
      type="button"
      class="mode-btn"
      data-mode="long"
    >
      Long Break
    </button>
  </div>

  <div class="timer-display" id="timer">
    25:00
  </div>

  <p class="timer-status" id="timerStatus">
    Ready to focus
  </p>

  <div class="timer-buttons">
    <button type="button" id="startTimer">Start</button>
    <button type="button" id="pauseTimer">Pause</button>
    <button type="button" id="resetTimer">Reset</button>
  </div>

  <div class="session-counter">
    <span>Completed Sessions</span>
    <strong id="sessionCount">0</strong>
  </div>
</article>
 <article class="card favorite-card">
<h3>
<i data-lucide="globe"></i>
Favorite Websites
</h3>
  <form id="favoriteForm" class="favorite-form">
    <input
      type="text"
      id="websiteName"
      placeholder="Website name"
      required
    />

    <input
      type="text"
      id="websiteUrl"
      placeholder="Website URL"
      required
    />

    <button type="submit">Add Website</button>
  </form>

  <div id="favoriteList" class="favorite-list"></div>
</article>

 <article class="card">
<h3>
<i data-lucide="list-checks"></i>
Daily Tasks
</h3>
  <form id="taskForm" class="task-form">
    <input
      type="text"
      id="taskInput"
      placeholder="Enter a task..."
      required
    />

    <button type="submit">
      Add
    </button>
  </form>

  <div id="taskList" class="task-list"></div>
</article>

</section>
<footer class="footer">
  <div class="footer-brand">
    <h3>Focus<span>Hub</span></h3>
    <p>Built to help you stay focused, organized, and productive.</p>
  </div>

  <div class="footer-links">
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>

    <a href="#top">
      Back to top
    </a>
  </div>

  <p class="footer-copy">
    © 2026 FocusHub. Built by Shaheer Ahmed.
  </p>
</footer>
</main>
`;
function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  document.querySelector("#time").textContent = time;
  document.querySelector("#date").textContent = date;

  const hour = now.getHours();
  const greeting = document.querySelector("#greeting");

  if (hour < 12) {
    greeting.textContent = "Good Morning, Shaheer 👋";
  } else if (hour < 17) {
    greeting.textContent = "Good Afternoon, Shaheer 👋";
  } else {
    greeting.textContent = "Good Evening, Shaheer 👋";
  }
}

updateClock();
setInterval(updateClock, 1000);
const notesBox = document.querySelector(".card textarea");

notesBox.value = localStorage.getItem("focusHubNote") || "";

notesBox.addEventListener("input", () => {
  localStorage.setItem("focusHubNote", notesBox.value);
});
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form input");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === "") {
    searchInput.focus();
    return;
  }

  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(googleUrl, "_blank");

  searchInput.value = "";
});
const themeButton = document.querySelector(".theme-button");

const savedTheme = localStorage.getItem("focusHubTheme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLightMode = document.body.classList.contains("light-theme");

  themeButton.textContent = isLightMode ? "☀️" : "🌙";

  localStorage.setItem(
    "focusHubTheme",
    isLightMode ? "light" : "dark"
  );
});
let totalSeconds = 25 * 60;
let timerInterval = null;

const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#startTimer");
const pauseBtn = document.querySelector("#pauseTimer");
const resetBtn = document.querySelector("#resetTimer");

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timer.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (timerInterval) return;

  timerInterval = setInterval(() => {

    if (totalSeconds > 0) {

      totalSeconds--;
      updateTimer();

    } else {

      clearInterval(timerInterval);
      timerInterval = null;

      if (currentMode === "focus") {

        completedSessions++;

        localStorage.setItem(
          "focusHubSessions",
          completedSessions
        );

        sessionCount.textContent = completedSessions;

        alert("Focus Session Completed! 🎉");

      } else {

        alert("Break Completed!");

      }

    }

  }, 1000);

});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 25 * 60;
  updateTimer();
});

updateTimer();
const favoriteForm = document.querySelector("#favoriteForm");
const websiteNameInput = document.querySelector("#websiteName");
const websiteUrlInput = document.querySelector("#websiteUrl");
const favoriteList = document.querySelector("#favoriteList");

let favoriteWebsites =
  JSON.parse(localStorage.getItem("focusHubFavorites")) || [];

function normalizeUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }

  return url;
}

function saveFavorites() {
  localStorage.setItem(
    "focusHubFavorites",
    JSON.stringify(favoriteWebsites)
  );
}

function renderFavorites() {
  favoriteList.innerHTML = "";

  if (favoriteWebsites.length === 0) {
    favoriteList.innerHTML =
      '<p class="empty-message">No websites added yet.</p>';
    return;
  }

  favoriteWebsites.forEach((website, index) => {
    const item = document.createElement("div");
    item.className = "favorite-item";

    item.innerHTML = `
      <a
        href="${website.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${website.name}
      </a>

      <button type="button" data-index="${index}">
        Delete
      </button>
    `;

    favoriteList.appendChild(item);
  });
   document.querySelector("#favoriteCount").textContent =
  favoriteWebsites.length;}

favoriteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = websiteNameInput.value.trim();
  const url = normalizeUrl(websiteUrlInput.value.trim());

  if (!name || !url) {
    return;
  }

  favoriteWebsites.push({ name, url });

  saveFavorites();
  renderFavorites();

  favoriteForm.reset();
  websiteNameInput.focus();
});

favoriteList.addEventListener("click", (event) => {
  if (!event.target.matches("button[data-index]")) {
    return;
  }

  const index = Number(event.target.dataset.index);

  favoriteWebsites.splice(index, 1);

  saveFavorites();
  renderFavorites();
});

renderFavorites();
const monthYear = document.querySelector("#monthYear");
const calendarDays = document.querySelector("#calendarDays");
const prevMonthButton = document.querySelector("#prevMonth");
const nextMonthButton = document.querySelector("#nextMonth");

let calendarDate = new Date();

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  monthYear.textContent = calendarDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  calendarDays.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("empty-day");
    calendarDays.appendChild(emptyDay);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;

    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    if (isToday) {
      dayElement.classList.add("today");
    }

    calendarDays.appendChild(dayElement);
  }
}

prevMonthButton.addEventListener("click", () => {
  calendarDate.setMonth(calendarDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  calendarDate.setMonth(calendarDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
  lucide.createIcons();
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function loadWeather() {
  const cityName = "Karachi";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();

    document.querySelector("#temperature").textContent =
      `${Math.round(data.main.temp)}°C`;

    document.querySelector("#city").textContent = data.name;

    document.querySelector("#condition").textContent =
      data.weather[0].description;

    document.querySelector("#feelsLike").textContent =
      `${Math.round(data.main.feels_like)}°C`;

    document.querySelector("#humidity").textContent =
      `${data.main.humidity}%`;

    document.querySelector("#windSpeed").textContent =
      `${Math.round(data.wind.speed * 3.6)} km/h`;

    const iconCode = data.weather[0].icon;

    document.querySelector("#weatherIcon").src =
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  } catch (error) {
    document.querySelector("#city").textContent =
      "Weather unavailable";

    document.querySelector("#condition").textContent =
      "Please try again later.";
  }
}

loadWeather();

setInterval(loadWeather, 10 * 60 * 1000);
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("focusHubTasks")) || [];

function saveTasks() {
  localStorage.setItem("focusHubTasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const item = document.createElement("div");
    item.className = "task-item";

    item.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">
        ${task.text}
      </span>

      <div class="task-actions">
        <button class="complete-btn" data-index="${index}">
          ✓
        </button>

        <button class="delete-btn" data-index="${index}">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(item);
  });

  document.querySelector("#taskCount").textContent = tasks.length;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (!text) return;

  tasks.push({
    text,
    completed: false,
  });

  saveTasks();
  renderTasks();
  taskForm.reset();
});

taskList.addEventListener("click", (event) => {
  const index = Number(event.target.dataset.index);

  if (event.target.classList.contains("complete-btn")) {
    tasks[index].completed = !tasks[index].completed;
  }

  if (event.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
  }

  saveTasks();
  renderTasks();
});

renderTasks();
const modeButtons = document.querySelectorAll(".mode-btn");

const timerStatus = document.querySelector("#timerStatus");

const sessionCount = document.querySelector("#sessionCount");

const MODES = {
  focus: {
    time: 25 * 60,
    text: "Ready to focus"
  },

  short: {
    time: 5 * 60,
    text: "Take a short break"
  },

  long: {
    time: 15 * 60,
    text: "Take a long break"
  }
};

let currentMode = "focus";

modeButtons.forEach(button => {

  button.addEventListener("click", () => {

    modeButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    currentMode = button.dataset.mode;

    totalSeconds = MODES[currentMode].time;

    timerStatus.textContent =
      MODES[currentMode].text;

    updateTimer();

  });

});
let completedSessions =
  Number(localStorage.getItem("focusHubSessions")) || 0;

sessionCount.textContent = completedSessions;
const dailyGoalInput = document.querySelector("#dailyGoal");

dailyGoalInput.value =
  localStorage.getItem("focusHubDailyGoal") || "";

dailyGoalInput.addEventListener("input", () => {
  localStorage.setItem(
    "focusHubDailyGoal",
    dailyGoalInput.value
  );
});
const completeGoalBtn = document.querySelector("#completeGoalBtn");
const goalMessage = document.querySelector("#goalMessage");

completeGoalBtn.addEventListener("click", () => {

  if (dailyGoalInput.value.trim() === "") {
    goalMessage.textContent = "⚠️ Please enter your goal first.";
    goalMessage.style.color = "#f59e0b";
    return;
  }

  goalMessage.textContent = "🎉 Goal Completed! Keep going!";
  goalMessage.style.color = "#22c55e";

});
const mouseGlow = document.querySelector("#mouseGlow");

window.addEventListener("mousemove", (event) => {
  mouseGlow.style.left = `${event.clientX}px`;
  mouseGlow.style.top = `${event.clientY}px`;
});
window.addEventListener("mousemove",(e)=>{

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=e.clientX+"px";

particle.style.top=e.clientY+"px";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},800);

});
