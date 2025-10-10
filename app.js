// Maruti Suzuki Mobile App JavaScript

// App data from provided JSON
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
    {
      id: 1,
      name: "Swift VXI",
      category: "Arena",
      price: "₹7.04L",
      mileage: "22.4 kmpl",
      image: "🚗",
      rating: 4.5,
      engine: "1197cc",
      transmission: "Manual/AMT"
    },
    {
      id: 2,
      name: "Brezza",
      category: "Arena",
      price: "₹8.29L",
      mileage: "20.1 kmpl",
      image: "🚙",
      rating: 4.6,
      engine: "1462cc",
      transmission: "Manual/AT"
    },
    {
      id: 3,
      name: "Fronx",
      category: "Nexa",
      price: "₹7.51L",
      mileage: "22.8 kmpl",
      image: "🚘",
      rating: 4.3,
      engine: "1197cc/998cc Turbo",
      transmission: "Manual/AMT/AT"
    },
    {
      id: 4,
      name: "Grand Vitara",
      category: "Nexa",
      price: "₹10.77L",
      mileage: "21.1 kmpl",
      image: "🚗",
      rating: 4.4,
      engine: "1462cc",
      transmission: "Manual/AT/Hybrid"
    }
  ],
  notifications: [
    {
      title: "Service Reminder",
      message: "Your Swift service is due in 15 days",
      time: "2 hours ago",
      type: "service"
    },
    {
      title: "Special Offer",
      message: "Get ₹25,000 extra on trade-in this month",
      time: "1 day ago", 
      type: "offer"
    }
  ],
  chatHistory: [
    {
      sender: "ai",
      message: "Hi Soham! I'm your AI assistant. How can I help you today?",
      timestamp: "2025-09-28T17:15:00"
    },
    {
      sender: "user",
      message: "Show me my car status",
      timestamp: "2025-09-28T17:16:00"
    },
    {
      sender: "ai",
      message: "Your Swift is locked, fuel at 75%, and battery at 89%. Anything else?",
      timestamp: "2025-09-28T17:16:30"
    }
  ],
  quickActions: [
    { id: "bookService", label: "Book Service", icon: "🛠️" },
    { id: "toggleLock", label: "Remote Lock", icon: "🔐" },
    { id: "findDealer", label: "Find Dealer", icon: "📍" },
    { id: "arShowroom", label: "AR Showroom", icon: "📱" },
    { id: "fuelPrices", label: "Fuel Prices", icon: "⛽" },
    { id: "insurance", label: "Insurance", icon: "🛡️" },
    { id: "rsa", label: "Roadside Help", icon: "🚨" },
    { id: "tradeIn", label: "Trade-in", icon: "♻️" }
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
    "Book my service",
    "Car insurance status",
    "Find nearest fuel station",
    "Remote lock the car",
    "Show my loyalty points",
    "How's my driving score?"
  ],
  searchFilters: {
    category: ["All", "Arena", "Nexa"],
    priceRange: ["All", "₹5L-₹8L", "₹8L-₹12L", "₹12L+"],
    fuelType: ["All", "Petrol", "Diesel", "CNG", "Hybrid"],
    transmission: ["All", "Manual", "AMT", "AT"]
  },
  faq: [
    {
      question: "How do I book a service?",
      answer: "Tap 'Book Service' on Home or go to Services → Book Service, select a slot, and confirm."
    },
    {
      question: "How do I renew insurance?",
      answer: "Go to Services → Insurance, fetch your policy and renew in a few taps."
    },
    {
      question: "How do I use AR showroom?",
      answer: "Tap 'AR Showroom' on Home or Cars → select model → View in AR."
    }
  ],
  aiSuggestions: [
    "Book service for next Saturday morning",
    "Check best fuel prices nearby",
    "Explore accessories for your Swift",
    "Compare Brezza vs Fronx",
    "Evaluate your car for exchange"
  ],
  voiceCommands: [
    "Lock my car",
    "Start the engine",
    "Turn on AC",
    "Play FM radio",
    "Open navigation",
    "Show service history",
    "What's my driving score?"
  ],
  trends: [
    "AR showrooms usage up 35% this month",
    "60% users prefer weekend service slots",
    "Driving scores improved by 7 points average"
  ],
  chatbotTemplates: [
    "Book service for Saturday 10 AM",
    "Show my insurance renewal date",
    "Find nearest dealer",
    "What's my loyalty points?",
    "Help with insurance"
  ]
};

