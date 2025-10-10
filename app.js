/* =========================================================
   Maruti SuperApp — Mock
   Full JS: navigation, pages, widgets, and mock logic
   ========================================================= */

// ------- Seed Data (same user/vehicles, extended where helpful)
const appData = {
  user: {
    name: "Soham Mehta",
    email: "soham.mehta2k@gmail.com",
    location: "Ghaziabad",
    membershipTier: "Silver",
    loyaltyPoints: 2450,
    profilePicture: "SM",
    currentVehicle: {
      model: "Swift VXI",
      year: 2023,
      regNumber: "UP 14 XX 1234",
      fuelLevel: 75,
      batteryLevel: 89,
      isLocked: true
    }
  },
  vehicles: [
    { id: 1, name: "Swift VXI", category: "Arena", price: "₹7.04L", mileage: "22.4 kmpl", image: "🚗", rating: 4.5, engine: "1197cc", transmission: "Manual/AMT" },
    { id: 2, name: "Brezza", category: "Arena", price: "₹8.29L", mileage: "20.1 kmpl", image: "🚙", rating: 4.6, engine: "1462cc", transmission: "Manual/AT" },
    { id: 3, name: "Fronx", category: "Nexa", price: "₹7.51L", mileage: "22.8 kmpl", image: "🚘", rating: 4.3, engine: "1197cc/998cc Turbo", transmission: "Manual/AMT/AT" },
    { id: 4, name: "Grand Vitara", category: "Nexa", price: "₹10.77L", mileage: "21.1 kmpl", image: "🚗", rating: 4.4, engine: "1462cc", transmission: "Manual/AT/Hybrid" }
  ],
  notifications: [
    { title: "Service Reminder", message: "Your Swift service is due in 15 days", time: "2 hours ago", type: "service" },
    { title: "Special Offer", message: "Get ₹25,000 extra on trade-in this month", time: "1 day ago", type: "offer" }
  ],
  serviceHistory: [
    { date: "2025-08-12", details: "Periodic Service 10,000 km", outlet: "Nexa Service, Raj Nagar", amount: "₹3,250" },
    { date: "2025-05-04", details: "Tyre Rotation + Wheel Alignment", outlet: "Arena Service, Kaushambi", amount: "₹1,200" },
    { date: "2025-01-22", details: "Periodic Service 5,000 km", outlet: "Nexa Service, Raj Nagar", amount: "₹2,850" }
  ],
  mediaStations: [
    { name: "Mirchi FM 98.3", type: "FM" },
    { name: "Red FM 93.5", type: "FM" },
    { name: "Spotify - Road Trip", type: "Playlist" }
  ],
  chatbotQuickReplies: [
    "Book my service","Car insurance status","Find nearest fuel station",
    "Remote lock the car","Show my loyalty points","How's my driving score?"
  ]
};

// ------- App + Feature State
let appState = {
  currentTab: "homeTab",
  vehicleStatus: { fuelLevel: 75, batteryLevel: 89, isLocked: true, engineRunning: false, climateOn: false },
  mediaPlayer: { isPlaying: false, currentTrack: "Radio Mirchi FM", volume: 65 },
  chatbot: { isOpen: false, messages: [], isTyping: false, hasNewMessages: false },
  navStack: [] // holds subpage ids for back navigation
};

let featureState = {
  compliance: { pucc: { status: "Due in 12 days" }, insurance: { status: "Due in 45 days" }, challan: { status: "No dues" } },
  serviceJob: { active: false, step: null },  // pickup -> inworkshop -> estimate -> qc -> delivery
  trips: [
    { id: 1, date: "2025-10-05", from: "Ghaziabad", to: "Noida", km: 21.4, fe: 18.5 },
    { id: 2, date: "2025-10-06", from: "Noida", to: "Delhi", km: 32.1, fe: 17.2 },
    { id: 3, date: "2025-10-08", from: "Office", to: "Home", km: 14.8, fe: 19.1 }
  ],
  geofence: null,
  valet: false
};

// ------- Cached Elements
let elements = {};

// ------- Lifecycle
document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setupEventListeners();
  initializeUI();
  startRealTimeUpdates();
});

