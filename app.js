// Complete Vehicle data with all 17 models
const vehicleData = {
  vehicles: [
    // Arena Models (9 vehicles)
    {
      name: "Alto K10",
      category: "Arena",
      type: "Hatchback", 
      startingPrice: "₹3.70 Lakh",
      onRoadPrice: "₹4.05 Lakh",
      mileage: "24.39 kmpl",
      engine: "998cc",
      transmission: "Manual/AMT",
      uniqueFeature: "Most affordable modern car; easy city driving",
      matchScore: 94
    },
    {
      name: "S-Presso",
      category: "Arena",
      type: "Mini Crossover",
      startingPrice: "₹3.50 Lakh",
      onRoadPrice: "₹3.85 Lakh", 
      mileage: "24.12 kmpl",
      engine: "998cc",
      transmission: "Manual/AMT/CNG",
      uniqueFeature: "SUV-inspired design with high 180mm ground clearance",
      matchScore: 91
    },
    {
      name: "Wagon R",
      category: "Arena",
      type: "Hatchback",
      startingPrice: "₹4.99 Lakh",
      onRoadPrice: "₹5.50 Lakh",
      mileage: "24.35 kmpl", 
      engine: "998cc/1197cc",
      transmission: "Manual/AMT/CNG",
      uniqueFeature: "Tall-boy design with best-in-class headroom",
      matchScore: 88
    },
    {
      name: "Celerio",
      category: "Arena", 
      type: "Hatchback",
      startingPrice: "₹4.70 Lakh",
      onRoadPrice: "₹5.20 Lakh",
      mileage: "25.24 kmpl",
      engine: "998cc",
      transmission: "Manual/AMT/CNG", 
      uniqueFeature: "Best fuel efficiency among petrol cars (26.7 kmpl)",
      matchScore: 89
    },
    {
      name: "Swift",
      category: "Arena",
      type: "Hatchback", 
      startingPrice: "₹5.79 Lakh",
      onRoadPrice: "₹6.35 Lakh",
      mileage: "24.8 kmpl",
      engine: "1197cc",
      transmission: "Manual/AMT/CNG",
      uniqueFeature: "Peppy handling; fun-to-drive character",
      matchScore: 87
    },
    {
      name: "Dzire",
      category: "Arena",
      type: "Sedan",
      startingPrice: "₹6.26 Lakh", 
      onRoadPrice: "₹7.10 Lakh",
      mileage: "24.8 kmpl",
      engine: "1197cc",
      transmission: "Manual/AMT/CNG",
      uniqueFeature: "India's only 5-star GNCAP rated compact sedan",
      matchScore: 85
    },
    {
      name: "Brezza",
      category: "Arena",
      type: "Compact SUV",
      startingPrice: "₹8.26 Lakh",
      onRoadPrice: "₹9.50 Lakh", 
      mileage: "17.4 kmpl",
      engine: "1462cc",
      transmission: "Manual/AT/CNG",
      uniqueFeature: "Only sub-4m SUV with factory CNG option",
      matchScore: 82
    },
    {
      name: "Ertiga",
      category: "Arena",
      type: "7-Seater MPV",
      startingPrice: "₹8.80 Lakh",
      onRoadPrice: "₹10.00 Lakh",
      mileage: "20.5 kmpl", 
      engine: "1462cc",
      transmission: "Manual/AT/CNG",
      uniqueFeature: "Most affordable 7-seater MPV in India",
      matchScore: 84
    },
    {
      name: "Vitara",
      category: "Arena", 
      type: "Mid-size SUV",
      startingPrice: "₹10.50 Lakh",
      onRoadPrice: "₹12.00 Lakh",
      mileage: "21.2 kmpl",
      engine: "1462cc/1490cc Hybrid",
      transmission: "Manual/AT/CVT",
      uniqueFeature: "First Maruti SUV with Level-2 ADAS and 5★ safety rating",
      matchScore: 86
    },
    // Nexa Models (8 vehicles)
    {
      name: "Ignis",
      category: "Nexa",
      type: "Compact Hatchback",
      startingPrice: "₹5.35 Lakh",
      onRoadPrice: "₹6.20 Lakh",
      mileage: "20.9 kmpl",
      engine: "1197cc",
      transmission: "Manual/AMT",
      uniqueFeature: "Funky SUV-inspired styling; highest ground clearance (180mm)",
      matchScore: 86
    },
    {
      name: "Baleno",
      category: "Nexa", 
      type: "Premium Hatchback",
      startingPrice: "₹5.99 Lakh",
      onRoadPrice: "₹6.85 Lakh",
      mileage: "22.3 kmpl",
      engine: "1197cc",
      transmission: "Manual/AMT/CNG",
      uniqueFeature: "Most spacious in class with head-up display & 360° camera",
      matchScore: 85
    },
    {
      name: "Fronx",
      category: "Nexa",
      type: "Compact Crossover",
      startingPrice: "₹6.85 Lakh", 
      onRoadPrice: "₹7.80 Lakh",
      mileage: "21.8 kmpl",
      engine: "1197cc/998cc Turbo",
      transmission: "Manual/AMT/AT",
      uniqueFeature: "Coupe-crossover style with turbo-petrol & CNG options",
      matchScore: 83
    },
    {
      name: "Ciaz",
      category: "Nexa",
      type: "Sedan", 
      startingPrice: "₹9.09 Lakh",
      onRoadPrice: "₹10.40 Lakh",
      mileage: "20.7 kmpl",
      engine: "1462cc",
      transmission: "Manual/AT",
      uniqueFeature: "Longest wheelbase in class with mild-hybrid technology",
      matchScore: 81
    },
    {
      name: "Grand Vitara",
      category: "Nexa",
      type: "Compact SUV",
      startingPrice: "₹10.77 Lakh",
      onRoadPrice: "₹12.50 Lakh", 
      mileage: "21.1 kmpl",
      engine: "1462cc/1490cc Hybrid",
      transmission: "Manual/AT/CVT",
      uniqueFeature: "Strong hybrid & AWD options with 28 kmpl efficiency",
      matchScore: 89
    },
    {
      name: "XL6",
      category: "Nexa",
      type: "Premium 6-Seater MPV",
      startingPrice: "₹11.52 Lakh", 
      onRoadPrice: "₹13.20 Lakh",
      mileage: "21.0 kmpl",
      engine: "1462cc", 
      transmission: "Manual/AT/CNG",
      uniqueFeature: "Captain chairs in 2nd row with ventilated seats & 4 airbags",
      matchScore: 80
    },
    {
      name: "Jimny",
      category: "Nexa",
      type: "4x4 Off-road SUV",
      startingPrice: "₹12.31 Lakh",
      onRoadPrice: "₹14.10 Lakh", 
      mileage: "16.9 kmpl",
      engine: "1462cc",
      transmission: "Manual/AT (4x4)",
      uniqueFeature: "Legendary 4×4 capability - only true off-roader in this price",
      matchScore: 76
    },
    {
      name: "Invicto", 
      category: "Nexa",
      type: "Premium Hybrid MPV",
      startingPrice: "₹24.97 Lakh",
      onRoadPrice: "₹29.50 Lakh",
      mileage: "23.2 kmpl",
      engine: "1987cc Hybrid",
      transmission: "e-CVT",
      uniqueFeature: "5-Star BNCAP safety rating - safest Maruti MPV",
      matchScore: 77
    }
  ],
  features: [
    {
      title: "AI Car Recommendation",
      description: "Smart matching based on your lifestyle, budget, and preferences from our complete 17-vehicle portfolio",
      icon: "🤖"
    },
    {
      title: "AR Virtual Showroom", 
      description: "Experience any of our 17 Maruti models in your space using augmented reality",
      icon: "🥽"
    },
    {
      title: "Predictive Analytics",
      description: "Personalized insights for maintenance, upgrades, and cost optimization across your ownership journey", 
      icon: "📊"
    },
    {
      title: "Connected Services",
      description: "Suzuki Connect with 40+ features for complete vehicle monitoring and control",
      icon: "📱"
    }
  ],
  statistics: [
    {
      number: "17",
      label: "Complete Vehicle Portfolio"
    },
    {
      number: "400,000+",
      label: "AI Recommendations Generated"
    },
    {
      number: "10,000+", 
      label: "Virtual Test Drives"
    },
    {
      number: "24/7",
      label: "AI Assistant Available"
    }
  ]
};