// App state
let appState = {
  currentTab: 'homeTab',
  vehicleStatus: {
    fuelLevel: 75,
    batteryLevel: 89,
    isLocked: true,
    engineRunning: false,
    climateOn: false
  },
  mediaPlayer: {
    isPlaying: false,
    currentTrack: 'Radio Mirchi FM',
    volume: 65
  },
  selectedCategory: 'all',
  chatbot: {
    isOpen: false,
    messages: [...appData.chatHistory],
    isTyping: false,
    hasNewMessages: false
  }
};

// --- New Feature State (P0 widgets) ---
let featureState = {
  compliance: { 
    pucc: { status: 'Due in 12d' }, 
    insurance: { status: 'Due in 45d' }, 
    challan: { status: 'No dues' } 
  },
  serviceJob: { active: false, step: null }, // steps: pickup, inworkshop, estimate, qc, delivery
  trips: [
    { id: 1, date: '2025-10-05', from: 'Ghaziabad', to: 'Noida', km: 21.4, fe: 18.5 },
    { id: 2, date: '2025-10-06', from: 'Noida', to: 'Delhi', km: 32.1, fe: 17.2 },
    { id: 3, date: '2025-10-08', from: 'Office', to: 'Home', km: 14.8, fe: 19.1 }
  ],
  geofence: null,
  valet: false
};

// DOM elements
let elements = {};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize the application
function initializeApp() {
  cacheElements();
  setupEventListeners();
  updateStatusBar();
  renderVehicles();
  initializeChatbot();
  startRealTimeUpdates();
  
  // Add touch feedback to interactive elements
  addTouchFeedback();
  
  // Show welcome toast
  showToast('Welcome back, ' + appData.user.name + '!', 'success');

  // New widgets
  renderCompliance();
  renderTrips();
  renderDocVault();
  updateServiceTimeline();
}

// Cache DOM elements
function cacheElements() {
  elements = {
    // Tab navigation
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Status bar
    currentTime: document.getElementById('currentTime'),
    
    // Header
    notificationBtn: document.getElementById('notificationBtn'),
    menuBtn: document.getElementById('menuBtn'),
    
    // Home
    vehiclesContainer: document.getElementById('vehiclesContainer'),
    quickActions: document.getElementById('quickActions'),
    fuelLevel: document.getElementById('fuelLevel'),
    batteryLevel: document.getElementById('batteryLevel'),
    lockStatus: document.getElementById('lockStatus'),
    serviceHistoryList: document.getElementById('serviceHistory'),
    
    // Connect
    lockBtn: document.getElementById('lockBtn'),
    engineBtn: document.getElementById('engineBtn'),
    acBtn: document.getElementById('acBtn'),
    locateBtn: document.getElementById('locateBtn'),
    mediaToggleBtn: document.getElementById('mediaToggleBtn'),
    mediaTitle: document.getElementById('mediaTitle'),
    
    // Chatbot
    chatbotPanel: document.getElementById('chatbotPanel'),
    chatbotToggle: document.getElementById('chatbotToggle'),
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    sendButton: document.getElementById('sendButton'),
    quickReplies: document.getElementById('quickReplies'),
    chatNotificationDot: document.getElementById('chatNotificationDot')
  };

  // Render home widgets
  renderQuickActions();
  renderVehicleStatus();
  renderServiceHistory();

  // Populate quick replies
  renderQuickReplies();
}

// Setup event listeners
function setupEventListeners() {
  // Tabs
  elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Header buttons
  elements.notificationBtn?.addEventListener('click', showNotifications);
  elements.menuBtn?.addEventListener('click', showMenu);

  // Connect controls
  elements.lockBtn?.addEventListener('click', toggleLock);
  elements.engineBtn?.addEventListener('click', startEngine);
  elements.acBtn?.addEventListener('click', toggleAC);
  elements.locateBtn?.addEventListener('click', locateVehicle);
  elements.mediaToggleBtn?.addEventListener('click', togglePlayback);

  // Chatbot
  elements.chatbotToggle?.addEventListener('click', openChatbot);
  elements.sendButton?.addEventListener('click', sendMessage);
  elements.chatInput?.addEventListener('input', handleChatInput);
  elements.chatInput?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Draggable chatbot button (if present)
  const fab = document.querySelector('.chatbot-fab');
  if (fab) makeDraggable(fab);
}

// Update status bar time
function updateStatusBar() {
  if (!elements.currentTime) return;
  const now = new Date();
  elements.currentTime.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  setTimeout(updateStatusBar, 30000);
}

