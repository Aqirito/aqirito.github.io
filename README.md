# aqirito.github.io

My personal portfolio and GitHub statistics website built with SvelteKit and deployed via GitHub Pages.

## 🚀 Features

### GitHub Statistics & Analytics
- **Real-time GitHub profile data** - Live user statistics, followers, repositories
- **Contribution visualizations** - Activity graphs, streak counters, and contribution calendars
- **Language statistics** - Most used programming languages with visual charts
- **Achievement trophies** - GitHub profile achievements with multiple theme options
- **Organization contributions** - Detailed view of contributions to organizations like Kinabalu Makers

### Portfolio Sections
- **About** - Personal introduction and background
- **Experience** - Professional experience and career journey
- **Projects** - Showcase of personal and professional projects
- **Community** - Community involvement and contributions
- **Contact** - Contact information and social links

### Technical Features
- **Responsive design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance optimized** - Fast loading with lazy-loaded images and efficient API calls
- **Error handling** - Graceful fallbacks for API failures
- **TypeScript support** - Full type safety throughout the application

## 🛠️ Technologies

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack web framework
- **[Svelte 5](https://svelte.dev/)** - Modern reactive UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[GitHub REST API](https://docs.github.com/en/rest)** - For fetching repository and user data
- **[GitHub Stats APIs](https://github.com/anuraghazra/github-readme-stats)** - For generating statistics cards

## 📁 Project Structure

```
src/
├── lib/                           # Shared utilities and components
│   ├── components/               # Reusable Svelte components
│   │   ├── GitHubStats.svelte   # Main GitHub statistics component
│   │   └── OrganizationContributions.svelte # Organization-specific stats
│   ├── github.ts                # GitHub API utilities and types
│   └── index.ts                 # Library exports
├── routes/                       # SvelteKit file-based routing
│   ├── +layout.svelte           # Root layout component
│   ├── +page.svelte             # Homepage
│   ├── about/+page.svelte       # About page
│   ├── community/+page.svelte   # Community involvement
│   ├── contact/+page.svelte     # Contact information
│   ├── experience/+page.svelte  # Professional experience
│   ├── github/+page.svelte      # GitHub statistics dashboard
│   └── projects/+page.svelte    # Projects showcase
├── app.css                      # Global styles and CSS variables
├── app.d.ts                     # TypeScript declarations
└── app.html                     # HTML template
```

## 🔧 GitHub API Integration

The application integrates with multiple GitHub APIs and services:

### Core API Functions
- `fetchGitHubUser()` - Retrieve user profile information
- `fetchGitHubRepos()` - Get user repositories with sorting
- `fetchGitHubOrg()` - Organization profile data
- `fetchGitHubOrgRepos()` - Organization repositories
- `fetchUserOrgs()` - User's organization memberships

### Statistics Generation
- **GitHub Stats Cards** - Generated via github-readme-stats API
- **Language Statistics** - Top programming languages visualization
- **Contribution Streaks** - Streak statistics and graphs
- **Activity Graphs** - Contribution activity over time
- **Achievement Trophies** - GitHub profile trophies with theme customization

### Features
- **Error handling** - Graceful fallbacks when APIs are unavailable
- **Loading states** - Smooth loading indicators for better UX
- **Image optimization** - Lazy loading and error handling for generated images
- **Theme support** - Multiple visual themes for statistics cards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aqirito/aqirito.github.io.git
   cd aqirito.github.io
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
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript and Svelte checks
- `npm run check:watch` - Run checks in watch mode

## 🌐 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Automatic builds** - Triggered on pushes to main branch
2. **Static generation** - SvelteKit builds static files
3. **GitHub Pages** - Serves the built site at `https://aqirito.github.io`

### Manual Deployment
```bash
npm run build
# Deploy the 'build' directory to your hosting provider
```

## 🎨 Customization

### GitHub Username
Update the username in components to display your own GitHub statistics:
```typescript
// In GitHubStats.svelte and OrganizationContributions.svelte
export let username: string = 'YourGitHubUsername';
```

### Organization
To showcase a specific organization:
```typescript
// In OrganizationContributions.svelte
export let orgName: string = 'your-organization';
```

### Themes
The GitHub statistics support multiple themes that can be customized in the components.

## 📊 GitHub Statistics Features

### Personal Statistics
- Profile information (avatar, bio, location, company)
- Repository count, followers, following
- Most used programming languages
- Contribution streaks and activity

### Organization Contributions
- Organization profile and statistics
- Repository contributions within organizations
- Professional role and impact descriptions
- Multi-organization support

### Visual Elements
- Customizable trophy themes (neon, gradient, minimal, glass)
- Activity contribution graphs
- Language distribution charts
- Responsive design for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Site**: [https://aqirito.github.io](https://aqirito.github.io)
- **GitHub Repository**: [https://github.com/Aqirito/aqirito.github.io](https://github.com/Aqirito/aqirito.github.io)
- **SvelteKit Documentation**: [https://kit.svelte.dev](https://kit.svelte.dev)