// ------- Cache Elements
function cacheElements() {
  elements.tabBtns = document.querySelectorAll(".tab-btn");
  elements.tabContents = document.querySelectorAll(".tab-content");
  elements.currentTime = document.getElementById("currentTime");
  elements.notificationBtn = document.getElementById("notificationBtn");
  elements.menuBtn = document.getElementById("menuBtn");

  // Home
  elements.quickActions = document.getElementById("quickActions");
  elements.fuelLevel = document.getElementById("fuelLevel");
  elements.batteryLevel = document.getElementById("batteryLevel");
  elements.lockStatus = document.getElementById("lockStatus");
  elements.serviceHistoryList = document.getElementById("serviceHistory");

  // Connect
  elements.lockBtn = document.getElementById("lockBtn");
  elements.engineBtn = document.getElementById("engineBtn");
  elements.acBtn = document.getElementById("acBtn");
  elements.locateBtn = document.getElementById("locateBtn");
  elements.mediaToggleBtn = document.getElementById("mediaToggleBtn");

  // Chatbot
  elements.chatbotPanel = document.getElementById("chatbotPanel");
  elements.chatbotToggle = document.getElementById("chatbotToggle");
  elements.chatMessages = document.getElementById("chatMessages");
  elements.chatInput = document.getElementById("chatInput");
  elements.sendButton = document.getElementById("sendButton");
  elements.quickReplies = document.getElementById("quickReplies");
  elements.chatNotificationDot = document.getElementById("chatNotificationDot");

  // Subpages container
  elements.subpages = document.querySelectorAll(".subpage");
}

// ------- Event Listeners
function setupEventListeners() {
  elements.tabBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
  });

  elements.notificationBtn?.addEventListener("click", showNotifications);
  elements.menuBtn?.addEventListener("click", showMenu);

  elements.lockBtn?.addEventListener("click", toggleLock);
  elements.engineBtn?.addEventListener("click", startEngine);
  elements.acBtn?.addEventListener("click", toggleAC);
  elements.mediaToggleBtn?.addEventListener("click", togglePlayback);

  elements.chatbotToggle?.addEventListener("click", openChatbot);
  elements.sendButton?.addEventListener("click", sendMessage);
  elements.chatInput?.addEventListener("input", handleChatInput);
  elements.chatInput?.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  // Keyboard back support on subpages (Esc == back)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && appState.navStack.length) closePage();
  });

  // Handle secondary media toggle in SmartPlay page when it exists (delegated)
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "mediaToggleBtn2") {
      togglePlayback();
    }
  });
}

// ------- Initial UI
function initializeUI() {
  updateClock();
  renderQuickActions();
  renderVehicleStatus();
  renderServiceHistory();
  renderVehicles();
  initChatbot();
  renderCompliance();
  renderTrips();
  renderDocVault();
  updateServiceTimeline();
  addTouchFeedback();
  showToast(`Welcome back, ${appData.user.name}!`, "success");
}

// ------- Clock
function updateClock() {
  if (elements.currentTime) {
    const now = new Date();
    elements.currentTime.textContent = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  }
  setTimeout(updateClock, 30000);
}

// ------- Tabs
function switchTab(tabId) {
  elements.tabBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
  elements.tabContents.forEach(sec => {
    sec.classList.toggle("active", sec.id === tabId);
  });
  appState.currentTab = tabId;
}

// ------- Toast
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

// ------- Quick Actions
function renderQuickActions() {
  if (!elements.quickActions) return;
  const actions = [
    { id: "bookService", label: "Book Service", icon: "🛠️", page: "serviceBookingPage" },
    { id: "toggleLock", label: "Remote Lock", icon: "🔐", action: "toggleLock" },
    { id: "findDealer", label: "Find Dealer", icon: "📍", page: "dealerLocatorPage" },
    { id: "arShowroom", label: "AR Showroom", icon: "📱", page: "arShowroomPage" },
    { id: "fuelPrices", label: "Fuel Prices", icon: "⛽", page: "liveMapPage" },
    { id: "insurance", label: "Insurance", icon: "🛡️", page: "insurancePage" },
    { id: "rsa", label: "Roadside Help", icon: "🚨", page: "rsaPage" },
    { id: "tradeIn", label: "Trade-in", icon: "♻️", page: "trueValueSellPage" }
  ];
  elements.quickActions.innerHTML = actions.map(a => `
    <button class="quick-action" onclick="${a.page ? `openPage('${a.page}')` : a.action ? `${a.action}()` : "showToast('Coming soon','info)"}"}">
      <span class="qa-icon">${a.icon}</span><span>${a.label}</span>
    </button>
  `).join("");
}