// Render vehicles in Cars tab
function renderVehicles() {
  if (!elements.vehiclesContainer) return;
  const html = appData.vehicles.map(v => `
    <div class="vehicle-card">
      <div class="vehicle-img">${v.image}</div>
      <div class="vehicle-info">
        <div class="vehicle-title">${v.name} <span class="vehicle-badge">${v.category}</span></div>
        <div class="vehicle-meta">
          <span>${v.price}</span> • <span>${v.mileage}</span>
        </div>
        <div class="vehicle-specs">
          <span>${v.engine}</span> • <span>${v.transmission}</span>
        </div>
        <div class="vehicle-actions">
          <button class="btn btn--primary" onclick="configureVehicle('${v.name}')">Configure</button>
          <button class="btn btn--secondary" onclick="viewInAR('${v.name}')">View in AR</button>
        </div>
      </div>
    </div>
  `).join('');
  elements.vehiclesContainer.innerHTML = html;
}

// Render quick actions on Home
function renderQuickActions() {
  const qaContainer = elements.quickActions;
  if (!qaContainer) return;
  const html = appData.quickActions.map(a => `
    <button class="quick-action" onclick="handleQuickAction('${a.id}')">
      <span class="qa-icon">${a.icon}</span>
      <span>${a.label}</span>
    </button>
  `).join('');
  qaContainer.innerHTML = html;
}

// Render vehicle status card
function renderVehicleStatus() {
  if (elements.fuelLevel) elements.fuelLevel.textContent = appState.vehicleStatus.fuelLevel + '%';
  if (elements.batteryLevel) elements.batteryLevel.textContent = appState.vehicleStatus.batteryLevel + '%';
  if (elements.lockStatus) elements.lockStatus.textContent = appState.vehicleStatus.isLocked ? 'Locked' : 'Unlocked';
}

// Render service history
function renderServiceHistory() {
  if (!elements.serviceHistoryList) return;
  elements.serviceHistoryList.innerHTML = appData.serviceHistory.map(item => `
    <div class="service-item">
      <div>
        <div class="service-date">${item.date}</div>
        <div class="service-details">${item.details}</div>
        <div class="service-outlet">${item.outlet}</div>
      </div>
      <div class="service-amount">${item.amount}</div>
    </div>
  `).join('');
}

// Handle quick actions
function handleQuickAction(id) {
  switch (id) {
    case 'bookService':
      bookService();
      break;
    case 'toggleLock':
      toggleLock();
      break;
    case 'findDealer':
      showToast('Opening Dealer Locator...', 'info');
      break;
    case 'arShowroom':
      showToast('Launching AR Showroom...', 'info');
      break;
    case 'fuelPrices':
      showToast('Fetching nearby fuel prices...', 'info');
      break;
    case 'insurance':
      renewInsurance();
      break;
    case 'rsa':
      roadsideAssistance();
      break;
    case 'tradeIn':
      showToast('Opening Trade-in evaluation...', 'info');
      break;
    default:
      showToast('Action not implemented', 'error');
  }
}

// Toast utility
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Chatbot functions
function openChatbot() {
  appState.chatbot.isOpen = true;
  elements.chatbotPanel?.classList.add('open');
  renderChatMessages();
  elements.chatNotificationDot.style.display = 'none';
  appState.chatbot.hasNewMessages = false;
  elements.chatInput?.focus();
}

function closeChatbot() {
  appState.chatbot.isOpen = false;
  elements.chatbotPanel?.classList.remove('open');
}

function initializeChatbot() {
  renderChatMessages();
}

function renderQuickReplies() {
  if (!elements.quickReplies) return;
  elements.quickReplies.innerHTML = appData.chatbotQuickReplies.map(q => `
    <button class="chip" onclick="sendQuickReply('${q.replace(/'/g, "\\'")}')">${q}</button>
  `).join('');
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

// Make element draggable
function makeDraggable(element) {
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  element.addEventListener('touchstart', function(e) {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startLeft = parseInt(window.getComputedStyle(element).right);
    startTop = parseInt(window.getComputedStyle(element).bottom);
    element.style.transition = 'none';
    e.preventDefault();
  });

  document.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const deltaX = startX - touch.clientX;
    const deltaY = touch.clientY - startY;
    
    let newRight = startLeft + deltaX;
    let newBottom = startTop - deltaY;
    
    // Boundary constraints
    newRight = Math.max(0, Math.min(newRight, window.innerWidth - 64));
    newBottom = Math.max(0, Math.min(newBottom, window.innerHeight - 64));
    
    element.style.right = newRight + 'px';
    element.style.bottom = newBottom + 'px';
  });

  document.addEventListener('touchend', function() {
    isDragging = false;
    element.style.transition = '';
  });
}

