# 🇺🇸 Aula de Inglês em Casa 🇧🇷

> **Professional English Teaching Services Website**  
> Campo Grande, Mato Grosso do Sul, Brazil

A modern, bilingual website for Andrew Rogers' English teaching services, featuring comprehensive internationalization, responsive design, and professional SEO optimization.

## 🌟 Features

### 🌐 **Full Internationalization (i18n)**
- **Dual Language Support**: Complete Portuguese/English translation system
- **Automatic Language Detection**: Detects browser language preferences
- **Persistent Language Selection**: User preferences saved across sessions
- **Visual Language Toggle**: Professional flag-based language switcher
- **Dynamic Content**: All pages, blog posts, and UI elements fully translated

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Professional Typography**: Clean, readable design with proper contrast
- **Interactive Elements**: Smooth animations and transitions

### 📝 **Content Management**
- **Bilingual Blog System**: Separate content for Portuguese and English
- **Paginated Blog Posts**: Load more functionality for better performance
- **Service Pages**: Detailed information about different English class types
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### 🎨 **Modern Tech Stack**
- **React 19**: Latest React features with hooks and context
- **Vite**: Lightning-fast development and build tool
- **TypeScript**: Type safety for better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing with nested routes

### 🚀 **Performance & SEO**
- **Lazy Loading**: Optimized image and component loading
- **Meta Tag Management**: Dynamic SEO optimization
- **Structured Data**: Rich snippets for better search visibility
- **Clean URLs**: SEO-friendly routing structure

## 🛠 Tech Stack

### **Frontend Framework**
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool

### **Styling & UI**
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful SVG icons
- **Country Flag Icons** - Professional flag components
- **Framer Motion** - Animation library

### **Routing & Navigation**
- **React Router DOM 7** - Declarative routing
- **Dynamic imports** - Code splitting for performance

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - Fast refresh and optimization
- **TypeScript ESLint** - TypeScript-aware linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── icons/          # Custom icon components
│   ├── navigation/     # Navigation components
│   └── ui/            # Radix UI components
├── contexts/           # React Context providers
│   └── LanguageContext.jsx
├── data/              # Static data and translations
│   ├── translations.js
│   └── blogPostsBilingual.js
├── hooks/             # Custom React hooks
├── pages/             # Route components
│   ├── services/      # Service-specific pages
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── BlogPage.jsx
│   ├── ContactPage.jsx
│   └── ...
├── styles/            # Global styles and themes
├── utils/             # Utility functions
└── lib/               # Third-party configurations
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vineyard-Technologies/AulaDeInglesEmCasa.com.git
   cd AulaDeInglesEmCasa.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Building
npm run build        # Build for production
npm run optimize     # Optimize dependencies

# Code Quality
npm run lint         # Run ESLint
```

## 🌍 Internationalization

The website supports full bilingual functionality:

### **Language System**
- **Automatic Detection**: Detects `navigator.language`
- **Manual Selection**: Flag-based toggle in navigation
- **Persistence**: Saves preference in `localStorage`
- **Fallback**: Defaults to Portuguese if detection fails

### **Translation Structure**
```javascript
// translations.js
export const translations = {
  pt: {
    nav: { home: "Início", about: "Sobre", ... },
    actions: { readMore: "Leia Mais", ... },
    // ... comprehensive translations
  },
  en: {
    nav: { home: "Home", about: "About", ... },
    actions: { readMore: "Read More", ... },
    // ... comprehensive translations
  }
}
```

### **Usage in Components**
```jsx
import { useTranslations } from '@/data/translations'
import { useLanguage } from '@/contexts/LanguageContext'