// ------- Vehicle Card
function renderVehicleStatus() {
  const vs = appState.vehicleStatus;
  if (elements.fuelLevel) elements.fuelLevel.textContent = `${vs.fuelLevel}%`;
  if (elements.batteryLevel) elements.batteryLevel.textContent = `${vs.batteryLevel}%`;
  if (elements.lockStatus) elements.lockStatus.textContent = vs.isLocked ? "Locked" : "Unlocked";
}

// ------- Service History
function renderServiceHistory() {
  if (!elements.serviceHistoryList) return;
  elements.serviceHistoryList.innerHTML = appData.serviceHistory.map(i => `
    <div class="service-item">
      <div>
        <div class="service-date">${i.date}</div>
        <div class="service-details">${i.details}</div>
        <div class="service-outlet">${i.outlet}</div>
      </div>
      <div class="service-amount">${i.amount}</div>
    </div>
  `).join("");
}

// ------- Vehicles List (Cars tab)
function renderVehicles() {
  const container = document.getElementById("vehiclesContainer");
  if (!container) return;
  container.innerHTML = appData.vehicles.map(v => `
    <div class="vehicle-card">
      <div class="vehicle-img">${v.image}</div>
      <div class="vehicle-info">
        <div class="vehicle-title">${v.name} <span class="vehicle-badge">${v.category}</span></div>
        <div class="vehicle-meta"><span>${v.price}</span> • <span>${v.mileage}</span></div>
        <div class="vehicle-specs"><span>${v.engine}</span> • <span>${v.transmission}</span></div>
        <div class="vehicle-actions">
          <button class="btn btn--primary" onclick="openPage('configuratorPage')">Configure</button>
          <button class="btn btn--secondary" onclick="openPage('arShowroomPage')">View in AR</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ========================================================
// Subpage Navigation
// ========================================================
function openPage(id) {
  // Close active subpage if any
  const active = document.querySelector(".subpage.active");
  if (active) {
    active.classList.remove("active");
  }
  const page = document.getElementById(id);
  if (!page) return;

  page.classList.add("active");
  page.setAttribute("aria-hidden", "false");
  appState.navStack.push(id);

  // Sync immediate page-specific UI
  if (id === "tripsPage") renderTrips();            // list trips
  if (id === "docVaultPage") renderDocVaultPage();  // full doc list
  if (id === "geofencePage") syncGeofenceUI();      // copy status text
  if (id === "valetPage") syncValetUI();            // copy status text
}

function closePage() {
  const current = appState.navStack.pop();
  if (!current) return;
  const page = document.getElementById(current);
  if (page) {
    page.classList.remove("active");
    page.setAttribute("aria-hidden", "true");
  }
  // Focus stays in main app; if there is a previous subpage, re-open it
  const prev = appState.navStack[appState.navStack.length - 1];
  if (prev) {
    const prevPage = document.getElementById(prev);
    if (prevPage) {
      prevPage.classList.add("active");
      prevPage.setAttribute("aria-hidden", "false");
    }
  }
}

// Toggle sections in Insurance page chips
function showSection(id) {
  const blocks = ["insRenew", "insQuotes", "insClaims"];
  blocks.forEach(b => {
    const el = document.getElementById(b);
    if (el) el.classList.toggle("hidden", b !== id);
  });
}

// ========================================================
// Compliance Hub
// ========================================================
function renderCompliance() {
  const puccEl = document.querySelector("#comp-pucc .comp-status");
  const insEl  = document.querySelector("#comp-insurance .comp-status");
  const chalEl = document.querySelector("#comp-challan .comp-status");
  if (puccEl) puccEl.textContent = featureState.compliance.pucc.status;
  if (insEl)  insEl.textContent  = featureState.compliance.insurance.status;
  if (chalEl) chalEl.textContent = featureState.compliance.challan.status;
}

function openPUCC() {
  showToast("Opening PUCC renewal…", "info");
  openPage("puccPage");
}
function renewInsurance() {
  showToast("Opening Insurance…", "info");
  openPage("insurancePage");
}
function openChallan() {
  showToast("Opening Challan…", "info");
  openPage("challanPage");
}

// ========================================================
// Service Live Tracker
// ========================================================
function updateServiceTimeline() {
  const steps = ["pickup", "inworkshop", "estimate", "qc", "delivery"];
  const tl = document.getElementById("serviceTimeline");
  const chip = document.getElementById("svcLiveChip");
  if (!tl || !chip) return;

  tl.querySelectorAll("li").forEach(li => li.classList.remove("active"));

  if (!featureState.serviceJob.active) {
    chip.textContent = "No active job";
    return;
  }
  chip.textContent = `Active • ${featureState.serviceJob.step}`;
  const idx = steps.indexOf(featureState.serviceJob.step);
  steps.slice(0, idx + 1).forEach(step => {
    tl.querySelector(`li[data-step="${step}"]`)?.classList.add("active");
  });
}

function mockStartService() {
  featureState.serviceJob = { active: true, step: "pickup" };
  updateServiceTimeline();
  showToast("Pickup scheduled for 10:00 AM", "success");

  const seq = ["inworkshop", "estimate", "qc", "delivery"];
  let i = 0;
  const t = setInterval(() => {
    featureState.serviceJob.step = seq[i++];
    updateServiceTimeline();
    if (featureState.serviceJob.step === "estimate") openEstimateModal();
    if (i === seq.length) {
      clearInterval(t);
      setTimeout(() => {
        featureState.serviceJob.active = false;
        updateServiceTimeline();
        showToast("Vehicle delivered ✅", "success");
      }, 3000);
    }
  }, 4000);
}

function openEstimateModal() {
  const html = `
    <div class="estimate-panel">
      <h3>Estimate Approval</h3>
      <div class="est-list">
        <div class="est-item"><span>Engine Oil + Filter</span><b>₹1,650</b></div>
        <div class="est-item"><span>Air Filter</span><b>₹420</b></div>
        <div class="est-item"><span>Wheel Balancing/Alignment</span><b>₹900</b></div>
        <div class="est-item optional">
          <label><input type="checkbox" id="addCabinFilter" checked> Cabin Filter</label><b>₹350</b>
        </div>
      </div>
      <div class="est-total">Estimated Total <b id="estTotal">₹3,320</b></div>
      <div class="est-actions">
        <button class="btn btn--secondary" onclick="hideModal()">Request Call</button>
        <button class="btn btn--primary" onclick="approveEstimate()">Approve</button>
      </div>
    </div>`;
  showModal(html);
  setTimeout(() => {
    const cb = document.getElementById("addCabinFilter");
    if (cb) cb.addEventListener("change", () => {
      document.getElementById("estTotal").textContent = cb.checked ? "₹3,320" : "₹2,970";
    });
  }, 50);
}

function approveEstimate() {
  hideModal();
  showToast("Estimate approved", "success");
  featureState.serviceJob.step = "qc";
  updateServiceTimeline();
}

// ========================================================
// Connect – Map / Trips / Geofence / Valet
// ========================================================
function refreshLiveMap() { showToast("Map refreshed (mock GPS)", "info"); }
function shareLiveLocation() { showToast("Live location shared for 30 min", "success"); }

function renderTrips() {
  const list = document.getElementById("tripsList");
  if (!list) return;
  list.innerHTML = featureState.trips.map(t => `
    <div class="trip-item">
      <div>
        <div><b>${t.from}</b> → <b>${t.to}</b></div>
        <div class="trip-meta">${t.date} • ${t.km} km • ${t.fe} kmpl</div>
      </div>
      <button class="btn btn--outline btn--sm" onclick="openTrip(${t.id})">Details</button>
    </div>
  `).join("");
}

function openTrip(id) {
  const t = featureState.trips.find(x => x.id === id);
  if (!t) return;
  showModal(`<div><h3>Trip Details</h3><p>${t.date}</p><p>${t.from} → ${t.to}</p><p>${t.km} km • ${t.fe} kmpl</p></div>`);
}

function exportTrips() {
  const header = "id,date,from,to,km,kmpl\n";
  const rows = featureState.trips
    .map(t => `${t.id},${t.date},${t.from},${t.to},${t.km},${t.fe}`)
    .join("\n");
  const csv = header + rows;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "trips.csv"; a.click();
  URL.revokeObjectURL(url);
}

function createGeofence() {
  // From geofence page field if present
  const input = document.getElementById("gfRadius");
  const radius = input ? Number(input.value || 2) : Number(prompt("Enter radius (km)", "2"));
  if (!radius) return;

  featureState.geofence = { radiusKm: radius, center: "Current Location" };
  const statusConn = document.getElementById("geofenceStatus");
  const statusPage = document.getElementById("geofenceStatusPage");
  if (statusConn) statusConn.textContent = `${radius} km around Current`;
  if (statusPage) statusPage.textContent = `${radius} km around Current`;
  showToast("Geofence created", "success");
}
function syncGeofenceUI() {
  const statusPage = document.getElementById("geofenceStatusPage");
  if (!statusPage) return;
  statusPage.textContent = featureState.geofence ? `${featureState.geofence.radiusKm} km around Current` : "None";
}

function toggleValet() {
  featureState.valet = !featureState.valet;
  const text = featureState.valet ? "On (speed 40 km/h, 3 km radius)" : "Off";
  const el1 = document.getElementById("valetStatus");
  const el2 = document.getElementById("valetStatusPage");
  if (el1) el1.textContent = text;
  if (el2) el2.textContent = featureState.valet ? "On" : "Off";
  showToast(`Valet ${featureState.valet ? "enabled" : "disabled"}`, "info");
}
function syncValetUI() {
  const el2 = document.getElementById("valetStatusPage");
  if (el2) el2.textContent = featureState.valet ? "On" : "Off";
}

// ========================================================
// Services – Estimator
// ========================================================
function calcEstimate() {
  const model = document.getElementById("estModel")?.value || "Swift VXI";
  const km = Number(document.getElementById("estKm")?.value || 0);
  const city = document.getElementById("estCity")?.value || "Ghaziabad";
  const base = /Alto/.test(model) ? 1800 : /Swift/.test(model) ? 2200 : /Brezza/.test(model) ? 2800 : 3200;
  const wear = km > 20000 ? 900 : km > 10000 ? 600 : 350;
  const cityAdj = { Ghaziabad: 1.0, Delhi: 1.05, Mumbai: 1.08, Bengaluru: 1.06 }[city] || 1.0;
  const total = Math.round((base + wear) * cityAdj);
  const result = document.getElementById("estResult");
  if (result) result.innerHTML = `Estimated periodic service in <b>${city}</b> for <b>${model}</b>: <b>₹${total.toLocaleString("en-IN")}</b><br><small>Includes parts + labour + GST (mock)</small>`;
}

// ========================================================
// Document Vault (Profile & Page)
// ========================================================
function renderDocVault() {
  const grid = document.getElementById("docGrid");
  if (!grid) return;
  const docs = getDocList();
  grid.innerHTML = docs.map(docCard).join("");
}
function renderDocVaultPage() {
  const grid = document.getElementById("docGridPage");
  if (!grid) return;
  grid.innerHTML = getDocList(true).map(docCard).join("");
}
function getDocList(withExtra = false) {
  const base = [
    { icon: "🪪", title: "Driving License", status: "Valid till 2030" },
    { icon: "📘", title: "RC", status: "UP14 • Swift VXI" },
    { icon: "🛡️", title: "Insurance", status: "Expires Jun 2025" }
  ];
  if (withExtra) base.push({ icon: "🧪", title: "PUCC", status: "Due in 12 days" });
  return base;
}
function docCard(d) {
  return `
    <div class="doc-card">
      <div class="doc-icon">${d.icon}</div>
      <div class="doc-meta"><h4>${d.title}</h4><p>${d.status}</p></div>
      <button class="btn btn--outline btn--sm" onclick="showToast('${d.title} opened','info')">Open</button>
    </div>
  `;
}
function syncDigiLocker() { showToast("DigiLocker connected (mock OAuth)", "success"); }

// ========================================================
// Chatbot (lightweight mock)
// ========================================================
function initChatbot() {
  appState.chatbot.messages = [
    { sender: "ai", message: "Hi Soham! I'm your AI assistant. How can I help you today?", timestamp: new Date().toISOString() }
  ];
  renderChatMessages();
  renderQuickReplies();
  // Make FAB draggable on touch devices
  const fab = document.querySelector(".chatbot-fab");
  if (fab) makeDraggable(fab);
}
function openChatbot() {
  appState.chatbot.isOpen = true;
  elements.chatbotPanel?.classList.add("open");
  renderChatMessages();
  elements.chatNotificationDot.style.display = "none";
  appState.chatbot.hasNewMessages = false;
  elements.chatInput?.focus();
}
function closeChatbot() {
  appState.chatbot.isOpen = false;
  elements.chatbotPanel?.classList.remove("open");
}
function renderQuickReplies() {
  if (!elements.quickReplies) return;
  const q = appData.chatbotQuickReplies;
  elements.quickReplies.innerHTML = q.map(txt => `<button class="chip" onclick="sendQuickReply('${txt.replace(/'/g,"\\'")}')">${txt}</button>`).join("");
}
function sendQuickReply(text) {
  elements.chatInput.value = text;
  sendMessage();
}
function handleChatInput() {
  const hasText = elements.chatInput.value.trim().length > 0;
  elements.sendButton.disabled = !hasText;
}
elements.sendButton && (elements.sendButton.disabled = true);