// Application state
let currentWizardStep = 1;
let userPreferences = {
  budget: 8,
  dailyKm: 50,
  familySize: 4,
  drivingType: 'highway',
  preferences: {
    efficiency: 4,
    safety: 5,
    tech: 3,
    space: 4,
    resale: 3
  }
};

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupSliders();
  setupWizard();
  setupVehicleGrid();
  setupChatWidget();
  setupEventListeners();
  renderVehicles('all');
  setupSmartSearch();
  addInteractiveAnimations();
}

// Slider functionality
function setupSliders() {
  const budgetSlider = document.getElementById('budgetSlider');
  const budgetValue = document.getElementById('budgetValue');
  const dailyKmSlider = document.getElementById('dailyKmSlider');
  const dailyKmValue = document.getElementById('dailyKmValue');
  const totalBudget = document.getElementById('totalBudget');
  const totalBudgetDisplay = document.getElementById('totalBudgetDisplay');

  if (budgetSlider && budgetValue) {
    budgetSlider.addEventListener('input', function() {
      const value = this.value;
      budgetValue.textContent = `₹${value}L`;
      userPreferences.budget = parseInt(value);
    });
  }

  if (dailyKmSlider && dailyKmValue) {
    dailyKmSlider.addEventListener('input', function() {
      const value = this.value;
      dailyKmValue.textContent = `${value} km`;
      userPreferences.dailyKm = parseInt(value);
    });
  }

  if (totalBudget && totalBudgetDisplay) {
    totalBudget.addEventListener('input', function() {
      const value = this.value;
      totalBudgetDisplay.textContent = `₹${value} Lakh`;
      userPreferences.budget = parseInt(value);
    });
  }

  // Preference sliders
  const prefSliders = document.querySelectorAll('.pref-slider');
  prefSliders.forEach(slider => {
    slider.addEventListener('input', function() {
      const pref = this.getAttribute('data-pref');
      userPreferences.preferences[pref] = parseInt(this.value);
    });
  });
}