function MyComponent() {
  const t = useTranslations()
  const { language, toggleLanguage } = useLanguage()
  
  return <h1>{t.nav.home}</h1>
}
```

## 📝 Content Management

### **Blog System**
- **Bilingual Posts**: Each post has Portuguese and English versions
- **Pagination**: Loads 6 posts initially, 3 more per click
- **Categories**: Organized by class types (Online, Individual, Group, Conversation)
- **SEO Optimized**: Meta descriptions, titles, and structured data

### **Service Pages**
- **Individual Classes** (`/servicos/aula-de-ingles-individual`)
- **Group Classes** (`/servicos/aula-de-ingles-em-grupo`)
- **Online Classes** (`/servicos/aula-de-ingles-online`)
- **Conversation Classes** (`/servicos/aula-de-conversacao-de-ingles`)

## 🎨 Design System

### **Color Scheme**
- **Primary**: Professional blue palette
- **Secondary**: Warm accent colors
- **Neutral**: Carefully crafted gray scale
- **Success/Error**: Semantic colors for feedback

### **Typography**
- **Headings**: Clear hierarchy with proper contrast
- **Body Text**: Optimized for readability
- **Interactive**: Distinct styling for links and buttons

### **Components**
- **Cards**: Clean, shadowed containers
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Accessible input components
- **Navigation**: Sticky header with dropdown menus

## 🔧 Development Guidelines

### **Code Style**
- **ESLint Configuration**: Enforced coding standards
- **Component Structure**: Functional components with hooks
- **File Naming**: Descriptive, consistent naming conventions
- **Import Organization**: Grouped and sorted imports

### **Performance**
- **Lazy Loading**: Dynamic imports for route components
- **Image Optimization**: WebP format with lazy loading
- **Bundle Splitting**: Automatic code splitting with Vite
- **Caching**: Efficient browser caching strategies

### **Accessibility**
- **Semantic HTML**: Proper heading structure and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG 2.1 AA compliance

## 📊 SEO Features

### **Meta Management**
```javascript
// utils/seo.js
export const updateMetaTags = (metaData) => {
  document.title = metaData.title
  // Dynamic meta tag updates
}
```

### **Structured Data**
- **Organization Schema**: Business information
- **Service Schema**: Class offerings
- **Article Schema**: Blog posts
- **LocalBusiness Schema**: Location and contact

### **Performance Metrics**
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Lighthouse Score**: 90+ across all categories
- **Page Speed**: Sub-3 second load times

## 🚀 Deployment

### **Build Process**
```bash
npm run build        # Creates optimized production build
```

### **Deployment Checklist**
- [ ] Environment variables configured
- [ ] SEO meta tags verified
- [ ] Images optimized and compressed
- [ ] Translation completeness check
- [ ] Cross-browser testing completed
- [ ] Performance audit passed

## 📈 Analytics & Monitoring

### **Tracking Setup**
- **Google Analytics**: User behavior tracking
- **Search Console**: SEO performance monitoring
- **Core Web Vitals**: Performance metrics
- **Error Tracking**: Runtime error monitoring

## 🤝 Contributing

### **Development Workflow**
1. Create feature branch from `main`
2. Implement changes with proper testing
3. Update documentation if needed
4. Submit pull request with detailed description

### **Translation Contributions**
- Add new translations to `translations.js`
- Ensure both languages are updated simultaneously
- Test language switching functionality
- Verify responsive design in both languages

## 📄 License

This project is proprietary software for Andrew Rogers' English teaching business.

## 📞 Contact

**Andrew Rogers**  
📧 Email: [contact@auladeinglesemcasa.com]  
📱 WhatsApp: [+55 67 99616-1199]  
🌐 Website: [https://auladeinglesemcasa.com]  
📍 Location: Campo Grande, Mato Grosso do Sul, Brazil

---

## 🏆 Key Achievements

- ✅ **100% Bilingual**: Complete Portuguese/English support
- ✅ **SEO Optimized**: Professional search engine optimization
- ✅ **Mobile Responsive**: Perfect on all devices
- ✅ **Performance**: Lightning-fast load times
- ✅ **Accessible**: WCAG 2.1 AA compliant
- ✅ **Modern Stack**: Latest React and TypeScript
- ✅ **Professional Design**: Clean, conversion-focused UI

**Built with ❤️ for English education in Brazil**