function sendMessage() {
  const text = elements.chatInput.value.trim();
  if (!text) return;
  addMessage("user", text);
  elements.chatInput.value = "";
  elements.sendButton.disabled = true;

  appState.chatbot.isTyping = true;
  setTimeout(() => {
    const response = generateAIResponse(text);
    addMessage("ai", response);
    appState.chatbot.isTyping = false;
    renderChatMessages();
  }, 800);
}
function addMessage(sender, message) {
  const timestamp = new Date().toISOString();
  appState.chatbot.messages.push({ sender, message, timestamp });
  renderChatMessages();
  if (!appState.chatbot.isOpen && sender === "ai") {
    appState.chatbot.hasNewMessages = true;
    elements.chatNotificationDot.style.display = "block";
  }
}
function renderChatMessages() {
  if (!elements.chatMessages) return;
  const html = appState.chatbot.messages.map(msg => {
    const time = new Date(msg.timestamp).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
    const avatar = msg.sender === "ai" ? "🤖" : appData.user.profilePicture;
    return `
      <div class="message ${msg.sender}">
        ${msg.sender === "ai" ? `<div class="message-avatar">${avatar}</div>` : ""}
        <div class="message-content">
          <div class="message-bubble">${formatMessage(msg.message)}</div>
          <div class="message-time">${time}</div>
        </div>
        ${msg.sender === "user" ? `<div class="message-avatar">${avatar}</div>` : ""}
      </div>
    `;
  }).join("");
  const typing = appState.chatbot.isTyping ? `
    <div class="message ai">
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        <div class="message-bubble typing"><span></span><span></span><span></span></div>
        <div class="message-time">typing…</div>
      </div>
    </div>` : "";
  elements.chatMessages.innerHTML = html + typing;
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}
function formatMessage(message) {
  return message.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
}
function generateAIResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes("service")) return "I can book a service.\n\nAvailable slots:\n• Sat 10:00 AM (low traffic)\n• Sat 12:30 PM\n• Sun 11:00 AM\n\nReply with preferred slot.";
  if (m.includes("status") || m.includes("lock") || m.includes("fuel")) {
    const lock = appState.vehicleStatus.isLocked ? "Locked" : "Unlocked";
    return `Car status:\n🔐 ${lock}\n⛽ Fuel: ${appState.vehicleStatus.fuelLevel}%\n🔋 Battery: ${appState.vehicleStatus.batteryLevel}%`;
  }
  if (m.includes("dealer")) return "Nearby dealers:\n• Arena Raj Nagar (1.8 km)\n• NEXA Kaushambi (5.3 km)\n• Arena Vaishali (6.9 km)";
  if (m.includes("points") || m.includes("rewards")) return `Rewards: ${appData.user.loyaltyPoints} pts • Tier: ${appData.user.membershipTier}`;
  if (m.includes("insurance")) return "Insurance options:\n1) Renew existing\n2) Compare quotes\n3) Track claims";
  if (m.includes("price") || m.includes("emi")) return "Ex-showroom approx:\n• Swift ~₹7.0L\n• Fronx ~₹7.5L\n• Brezza ~₹8.3L\n• Grand Vitara ~₹10.8L";
  return "Try: 'Book service', 'Insurance status', 'Find dealer', or 'Remote lock'.";
}
function makeDraggable(el) {
  let drag = false, sx = 0, sy = 0, sl = 0, sb = 0;
  el.addEventListener("touchstart", e => {
    drag = true; const t = e.touches[0];
    sx = t.clientX; sy = t.clientY;
    sl = parseInt(getComputedStyle(el).right); sb = parseInt(getComputedStyle(el).bottom);
    el.style.transition = "none";
  });
  document.addEventListener("touchmove", e => {
    if (!drag) return;
    const t = e.touches[0];
    const dx = sx - t.clientX, dy = t.clientY - sy;
    let nr = sl + dx, nb = sb - dy;
    nr = Math.max(0, Math.min(nr, window.innerWidth - 64));
    nb = Math.max(0, Math.min(nb, window.innerHeight - 64));
    el.style.right = nr + "px"; el.style.bottom = nb + "px";
  });
  document.addEventListener("touchend", () => { drag = false; el.style.transition = ""; });
}