// Wizard functionality
function setupWizard() {
  const wizardSteps = document.querySelectorAll('.wizard-step');
  const nextButtons = document.querySelectorAll('.wizard-next');
  const prevButtons = document.querySelectorAll('.wizard-prev');

  nextButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (currentWizardStep < 3) {
        showWizardStep(currentWizardStep + 1);
      }
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (currentWizardStep > 1) {
        showWizardStep(currentWizardStep - 1);
      }
    });
  });

  // Handle radio button changes
  const drivingTypeRadios = document.querySelectorAll('input[name="drivingType"]');
  drivingTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        userPreferences.drivingType = this.value;
      }
    });
  });

  // Handle family size change
  const familySizeSelect = document.getElementById('familySize');
  if (familySizeSelect) {
    familySizeSelect.addEventListener('change', function() {
      userPreferences.familySize = parseInt(this.value);
    });
  }
}

function showWizardStep(step) {
  const steps = document.querySelectorAll('.wizard-step');
  steps.forEach(stepEl => stepEl.classList.remove('active'));
  
  const targetStep = document.getElementById(`step${step}`);
  if (targetStep) {
    targetStep.classList.add('active');
    currentWizardStep = step;
  }
}

// Vehicle grid functionality
function setupVehicleGrid() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      renderVehicles(category);
    });
  });
}