// Send chat message
function sendMessage() {
  const text = elements.chatInput.value.trim();
  if (!text) return;

  addMessage('user', text);
  elements.chatInput.value = '';
  elements.sendButton.disabled = true;

  // AI typing simulation
  appState.chatbot.isTyping = true;
  setTimeout(() => {
    const response = generateAIResponse(text);
    addMessage('ai', response);
    appState.chatbot.isTyping = false;
    renderChatMessages();
  }, 900);
}

function addMessage(sender, message) {
  const timestamp = new Date().toISOString();
  appState.chatbot.messages.push({ sender, message, timestamp });
  renderChatMessages();

  // Show notification if chatbot is closed
  if (!appState.chatbot.isOpen && sender === 'ai') {
    appState.chatbot.hasNewMessages = true;
    elements.chatNotificationDot.style.display = 'block';
  }
}

// Render chat messages
function renderChatMessages() {
  if (!elements.chatMessages) return;
  
  const messagesHTML = appState.chatbot.messages.map(msg => {
    const time = new Date(msg.timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
    
    const avatar = msg.sender === 'ai' ? '🤖' : appData.user.profilePicture;
    
    return `
      <div class="message ${msg.sender}">
        ${msg.sender === 'ai' ? `<div class="message-avatar">${avatar}</div>` : ''}
        <div class="message-content">
          <div class="message-bubble">${formatMessage(msg.message)}</div>
          <div class="message-time">${time}</div>
        </div>
        ${msg.sender === 'user' ? `<div class="message-avatar">${avatar}</div>` : ''}
      </div>
    `;
  }).join('');

  const typingHTML = appState.chatbot.isTyping ? `
    <div class="message ai">
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        <div class="message-bubble typing">
          <span></span><span></span><span></span>
        </div>
        <div class="message-time">typing…</div>
      </div>
    </div>
  ` : '';

  elements.chatMessages.innerHTML = messagesHTML + typingHTML;
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function formatMessage(message) {
  return message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

// Generate simple AI responses (mock)
function generateAIResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // Service booking
  if (msg.includes('service') || msg.includes('book')) {
    return `Sure! I can book a service for your Swift.\n\nAvailable slots:\n• Sat 10:00 AM (low traffic)\n• Sat 12:30 PM\n• Sun 11:00 AM\n\nReply with your preferred slot and pickup address.`;
  }

  // Vehicle status
  if (msg.includes('status') || msg.includes('lock') || msg.includes('fuel') || msg.includes('battery')) {
    const lock = appState.vehicleStatus.isLocked ? 'Locked' : 'Unlocked';
    return `Here’s your car status:\n\n🔐 ${lock}\n⛽ Fuel: ${appState.vehicleStatus.fuelLevel}%\n🔋 Battery: ${appState.vehicleStatus.batteryLevel}%\n\nWant to toggle lock or locate your car?`;
  }

  // Dealer queries
  if (msg.includes('dealer') || msg.includes('location') || msg.includes('near')) {
    return `I found 3 Maruti dealers near Ghaziabad:\n\n📍 **Arena Raj Nagar** – 1.8 km, open till 7 PM\n📍 **NEXA Kaushambi** – 5.3 km, open till 8 PM\n📍 **Arena Vaishali** – 6.9 km, open till 7 PM\n\nWould you like directions or contact details?`;
  }

  // Loyalty points queries
  if (msg.includes('points') || msg.includes('loyalty') || msg.includes('rewards')) {
    return `Your Maruti Rewards status:\n\n🏆 Current Points: ${appData.user.loyaltyPoints}\n🥈 Tier: ${appData.user.membershipTier}\n🎯 Next Tier: Gold in ~550 points\n\nYou can redeem on accessories or extended warranty.\n\nWould you like to see redemption options?`;
  }

  // Insurance queries
  if (msg.includes('insurance') || msg.includes('policy')) {
    return `I can help with your vehicle insurance! Here are your options:\n\n1) **Renew existing policy** – same coverage\n2) **Compare quotes** – Zero Dep, Engine Protect\n3) **Track claim** – status & surveyor details\n\nWhat would you like me to help you with?`;
  }

  // Price-related queries
  if (msg.includes('price') || msg.includes('cost') || msg.includes('emi')) {
    return `I can help you with pricing and financing options! A few picks:\n\n• **Swift VXi** – ~₹7.0L ex-showroom\n• **Fronx** – ~₹7.5L ex-showroom\n• **Brezza** – ~₹8.3L ex-showroom\n• **Grand Vitara** – ~₹10.8L ex-showroom\n\nWhich one interests you?`;
  }

  // Greeting responses
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
    return `Hello ${appData.user.name}! 👋 Great to see you here.\n\nQuick things I can do:\n• Book service\n• Show fuel/vehicle status\n• Remote lock/unlock\n• Renew insurance\n• Loyalty rewards & offers\n\nWhat can I assist you with today?`;
  }

  // Thank you responses
  if (msg.includes('thank') || msg.includes('thanks')) {
    return `You're welcome, ${appData.user.name}! 😊 I'm always here to help. Is there anything else you'd like to know about your Swift or our services?`;
  }

  // Default response
  return `Got it! I can help with service booking, insurance, remote controls, or dealers nearby. Try typing "Book service Saturday 10 AM" or "Renew insurance".`;
}

// Chatbot open/close helpers
function openChat() { openChatbot(); }
function closeChat() { closeChatbot(); }

// Pre-fill chat message from suggestions
function simulateProactiveReply(reply) {
  elements.chatInput.value = reply;
  sendMessage();
}

// Tab switching functionality
function switchTab(tabId) {
  // Update tab buttons
  elements.tabBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    }
  });

  // Update tab content
  elements.tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === tabId) {
      content.classList.add('active');
      content.classList.add('fade-in');
    }
  });

  appState.currentTab = tabId;

  // Load tab-specific content
  if (tabId === 'carsTab' && elements.vehiclesContainer.children.length === 0) {
    renderVehicles();
  }
}