// ========================================================
// Header Modals: Notifications / Menu
// ========================================================
function showNotifications() {
  const html = `
    <div class="notifications-panel">
      <h3>Notifications</h3>
      <div class="notif-list">
        ${appData.notifications.map(n => `
          <div class="notification-item">
            <div class="notif-icon">${n.type === "service" ? "🛠️" : "🎁"}</div>
            <div class="notif-content">
              <h4>${n.title}</h4>
              <p>${n.message}</p>
              <div class="notif-time">${n.time}</div>
            </div>
          </div>`).join("")}
      </div>
    </div>`;
  showModal(html);
}
function showMenu() {
  const html = `
    <div class="menu-panel">
      <h3>More Services</h3>
      <div class="menu-items">
        <div class="menu-item-modal" onclick="openPage('trueValueBuyPage')"><span class="menu-icon">🚗</span><div><h4>True Value — Buy</h4><p>Certified used cars</p></div></div>
        <div class="menu-item-modal" onclick="openPage('partsKartPage')"><span class="menu-icon">🔧</span><div><h4>Parts Kart</h4><p>Genuine parts & accessories</p></div></div>
        <div class="menu-item-modal" onclick="openPage('drivingSchoolPage')"><span class="menu-icon">🚙</span><div><h4>Driving School</h4><p>Enroll & track progress</p></div></div>
      </div>
    </div>`;
  showModal(html);
}