function renderVehicles(category) {
  const vehiclesGrid = document.getElementById('vehiclesGrid');
  if (!vehiclesGrid) return;

  const filteredVehicles = category === 'all' 
    ? vehicleData.vehicles 
    : vehicleData.vehicles.filter(vehicle => vehicle.category === category);

  vehiclesGrid.innerHTML = filteredVehicles.map(vehicle => `
    <div class="vehicle-card">
      <div class="vehicle-image">
        🚗
      </div>
      <div class="vehicle-info">
        <div class="vehicle-header">
          <h3 class="vehicle-name">${vehicle.name}</h3>
          <span class="vehicle-category">${vehicle.category}</span>
        </div>
        <p class="vehicle-type">${vehicle.type}</p>
        <div class="vehicle-specs">
          <span class="result-spec">⛽ ${vehicle.mileage}</span>
          <span class="result-spec">🔧 ${vehicle.engine}</span>
          <span class="result-spec">⚙️ ${vehicle.transmission}</span>
        </div>
        <div class="vehicle-price">${vehicle.startingPrice}</div>
        <p class="vehicle-feature">${vehicle.uniqueFeature}</p>
        <div class="vehicle-actions">
          <button class="btn btn--primary btn--sm" onclick="configureVehicle('${vehicle.name}')">
            Configure
          </button>
          <button class="btn btn--secondary btn--sm" onclick="tryAR('${vehicle.name}')">
            AR View
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// AI Recommendations
function generateAIRecommendations() {
  const resultsGrid = document.getElementById('resultsGrid');
  if (!resultsGrid) return;

  // Sort vehicles by match score and filter by budget
  const budgetInLakhs = userPreferences.budget;
  const filteredVehicles = vehicleData.vehicles
    .filter(vehicle => {
      const price = parseFloat(vehicle.startingPrice.replace('₹', '').replace(' Lakh', ''));
      return price <= budgetInLakhs;
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5); // Show top 5 recommendations

  resultsGrid.innerHTML = filteredVehicles.map(vehicle => `
    <div class="result-card">
      <div class="result-match">
        ${vehicle.matchScore}% Match
      </div>
      <div class="result-info">
        <h4>${vehicle.name}</h4>
        <p>${vehicle.uniqueFeature}</p>
        <div class="result-specs">
          <span class="result-spec">Price: ${vehicle.startingPrice}</span>
          <span class="result-spec">Mileage: ${vehicle.mileage}</span>
          <span class="result-spec">Engine: ${vehicle.engine}</span>
          <span class="result-spec">Type: ${vehicle.type}</span>
        </div>
      </div>
      <div class="result-actions">
        <button class="btn btn--primary btn--sm" onclick="configureVehicle('${vehicle.name}')">
          Configure Vehicle
        </button>
        <button class="btn btn--outline btn--sm" onclick="bookTestDrive('${vehicle.name}')">
          Book Test Drive
        </button>
      </div>
    </div>
  `).join('');

  // Show results step
  document.getElementById('results').style.display = 'block';
  document.getElementById('step3').classList.remove('active');
}

function showQuickMatches() {
  const quickMatches = document.getElementById('quickMatches');
  const matchesGrid = document.getElementById('matchesGrid');
  
  if (!quickMatches || !matchesGrid) return;

  // Get top 3 matches based on current preferences
  const budgetInLakhs = userPreferences.budget;
  const topMatches = vehicleData.vehicles
    .filter(vehicle => {
      const price = parseFloat(vehicle.startingPrice.replace('₹', '').replace(' Lakh', ''));
      return price <= budgetInLakhs;
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  matchesGrid.innerHTML = topMatches.map(vehicle => `
    <div class="match-card">
      <div class="match-score">${vehicle.matchScore}%</div>
      <h5>${vehicle.name}</h5>
      <p>${vehicle.startingPrice}</p>
      <small>${vehicle.type}</small>
    </div>
  `).join('');

  quickMatches.style.display = 'block';
}

// Enhanced search functionality
function setupSmartSearch() {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search cars by name, price, or features...';
  searchInput.className = 'form-control search-input';

  // Add search input to vehicles section
  const vehiclesSection = document.getElementById('vehicles');
  if (vehiclesSection) {
    const container = vehiclesSection.querySelector('.container');
    const sectionHeader = container.querySelector('.section-header');
    sectionHeader.appendChild(searchInput);

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      filterVehiclesBySearch(searchTerm);
    });
  }
}

function filterVehiclesBySearch(searchTerm) {
  const filteredVehicles = vehicleData.vehicles.filter(vehicle => {
    return (
      vehicle.name.toLowerCase().includes(searchTerm) ||
      vehicle.type.toLowerCase().includes(searchTerm) ||
      vehicle.uniqueFeature.toLowerCase().includes(searchTerm) ||
      vehicle.startingPrice.toLowerCase().includes(searchTerm) ||
      vehicle.category.toLowerCase().includes(searchTerm)
    );
  });

  const vehiclesGrid = document.getElementById('vehiclesGrid');
  if (vehiclesGrid && searchTerm) {
    renderFilteredVehicles(filteredVehicles);
  } else if (vehiclesGrid && !searchTerm) {
    renderVehicles('all');
  }
}

function renderFilteredVehicles(vehicles) {
  const vehiclesGrid = document.getElementById('vehiclesGrid');
  if (!vehiclesGrid) return;

  if (vehicles.length === 0) {
    vehiclesGrid.innerHTML = '<div class="no-results"><p>No vehicles found matching your search.</p></div>';
    return;
  }

  vehiclesGrid.innerHTML = vehicles.map(vehicle => `
    <div class="vehicle-card">
      <div class="vehicle-image">
        🚗
      </div>
      <div class="vehicle-info">
        <div class="vehicle-header">
          <h3 class="vehicle-name">${vehicle.name}</h3>
          <span class="vehicle-category">${vehicle.category}</span>
        </div>
        <p class="vehicle-type">${vehicle.type}</p>
        <div class="vehicle-specs">
          <span class="result-spec">⛽ ${vehicle.mileage}</span>
          <span class="result-spec">🔧 ${vehicle.engine}</span>
          <span class="result-spec">⚙️ ${vehicle.transmission}</span>
        </div>
        <div class="vehicle-price">${vehicle.startingPrice}</div>
        <p class="vehicle-feature">${vehicle.uniqueFeature}</p>
        <div class="vehicle-actions">
          <button class="btn btn--primary btn--sm" onclick="configureVehicle('${vehicle.name}')">
            Configure
          </button>
          <button class="btn btn--secondary btn--sm" onclick="tryAR('${vehicle.name}')">
            AR View
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Chat widget functionality
function setupChatWidget() {
  const chatToggle = document.getElementById('chatToggle');
  const chatWidget = document.getElementById('chatWidget');
  const chatClose = document.getElementById('chatClose');
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  if (chatToggle && chatWidget) {
    chatToggle.addEventListener('click', function() {
      chatWidget.classList.toggle('active');
    });
  }

  if (chatClose && chatWidget) {
    chatClose.addEventListener('click', function() {
      chatWidget.classList.remove('active');
    });
  }

  if (chatSend && chatInput && chatMessages) {
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(message);
      addMessage(response, 'bot');
    }, 1000);
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Context-aware responses based on user query
    if (lowerMessage.includes('budget') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "I can help you find cars within your budget! Our range starts from ₹3.50L (S-Presso) to ₹24.97L (Invicto). What's your budget range?";
    } else if (lowerMessage.includes('fuel') || lowerMessage.includes('mileage') || lowerMessage.includes('efficiency')) {
      return "For best fuel efficiency, I'd recommend the Celerio (26.7 kmpl) or Grand Vitara Hybrid (28 kmpl). What's your daily driving distance?";
    } else if (lowerMessage.includes('family') || lowerMessage.includes('7 seater') || lowerMessage.includes('space')) {
      return "For families, consider our 7-seater Ertiga (₹8.80L) or premium XL6 (₹11.52L). For 8-seater, the Invicto (₹24.97L) offers luxury and safety.";
    } else if (lowerMessage.includes('suv') || lowerMessage.includes('high ground')) {
      return "Our SUV range includes Brezza (₹8.26L), Grand Vitara (₹10.77L), Vitara (₹10.50L), and the off-road capable Jimny (₹12.31L). Which type interests you?";
    } else if (lowerMessage.includes('automatic') || lowerMessage.includes('amt') || lowerMessage.includes('cvt')) {
      return "Most of our models offer automatic options! AMT is available in Alto K10, Swift, Dzire, and more. CVT in Grand Vitara. AT in Brezza, Ertiga, XL6, and others.";
    } else if (lowerMessage.includes('cng') || lowerMessage.includes('gas')) {
      return "CNG options available in: S-Presso, Wagon R, Celerio, Swift, Dzire, Brezza, Ertiga, Baleno, Fronx, and XL6. Great for reducing running costs!";
    } else if (lowerMessage.includes('safety') || lowerMessage.includes('airbag') || lowerMessage.includes('ncap')) {
      return "Safety is our priority! Dzire has 5-star GNCAP, Vitara has 5-star rating with ADAS, and Invicto has 5-star BNCAP. All models have multiple airbags.";
    }
    
    // Default responses
    const responses = [
      "I'd be happy to help you find the perfect Maruti from our 17-vehicle lineup! What are you looking for?",
      "With 17 models from ₹3.50L to ₹24.97L, we have something for everyone. Tell me about your needs!",
      "Would you like to try our AI recommendation system? It analyzes 50+ parameters to find your perfect match.",
      "I can help you compare models, check features, or book a test drive. What would you like to know?",
      "Our AR experience lets you see any of our 17 cars in your space. Would you like to try it?",
      "From fuel-efficient hatchbacks to premium SUVs, what type of vehicle are you considering?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

// Event listeners
function setupEventListeners() {
  const getRecommendationsBtn = document.getElementById('getRecommendations');
  const tryARBtn = document.getElementById('tryAR');
  const generateRecommendationsBtn = document.getElementById('generateRecommendations');

  if (getRecommendationsBtn) {
    getRecommendationsBtn.addEventListener('click', function() {
      showQuickMatches();
      // Smooth scroll to AI portal
      document.getElementById('ai-recommendations').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (tryARBtn) {
    tryARBtn.addEventListener('click', function() {
      showARExperience();
    });
  }

  if (generateRecommendationsBtn) {
    generateRecommendationsBtn.addEventListener('click', function() {
      generateAIRecommendations();
    });
  }
}

// Utility functions
function configureVehicle(vehicleName) {
  alert(`Opening 3D configurator for ${vehicleName}.\n\nFeatures:\n• Color customization\n• Variant selection\n• Accessory add-ons\n• Real-time pricing\n• 360° view\n\nThis would normally launch an interactive 3D customization tool.`);
}

function tryAR(vehicleName) {
  alert(`Launching AR experience for ${vehicleName}.\n\nAR Features:\n• Place car in your space\n• Walk around the vehicle\n• Change colors instantly\n• View interior details\n• Compare with other models\n\nThis would normally open your camera for augmented reality.`);
}

function bookTestDrive(vehicleName) {
  alert(`Booking test drive for ${vehicleName}.\n\nNext steps:\n• Choose preferred date & time\n• Select nearest dealer\n• Provide contact details\n• Confirm booking\n• Receive confirmation SMS\n\nThis would normally connect you with our dealer network.`);
}

function showARExperience() {
  // Smooth scroll to AR section
  document.getElementById('ar-showroom').scrollIntoView({ behavior: 'smooth' });
  
  // Add some visual feedback
  const arPreview = document.querySelector('.phone-mockup');
  if (arPreview) {
    arPreview.style.transform = 'scale(1.05)';
    arPreview.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
      arPreview.style.transform = 'scale(1)';
    }, 1000);
  }
}

// Smooth scrolling for navigation links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Add interactive animations
function addInteractiveAnimations() {
  // Animate cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards and sections after a short delay
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.vehicle-card, .tech-card, .testimonial-card, .usage-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }, 500);
}

// Real-time price calculator simulation
function updatePriceCalculator(vehicleName) {
  const vehicle = vehicleData.vehicles.find(v => v.name === vehicleName);
  if (!vehicle) return null;
  
  const basePrice = parseFloat(vehicle.startingPrice.replace('₹', '').replace(' Lakh', '')) * 100000;
  const insurance = Math.round(basePrice * 0.05);
  const registration = 15000;
  const total = basePrice + insurance + registration;
  
  return {
    vehicleName: vehicle.name,
    basePrice: `₹${(basePrice / 100000).toFixed(2)} Lakh`,
    insurance: `₹${(insurance / 100000).toFixed(2)} Lakh`,
    registration: '₹15,000',
    total: `₹${(total / 100000).toFixed(2)} Lakh`,
    emiApprox: `₹${Math.round(total / 60).toLocaleString()}/month`, // 5 year EMI
    mileage: vehicle.mileage,
    fuelType: vehicle.transmission.includes('CNG') ? 'Petrol/CNG' : 'Petrol'
  };
}

// Vehicle comparison functionality
function compareVehicles(vehicle1Name, vehicle2Name) {
  const v1 = vehicleData.vehicles.find(v => v.name === vehicle1Name);
  const v2 = vehicleData.vehicles.find(v => v.name === vehicle2Name);
  
  if (!v1 || !v2) return null;
  
  return {
    comparison: [
      { feature: 'Price', v1: v1.startingPrice, v2: v2.startingPrice },
      { feature: 'Mileage', v1: v1.mileage, v2: v2.mileage },
      { feature: 'Engine', v1: v1.engine, v2: v2.engine },
      { feature: 'Type', v1: v1.type, v2: v2.type },
      { feature: 'Category', v1: v1.category, v2: v2.category },
      { feature: 'Transmission', v1: v1.transmission, v2: v2.transmission }
    ]
  };
}

// Export functions for global access
window.configureVehicle = configureVehicle;
window.tryAR = tryAR;
window.bookTestDrive = bookTestDrive;
window.updatePriceCalculator = updatePriceCalculator;
window.compareVehicles = compareVehicles;