// Touch feedback on buttons
function addTouchFeedback() {
  document.querySelectorAll('button, .quick-action').forEach(el => {
    el.addEventListener('touchstart', () => el.classList.add('pressed'));
    el.addEventListener('touchend', () => el.classList.remove('pressed'));
  });
}

// Real-time updates simulation
function startRealTimeUpdates() {
  // Simulate vehicle status update every 15 seconds
  setInterval(() => {
    simulateVehicleStatusUpdate();
  }, 15000);

  // Simulate AI proactive messages
  setInterval(() => {
    if (Math.random() < 0.05 && !appState.chatbot.isOpen) { // 5% chance
      simulateProactiveMessage();
    }
  }, 60000);
}

// Simulate proactive AI messages
function simulateProactiveMessage() {
  const proactiveMessages = [
    "🔔 Reminder: Your Swift service is due in 2 weeks. Shall I book it for you?",
    "💰 Special offer: Get ₹25,000 extra on your trade-in this month!",
    "⛽ Fuel tip: Best prices nearby at Shell (2.3km) - ₹96.75/L",
    "🚗 Your driving score improved to 87! Keep up the good driving habits.",
    "🎉 You're 550 points away from Gold tier. Check out easy ways to earn more!"
  ];
  
  const randomMessage = proactiveMessages[Math.floor(Math.random() * proactiveMessages.length)];
  addMessage('ai', randomMessage);
  
  // Show notification
  showToast('New message from AI Assistant', 'info');
}

// Simulate vehicle status updates
function simulateVehicleStatusUpdate() {
  // Randomly update fuel level (decrease)
  if (Math.random() < 0.3) {
    appState.vehicleStatus.fuelLevel = Math.max(5, appState.vehicleStatus.fuelLevel - Math.floor(Math.random() * 3));
    renderVehicleStatus();
  }

  // Random battery drain (slight)
  if (Math.random() < 0.2) {
    appState.vehicleStatus.batteryLevel = Math.max(20, appState.vehicleStatus.batteryLevel - 1);
    renderVehicleStatus();
  }

  // Randomly toggle playback
  if (Math.random() < 0.1) {
    appState.mediaPlayer.isPlaying = !appState.mediaPlayer.isPlaying;
    updateMediaUI();
  }
}

// Vehicle remote actions
function toggleLock() {
  appState.vehicleStatus.isLocked = !appState.vehicleStatus.isLocked;
  renderVehicleStatus();
  showToast(appState.vehicleStatus.isLocked ? 'Car locked' : 'Car unlocked', 'success');

  // Simulate AI confirmation
  if (Math.random() < 0.5) {
    setTimeout(() => {
      const status = appState.vehicleStatus.isLocked ? 'locked' : 'unlocked';
      addMessage('ai', `I noticed you ${status} your Swift remotely. Everything looks good! 🔐`);
    }, 3000);
  }
  
  // Stronger haptic feedback for vehicle actions
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}

function startEngine() {
  appState.vehicleStatus.engineRunning = !appState.vehicleStatus.engineRunning;
  const status = appState.vehicleStatus.engineRunning ? 'started' : 'stopped';
  
  showToast(`Engine ${status} remotely`, 'success');
  
  if (navigator.vibrate) {
    navigator.vibrate([150, 100, 150]);
  }
}

function toggleAC() {
  appState.vehicleStatus.climateOn = !appState.vehicleStatus.climateOn;
  const status = appState.vehicleStatus.climateOn ? 'turned on' : 'turned off';
  
  showToast(`Climate control ${status}`, 'success');
  
  if (navigator.vibrate) {
    navigator.vibrate(100);
  }
}