// ========================================================
// Vehicle Remote Controls / Media
// ========================================================
function toggleLock() {
  appState.vehicleStatus.isLocked = !appState.vehicleStatus.isLocked;
  renderVehicleStatus();
  showToast(appState.vehicleStatus.isLocked ? "Car locked" : "Car unlocked", "success");
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
}
function startEngine() {
  appState.vehicleStatus.engineRunning = !appState.vehicleStatus.engineRunning;
  showToast(`Engine ${appState.vehicleStatus.engineRunning ? "started" : "stopped"} remotely`, "success");
  if (navigator.vibrate) navigator.vibrate([150, 100, 150]);
}
function toggleAC() {
  appState.vehicleStatus.climateOn = !appState.vehicleStatus.climateOn;
  showToast(`Climate control ${appState.vehicleStatus.climateOn ? "on" : "off"}`, "success");
  if (navigator.vibrate) navigator.vibrate(100);
}
function togglePlayback() {
  appState.mediaPlayer.isPlaying = !appState.mediaPlayer.isPlaying;
  const title = document.getElementById("mediaTitle");
  if (title) title.textContent = `${appState.mediaPlayer.currentTrack} • ${appState.mediaPlayer.isPlaying ? "Playing" : "Paused"}`;
  const b1 = document.getElementById("mediaToggleBtn");
  const b2 = document.getElementById("mediaToggleBtn2");
  if (b1) b1.textContent = appState.mediaPlayer.isPlaying ? "Pause" : "Play";
  if (b2) b2.textContent = appState.mediaPlayer.isPlaying ? "Pause" : "Play";
  showToast(appState.mediaPlayer.isPlaying ? "Playback started" : "Playback paused", "success");
}

