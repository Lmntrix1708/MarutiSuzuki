/* =========================================================
   Maruti SuperApp – JS logic
   ========================================================= */

/* ---------- Global State ---------- */
const appState = {
  navStack: [],
  currentTab: "home",
  serviceActive: false,
  serviceStage: 0,
  tripHistory: [],
};

/* ---------- Utility ---------- */
function showToast(msg, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* ---------- Tabs ---------- */
function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.querySelector(`[data-tab='${tabId}']`).classList.add("active");
  appState.currentTab = tabId;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Subpage Navigation ---------- */
function openPage(id) {
  const active = document.querySelector(".subpage.active");
  if (active) active.classList.remove("active");

  const page = document.getElementById(id);
  if (!page) {
    showToast("Coming soon", "info");
    return;
  }

  page.classList.add("active");
  page.setAttribute("aria-hidden", "false");
  appState.navStack.push(id);

  // Overlay mode ON
  document.body.classList.add("overlay-open");

  if (id === "tripsPage") renderTrips();
  if (id === "docVaultPage") renderDocVaultPage();
  if (id === "geofencePage") syncGeofenceUI();
  if (id === "valetPage") syncValetUI();
}

function closePage() {
  const current = appState.navStack.pop();
  if (!current) return;
  const page = document.getElementById(current);
  if (page) {
    page.classList.remove("active");
    page.setAttribute("aria-hidden", "true");
  }
  const prev = appState.navStack[appState.navStack.length - 1];
  if (prev) {
    const prevPage = document.getElementById(prev);
    if (prevPage) {
      prevPage.classList.add("active");
      prevPage.setAttribute("aria-hidden", "false");
    }
  } else {
    // Overlay mode OFF
    document.body.classList.remove("overlay-open");
  }
}

/* ---------- Service Tracker ---------- */
function simulateNewService() {
  if (appState.serviceActive) return showToast("Job already active", "warning");
  appState.serviceActive = true;
  appState.serviceStage = 1;
  updateServiceTimeline();
  showToast("Service started", "success");
  simulateProgress();
}

function simulateProgress() {
  const stages = 5;
  const stepInterval = 2500;
  let stage = 1;

  const timer = setInterval(() => {
    stage++;
    appState.serviceStage = stage;
    updateServiceTimeline();
    if (stage >= stages) {
      clearInterval(timer);
      appState.serviceActive = false;
      showToast("Service completed!", "success");
    }
  }, stepInterval);
}

function updateServiceTimeline() {
  const timeline = document.querySelector(".service-timeline");
  if (!timeline) return;
  const items = timeline.querySelectorAll("li");
  items.forEach((li, i) => {
    li.classList.toggle("active", i < appState.serviceStage);
  });
  const header = document.querySelector(".service-live-header .live-chip");
  if (header)
    header.textContent = appState.serviceActive
      ? "In progress..."
      : "No active job";
}

/* ---------- Estimator ---------- */
function openEstimateModal() {
  const modal = document.getElementById("estimateModal");
  if (!modal) return;
  modal.classList.add("active");
}

function approveEstimate() {
  showToast("Estimate approved", "success");
  closePage();
}

/* ---------- Doc Vault ---------- */
function renderDocVaultPage() {
  const container = document.querySelector("#docVaultPage .docvault-grid");
  if (!container) return;
  container.innerHTML = `
    <div class="doc-card"><span class="doc-icon">📄</span><div class="doc-meta"><h4>RC Book</h4><p>UP14 XX 1234</p></div></div>
    <div class="doc-card"><span class="doc-icon">💳</span><div class="doc-meta"><h4>Insurance</h4><p>Expires Jun 2025</p></div></div>
    <div class="doc-card"><span class="doc-icon">🧾</span><div class="doc-meta"><h4>PUC Certificate</h4><p>Valid till Oct 2025</p></div></div>
    <div class="doc-card"><span class="doc-icon">🪪</span><div class="doc-meta"><h4>Driver’s License</h4><p>DL–14–2022–5678</p></div></div>
  `;
}

/* ---------- Trips ---------- */
function renderTrips() {
  const container = document.querySelector("#tripsPage .trip-list");
  if (!container) return;
  container.innerHTML = "";
  const trips = [
    { date: "Oct 1", route: "Noida → Gurgaon", km: 34, time: "52m" },
    { date: "Oct 3", route: "Gurgaon → Delhi", km: 28, time: "47m" },
    { date: "Oct 5", route: "Delhi → Noida", km: 32, time: "56m" },
  ];
  trips.forEach(t => {
    const el = document.createElement("div");
    el.className = "trip-item";
    el.innerHTML = `<span>${t.route}</span><span class="trip-meta">${t.km} km • ${t.time}</span>`;
    container.appendChild(el);
  });
}

/* ---------- Geofence / Valet (stubs) ---------- */
function syncGeofenceUI() {
  const area = document.querySelector("#geofencePage .geo-status");
  if (area) area.textContent = "Active zone: Home radius 1 km";
}
function syncValetUI() {
  const area = document.querySelector("#valetPage .valet-status");
  if (area) area.textContent = "Valet mode: OFF";
}

/* ---------- Chatbot ---------- */
const chatbotFAB = document.querySelector(".chatbot-fab");
const chatbotPanel = document.querySelector(".chatbot-panel");

if (chatbotFAB) {
  chatbotFAB.addEventListener("click", () => {
    chatbotPanel.classList.toggle("open");
  });
}

function sendChatMessage() {
  const input = document.querySelector(".chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  addMessage(msg, "user");
  input.value = "";
  setTimeout(() => addBotReply(msg), 600);
}

function addMessage(text, role = "bot") {
  const msgBox = document.createElement("div");
  msgBox.className = `message ${role}`;
  msgBox.innerHTML = `
    ${role === "bot" ? '<div class="message-avatar">🤖</div>' : ""}
    <div class="message-content">
      <div class="message-bubble">${text}</div>
      <div class="message-time">${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}</div>
    </div>
    ${role === "user" ? '<div class="message-avatar">👤</div>' : ""}
  `;
  document.querySelector(".chat-messages").appendChild(msgBox);
  const messages = document.querySelector(".chat-messages");
  messages.scrollTop = messages.scrollHeight;
}

function addBotReply(userMsg) {
  let reply = "I can help with your service or insurance queries!";
  if (userMsg.toLowerCase().includes("service"))
    reply = "You can book or track your service under the Services tab.";
  if (userMsg.toLowerCase().includes("insurance"))
    reply = "Your insurance is due in 45 days — you can renew from the Compliance Hub.";
  addMessage(reply, "bot");
}

/* ---------- Misc ---------- */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", e => switchTab(e.target.dataset.tab));
});
document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", closePage);
});
document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", e => openPage(e.target.dataset.open));
});

/* ---------- Init ---------- */
window.addEventListener("DOMContentLoaded", () => {
  updateServiceTimeline();
  switchTab("home");
  console.log("Maruti SuperApp loaded");
});