function locateVehicle() {
  showToast('Opening map to locate your vehicle...', 'info');
}

// Media controls
function togglePlayback() {
  appState.mediaPlayer.isPlaying = !appState.mediaPlayer.isPlaying;
  updateMediaUI();
  showToast(appState.mediaPlayer.isPlaying ? 'Playback started' : 'Playback paused', 'success');
}

function updateMediaUI() {
  if (elements.mediaTitle) {
    elements.mediaTitle.textContent = appState.mediaPlayer.currentTrack + (appState.mediaPlayer.isPlaying ? ' • Playing' : ' • Paused');
  }
  const btn = elements.mediaToggleBtn;
  if (btn) btn.textContent = appState.mediaPlayer.isPlaying ? 'Pause' : 'Play';
}

// Vehicle cards actions
function showVehicleDetails(name) {
  showToast(`Opening details for ${name}`, 'info');
}

function configureVehicle(name) {
  showToast(`Configure ${name}: variant, color, packs`, 'info');
}

function viewInAR(name) {
  showToast(`Launching AR for ${name}`, 'info');
}

// Services
function bookService() {
  showToast('Service booking opened', 'success');
}

function viewParts() {
  showToast('Opening Genuine Parts', 'info');
}

function renewInsurance() {
  showToast('Insurance renewal flow opened', 'info');
}

function roadsideAssistance() {
  showToast('Roadside help requested', 'success');
}

function viewDocuments() {
  showToast('Opening Document Wallet', 'info');
}

function viewRewards() {
  showToast('Opening Rewards & Offers', 'info');
}

function viewSettings() {
  showToast('Opening Settings', 'info');
}

function getSupport() {
  showToast('Connecting to support', 'info');
}

// Notifications panel
function showNotifications() {
  const notifHTML = `
    <div class="notifications-panel">
      <h3>Notifications</h3>
      <div class="notif-list">
        ${appData.notifications.map(n => `
          <div class="notification-item">
            <div class="notif-icon">${n.type === 'service' ? '🛠️' : '🎁'}</div>
            <div class="notif-content">
              <h4>${n.title}</h4>
              <p>${n.message}</p>
              <div class="notif-time">${n.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  showModal(notifHTML);
}

function showMenu() {
  const menuHTML = `
    <div class="menu-panel">
      <h3>More Services</h3>
      <div class="menu-items">
        <div class="menu-item-modal" onclick="handleMenuAction('trueValue')">
          <span class="menu-icon">🚗</span>
          <div>
            <h4>True Value</h4>
            <p>Used Cars & Exchange</p>
          </div>
        </div>
        <div class="menu-item-modal" onclick="handleMenuAction('partsKart')">
          <span class="menu-icon">🔧</span>
          <div>
            <h4>Parts Kart</h4>
            <p>Genuine Parts & Accessories</p>
          </div>
        </div>
        <div class="menu-item-modal" onclick="handleMenuAction('drivingSchool')">
          <span class="menu-icon">🚙</span>
          <div>
            <h4>Driving School</h4>
            <p>Enroll & Track Progress</p>
          </div>
        </div>
      </div>
    </div>
  `;
  showModal(menuHTML);
}

function handleMenuAction(action) {
  switch (action) {
    case 'trueValue':
      showToast('Opening True Value (Used Cars)', 'info');
      break;
    case 'partsKart':
      showToast('Opening Parts Kart catalog', 'info');
      break;
    case 'drivingSchool':
      showToast('Opening Driving School', 'info');
      break;
    default:
      showToast('Action not implemented', 'error');
  }
}

// Generic modal
function showModal(innerHTML) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="hideModal()">✕</button>
      ${innerHTML}
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add('show'), 10);
}

function hideModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.classList.remove('show');
    setTimeout(() => overlay.remove(), 200);
  }
}

// Inline modal styles (kept for portability)
const modalStyle = document.createElement('style');
modalStyle.textContent = `
  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.35); display:flex; align-items:center; justify-content:center;
    opacity: 0; transition: opacity .2s ease; z-index: 9999;
  }
  .modal-overlay.show { opacity: 1; }
  .modal { width: min(92vw, 420px); max-height: 80vh; overflow:auto; background: var(--color-surface); border:1px solid var(--color-border); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,.35); }
  .modal-content { position: relative; padding: 16px; }
  .modal-close { position: absolute; right: 8px; top: 8px; border: none; background: transparent; font-size: 18px; color: var(--color-text); }
  .notification-item, .menu-item-modal {
    display: flex;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--color-border);
    cursor: pointer;
  }
  .notif-icon, .menu-icon {
    font-size: 20px;
    width: 32px;
    text-align: center;
  }
  .notif-content h4, .menu-item-modal h4 {
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text);
  }
  .notif-content p, .menu-item-modal p {
    margin: 0 0 4px 0;
    font-size: 14px;
    color: var(--color-text-secondary);
  }
  .notif-time {
    font-size: 12px;
    color: var(--color-text-secondary);
  }
  .filter-group {
    display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px;
  }
`;
document.head.appendChild(modalStyle);