// ========================================================
// Modal (generic)
// ========================================================
function showModal(innerHTML) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<div class="modal-content"><button class="modal-close" onclick="hideModal()">✕</button>${innerHTML}</div>`;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("show"));
}
function hideModal() {
  const overlay = document.querySelector(".modal-overlay");
  if (overlay) {
    overlay.classList.remove("show");
    setTimeout(() => overlay.remove(), 180);
  }
}
// Inline modal style (kept local for portability)
const modalStyle = document.createElement("style");
modalStyle.textContent = `
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;z-index:9999}
  .modal-overlay.show{opacity:1}
  .modal{width:min(92vw,420px);max-height:80vh;overflow:auto;background:var(--color-surface);border:1px solid var(--color-border);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.35)}
  .modal-content{position:relative;padding:16px}
  .modal-close{position:absolute;right:8px;top:8px;border:none;background:transparent;font-size:18px;color:var(--color-text)}
  .notification-item,.menu-item-modal{display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--color-border);cursor:pointer}
  .notif-icon,.menu-icon{font-size:20px;width:32px;text-align:center}
  .notif-content h4,.menu-item-modal h4{margin:0 0 4px 0;font-size:16px;font-weight:600;color:var(--color-text)}
  .notif-content p,.menu-item-modal p{margin:0 0 4px 0;font-size:14px;color:var(--color-text-secondary)}
  .notif-time{font-size:12px;color:var(--color-text-secondary)}
