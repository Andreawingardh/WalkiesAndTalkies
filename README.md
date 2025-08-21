# TankeStigen 🌿

*Thoughtful walks through Lindholmen, Gothenburg*

TankeStigen (The Thought Path) is an interactive mobile web application that combines guided walks through the historic Lindholmen district with mindful reflection. Users can explore curated locations while engaging with thought-provoking questions designed to inspire personal reflection and deeper connection with the urban environment.

## 🎯 Project Overview

This project was developed as a collaboration between web development students and UX designers, creating an innovative approach to urban exploration that blends technology, mindfulness, and local heritage.

### Key Features

- **Themed Walk Categories**: Choose from 5 categories - Views (Utsikt), Culture (Kultur), Greenery (Grönska), History (Historia), and Water (Vatten)
- **Smart Location Matching**: Get personalized location recommendations based on your selected interests
- **Mindful Questions**: Receive thought-provoking questions to contemplate during your walk
- **Real-time Navigation**: Integrated walking directions and distance calculations
- **Rich Location Content**: Discover detailed stories and historical context for each location
- **Progressive Experience**: Animated splash screen and smooth user journey

## 🗺️ Featured Locations

The app includes 12 carefully curated locations around Lindholmen:

- **Ramberget** - Panoramic city views from 87 meters above sea level
- **Slottsberget** - Historic fortress site with harbor views
- **Aftonstjärnan** - Cultural center dating back to 1915
- **Sannegårdshamnen** - Transformed industrial harbor
- **Eriksbergskajen** - Iconic red crane and waterfront
- **Färjenäsparken** - 15-hectare park beneath Älvsborgsbron
- **Lindholmens Konsthall** - Contemporary art gallery
- **Sweden's Largest Artwork** - 2,800 m² mural by HOXXOH
- *...and more historic and cultural sites*

## 🛠️ Technical Implementation

### Tech Stack
- **Frontend**: React 18 with Hooks
- **Styling**: CSS Modules for component-scoped styling
- **APIs**: 
  - GraphHopper API for walking route calculations
  - Browser Geolocation API for user positioning
  - Google Maps integration for turn-by-turn directions

### Key Components

```
src/
├── components/
│   ├── ActivityCard/          # Displays reflection questions
│   ├── CategoryBox/           # Main category selection interface
│   ├── LocationCard/          # Location details and navigation
│   ├── Distance/              # Real-time walking time calculation
│   ├── StartPage/             # Animated app introduction
│   └── Button/                # Reusable button component
├── data/
│   ├── activities.js          # 40 mindfulness questions
│   └── locations.js           # Location database with coordinates
└── assets/images/             # SVG graphics and location photos
```

### Architecture Highlights

- **State Management**: React hooks for managing user journey and data
- **Responsive Design**: Mobile-first approach with CSS modules
- **API Integration**: Geolocation and routing services for seamless navigation
- **Data Structure**: Categorized locations with rich metadata
- **User Experience**: Progressive disclosure and intuitive navigation flow

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- GraphHopper API key (for routing functionality)

### Installation

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd tankestigen
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment setup**
Create a `.env` file in the root directory:
```
VITE_GRAPHHOPPER_API_KEY=your_api_key_here
```

4. **Start development server**
```bash
npm run dev
```

5. **Open the application**
Navigate to `http://localhost:5173` in your browser

### Building for Production
```bash
npm run build
```

## 🎨 Design Philosophy

TankeStigen was designed with several core principles:

- **Mindful Technology**: Technology should enhance rather than distract from real-world experiences
- **Local Heritage**: Celebrating Lindholmen's rich industrial and cultural history
- **Accessible Exploration**: Making urban discovery available to all residents and visitors
- **Reflective Practice**: Encouraging deeper engagement with both place and self

## 📱 User Journey

1. **Welcome Animation**: Engaging intro with the TankeStigen cloud mascot
2. **Category Selection**: Choose your preferred walk theme or get a random suggestion
3. **Location Discovery**: Receive a curated location with background information
4. **Navigation**: Get walking directions and real-time distance updates
5. **Reflection**: Engage with thoughtful questions during your walk
6. **Exploration**: Read detailed location stories and discover hidden gems

## 🌍 About Lindholmen

Lindholmen is a vibrant district in Gothenburg that has transformed from an industrial shipyard area into a modern hub for education, technology, and culture. The area is home to Chalmers University of Technology, innovative companies, and rich historical sites that tell the story of Gothenburg's maritime heritage.

## 🤝 Contributing

This project was developed through collaboration between:
- **Web Development Students**: Technical implementation and functionality
- **UX Designers**: User experience research, interface design, and usability testing

We welcome contributions that enhance the user experience or expand the location database.

## 📄 License

This project is developed for educational purposes as part of a student collaboration.

## 🙏 Acknowledgments

- **GraphHopper** for routing and navigation services
- **Göteborg Stad** for location information and cultural heritage data
- **UX Design Team** for user research and interface design
- **Local historians and cultural organizations** for location stories and context

---

*TankeStigen - Where technology meets mindfulness in the heart of Gothenburg* 🌊