// Service Worker registration (if present)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('SW registered'))
      .catch(error => console.log('SW registration failed'));
  });
}

// === New UI Renderers & Actions (non-invasive) ===

// Compliance Hub
function renderCompliance() {
  const puccEl = document.getElementById('comp-pucc')?.querySelector('.comp-status');
  const insEl  = document.getElementById('comp-insurance')?.querySelector('.comp-status');
  const chalEl = document.getElementById('comp-challan')?.querySelector('.comp-status');
  if (puccEl) puccEl.textContent = featureState.compliance.pucc.status;
  if (insEl)  insEl.textContent  = featureState.compliance.insurance.status;
  if (chalEl) chalEl.textContent = featureState.compliance.challan.status;
}
function openPUCC(){ showToast('PUCC renewal flow opened', 'info'); }
function openChallan(){ showToast('Challan dashboard opened', 'info'); }

// Service Live-Tracker
function updateServiceTimeline() {
  const steps = ['pickup','inworkshop','estimate','qc','delivery'];
  const tl = document.getElementById('serviceTimeline');
  const chip = document.getElementById('svcLiveChip');
  if (!tl || !chip) return;
  [...tl.querySelectorAll('li')].forEach(li => li.classList.remove('active'));
  if (!featureState.serviceJob.active) { chip.textContent = 'No active job'; return; }
  chip.textContent = `Active • ${featureState.serviceJob.step}`;
  const idx = steps.indexOf(featureState.serviceJob.step);
  steps.slice(0, idx+1).forEach(step => tl.querySelector(`li[data-step="${step}"]`)?.classList.add('active'));
}

function mockStartService(){
  featureState.serviceJob = { active: true, step: 'pickup' };
  updateServiceTimeline();
  showToast('Pickup scheduled for 10:00 AM', 'success');
  const seq = ['inworkshop','estimate','qc','delivery'];
  let i=0; const t = setInterval(()=> {
    featureState.serviceJob.step = seq[i++]; updateServiceTimeline();
    if (featureState.serviceJob.step==='estimate') openEstimateModal();
    if (i===seq.length){ clearInterval(t); setTimeout(()=>{ 
      featureState.serviceJob.active=false; updateServiceTimeline(); showToast('Vehicle delivered ✅','success');
    }, 3000); }
  }, 4000);
}

function openEstimateModal(){
  const html = `
    <div class="estimate-panel">
      <h3>Estimate Approval</h3>
      <div class="est-list">
        <div class="est-item"><span>Engine Oil + Filter</span><b>₹1,650</b></div>
        <div class="est-item"><span>Air Filter</span><b>₹420</b></div>
        <div class="est-item"><span>Wheel Balancing/Alignment</span><b>₹900</b></div>
        <div class="est-item optional"><label><input type="checkbox" id="addCabinFilter" checked> Cabin Filter</label><b>₹350</b></div>
      </div>
      <div class="est-total">Estimated Total <b id="estTotal">₹3,320</b></div>
      <div class="est-actions">
        <button class="btn btn--secondary" onclick="hideModal()">Request Call</button>
        <button class="btn btn--primary" onclick="approveEstimate()">Approve</button>
      </div>
    </div>`;
  showModal(html);
  setTimeout(()=>{ 
    const cb = document.getElementById('addCabinFilter'); 
    if(cb){ cb.addEventListener('change', ()=> {
      document.getElementById('estTotal').textContent = cb.checked ? '₹3,320' : '₹2,970';
    });}
  }, 50);
}

function approveEstimate(){
  hideModal();
  showToast('Estimate approved', 'success');
  featureState.serviceJob.step = 'qc';
  updateServiceTimeline();
}

// Live Map / Trips / Geofence / Valet
function refreshLiveMap(){ showToast('Map refreshed (mock GPS)', 'info'); }
function shareLiveLocation(){ showToast('Live location shared for 30 min', 'success'); }