`;
document.head.appendChild(modalStyle);

// ========================================================
function bookService() { openPage("serviceBookingPage"); }
function viewSettings() { showToast("Opening Settings", "info"); }
function getSupport() { showToast("Connecting to support", "info"); }

// Touch feedback
function addTouchFeedback() {
  document.querySelectorAll("button, .quick-action, .svc-tile, .slot, .chip").forEach(el => {
    el.addEventListener("touchstart", () => el.classList.add("pressed"), { passive: true });
    el.addEventListener("touchend", () => el.classList.remove("pressed"));
    el.addEventListener("mousedown", () => el.classList.add("pressed"));
    el.addEventListener("mouseup", () => el.classList.remove("pressed"));
    el.addEventListener("mouseleave", () => el.classList.remove("pressed"));
  });
}

// Real-time simulated updates
function startRealTimeUpdates() {
  setInterval(() => {
    // Slight fuel/battery drift
    if (Math.random() < 0.35) {
      appState.vehicleStatus.fuelLevel = Math.max(5, appState.vehicleStatus.fuelLevel - (Math.random() < 0.5 ? 1 : 0));
      renderVehicleStatus();
    }
    if (Math.random() < 0.2) {
      appState.vehicleStatus.batteryLevel = Math.max(20, appState.vehicleStatus.batteryLevel - 1);
      renderVehicleStatus();
    }
  }, 15000);

  // Occasional proactive tips
  setInterval(() => {
    if (!appState.chatbot.isOpen && Math.random() < 0.08) {
      addMessage("ai", "Tip: Book a Saturday 10:00 AM service slot to avoid rush.");
      showToast("New message from AI Assistant", "info");
    }
  }, 60000);
}

// ------- Service Worker (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

// ------- Expose to window
window.switchTab = switchTab;
window.openPage = openPage;
window.closePage = closePage;
window.showSection = showSection;

window.openPUCC = openPUCC;
window.renewInsurance = renewInsurance;
window.openChallan = openChallan;

window.mockStartService = mockStartService;
window.openEstimateModal = openEstimateModal;
window.approveEstimate = approveEstimate;

window.refreshLiveMap = refreshLiveMap;
window.shareLiveLocation = shareLiveLocation;
window.exportTrips = exportTrips;
window.createGeofence = createGeofence;
window.toggleValet = toggleValet;

window.calcEstimate = calcEstimate;

window.syncDigiLocker = syncDigiLocker;

window.openChatbot = openChatbot;
window.closeChatbot = closeChatbot;
window.sendQuickReply = sendQuickReply;

window.toggleLock = toggleLock;
window.startEngine = startEngine;
window.toggleAC = toggleAC;
window.togglePlayback = togglePlayback;

window.showNotifications = showNotifications;
window.showMenu = showMenu;