function renderTrips(){
  const list = document.getElementById('tripsList');
  if(!list) return;
  list.innerHTML = featureState.trips.map(t => `
    <div class="trip-item">
      <div>
        <div><b>${t.from}</b> → <b>${t.to}</b></div>
        <div class="trip-meta">${t.date} • ${t.km} km • ${t.fe} kmpl</div>
      </div>
      <button class="btn btn--outline btn--sm" onclick="openTrip(${t.id})">Details</button>
    </div>
  `).join('');
}
function openTrip(id){
  const t = featureState.trips.find(x=>x.id===id);
  if(!t) return;
  showModal(`<div><h3>Trip Details</h3><p>${t.date}</p><p>${t.from} → ${t.to}</p><p>${t.km} km • ${t.fe} kmpl</p></div>`);
}

function createGeofence(){
  const radius = prompt('Enter geofence radius in km', '2');
  if(!radius) return;
  featureState.geofence = { radiusKm: Number(radius), center: 'Current Location' };
  const el = document.getElementById('geofenceStatus');
  if (el) el.textContent = `${radius} km around Current`;
  showToast('Geofence created', 'success');
}
function toggleValet(){
  featureState.valet = !featureState.valet;
  const el = document.getElementById('valetStatus');
  if (el) el.textContent = featureState.valet ? 'On (speed 40 km/h, 3 km radius)' : 'Off';
  showToast(`Valet ${featureState.valet?'enabled':'disabled'}`, 'info');
}

// Service Cost Estimator
function calcEstimate(){
  const model = document.getElementById('estModel')?.value || 'Swift VXI';
  const km = Number(document.getElementById('estKm')?.value||0);
  const city = document.getElementById('estCity')?.value || 'Ghaziabad';
  const base = /Alto/.test(model)?1800:/Swift/.test(model)?2200:/Brezza/.test(model)?2800:3200;
  const wear = km>20000?900:km>10000?600:350;
  const cityAdj = { Ghaziabad:1.0, Delhi:1.05, Mumbai:1.08, Bengaluru:1.06 }[city] || 1.0;
  const total = Math.round((base+wear)*cityAdj);
  const result = document.getElementById('estResult');
  if (result) result.innerHTML = `Estimated periodic service in <b>${city}</b> for <b>${model}</b>: <b>₹${total.toLocaleString('en-IN')}</b><br><small>Includes parts + labour + GST (mock)</small>`;
}

// Document Vault
function renderDocVault(){
  const grid = document.getElementById('docGrid');
  if(!grid) return;
  const docs = [
    {icon:'🪪', title:'Driving License', status:'Valid till 2030'},
    {icon:'📘', title:'RC', status:'UP14 • Swift VXI'},
    {icon:'🛡️', title:'Insurance', status:'Expires Jun 2025'}
  ];
  grid.innerHTML = docs.map(d => `
    <div class="doc-card">
      <div class="doc-icon">${d.icon}</div>
      <div class="doc-meta"><h4>${d.title}</h4><p>${d.status}</p></div>
      <button class="btn btn--outline btn--sm" onclick="showToast('${d.title} opened','info')">Open</button>
    </div>
  `).join('');
}
function syncDigiLocker(){ showToast('DigiLocker connected (mock OAuth)', 'success'); }

// Export functions for global access
window.openChatbot = openChatbot;
window.closeChatbot = closeChatbot;
window.sendQuickReply = sendQuickReply;
window.handleQuickAction = handleQuickAction;
window.toggleLock = toggleLock;
window.startEngine = startEngine;
window.toggleAC = toggleAC;
window.locateVehicle = locateVehicle;
window.togglePlayback = togglePlayback;
window.showVehicleDetails = showVehicleDetails;
window.configureVehicle = configureVehicle;
window.viewInAR = viewInAR;
window.bookService = bookService;
window.viewParts = viewParts;
window.renewInsurance = renewInsurance;
window.roadsideAssistance = roadsideAssistance;
window.viewDocuments = viewDocuments;
window.viewRewards = viewRewards;
window.viewSettings = viewSettings;
window.getSupport = getSupport;
window.handleMenuAction = handleMenuAction;
window.applyFilters = applyFilters;
window.hideModal = hideModal;

// New exports
window.renderCompliance = renderCompliance;
window.mockStartService = mockStartService;
window.openEstimateModal = openEstimateModal;
window.approveEstimate = approveEstimate;
window.refreshLiveMap = refreshLiveMap;
window.shareLiveLocation = shareLiveLocation;
window.renderTrips = renderTrips;
window.openTrip = openTrip;
window.createGeofence = createGeofence;
window.toggleValet = toggleValet;
window.calcEstimate = calcEstimate;
window.syncDigiLocker = syncDigiLocker;
window.renderDocVault = renderDocVault;
window.updateServiceTimeline = updateServiceTimeline;
