# Equity Edge Instant Account Trading Plan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/NIxiestone/trading-journal)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A comprehensive trading plan and journal system for managing a $50K Equity Edge Instant prop account with strict compliance to firm rules, risk management protocols, and performance tracking.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Trading Rules](#trading-rules)
- [Risk Management](#risk-management)
- [Technologies Used](#technologies-used)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## 🎯 Overview

This project provides a complete trading execution framework for Equity Edge Instant Account traders. It includes:

- **Comprehensive Trading Plan**: Detailed strategy documentation with phase-by-phase execution guidelines
- **Interactive Trading Journal**: Real-time trade logging with automatic P/L calculations and performance analytics
- **Risk Management Tools**: Built-in compliance monitoring for drawdown limits, consistency rules, and position sizing
- **Responsive Design**: Mobile-first design that works seamlessly across all devices

### Key Objectives

1. **Recover Current Loss**: $286 initial drawdown recovery
2. **Build Profit Buffer**: $1,500 required buffer (3% of account)
3. **Target Withdrawal**: $5,000 profit within 30 days
4. **Maintain Compliance**: Zero rule violations across all Equity Edge requirements

## ✨ Features

### Trading Plan (`index.html`)

- **Interactive Checklists**: Daily pre-market, trading session, and post-market checklists with persistent state
- **Mobile Responsive**: Optimized for mobile trading on the go
- **PDF Export**: One-click PDF generation for offline reference
- **Rule Documentation**: Complete Equity Edge Instant Account rules and restrictions
- **Phase-Based Strategy**: Two-phase approach from recovery to growth
- **Risk Matrix**: Visual representation of account limits and thresholds

### Trading Journal (`journal.html`)

- **Real-Time Statistics**: Live account balance, P/L tracking, and win rate calculations
- **Automatic Calculations**: Auto-compute pips, P/L, and risk-reward ratios
- **Trade History**: Comprehensive log with filtering and sorting capabilities
- **Performance Metrics**: Largest win/loss tracking and consistency rule monitoring
- **Smart Alerts**: Warning system for drawdown limits and trading restrictions
- **CSV Export**: Download complete trade history for external analysis
- **Persistent Storage**: Browser-based storage keeps your data safe between sessions

### Risk Management Features

- ✅ 15% Consistency Rule monitoring
- ✅ Daily Drawdown (3%) tracking
- ✅ Max Drawdown (5%) alerts
- ✅ Per-trade risk limit (1%) enforcement
- ✅ 2-trade daily maximum counter
- ✅ Largest win/loss ratio compliance

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation required - runs entirely in the browser

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Nixiestone/trading-journal.git
cd trading-journal
```

2. **Open the files**

Simply open `index.html` or `journal.html` in your web browser. No build process or server required.

```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### Quick Start

1. **Review the Trading Plan**: Open `index.html` to review the complete strategy
2. **Complete Daily Checklists**: Use the interactive checklists each trading day
3. **Download PDF**: Export the plan for offline reference
4. **Log Trades**: Navigate to the Journal to start logging your trades
5. **Monitor Performance**: Track your progress toward the $5,000 target

## 📁 Project Structure

```
equity-edge-plan/
│
├── index.html           # Main trading plan with interactive checklists
├── journal.html         # Trading journal with performance tracking
├── README.md           # Project documentation (this file)
│
└── assets/             # (Optional) Additional resources
    ├── screenshots/    # Application screenshots
    └── docs/          # Additional documentation
```

### File Descriptions

| File | Purpose | Key Features |
|------|---------|--------------|
| `index.html` | Trading plan documentation | Interactive checklists, PDF export, mobile-responsive |
| `journal.html` | Trade logging system | Real-time stats, auto-calculations, CSV export |
| `README.md` | Project documentation | Setup guide, usage instructions, contribution guidelines |

## 📖 Usage

### Trading Plan Workflow

1. **Morning Preparation (7:30 AM EST)**
   - Open `index.html`
   - Review Pre-Market Checklist
   - Check items as completed (state persists)
   - Download PDF if needed for mobile reference

2. **During Trading Session (8:00 AM - 12:00 PM EST)**
   - Follow Trading Session Checklist
   - Execute only on confirmed setups
   - Stop after 2 trades or daily limits

3. **Post-Market Review**
   - Complete Post-Market Checklist
   - Switch to `journal.html` to log trades
   - Review performance metrics

### Journal Workflow

1. **Add New Trade**
   - Fill in required fields (marked with *)
   - P/L and pips auto-calculate based on entry/exit
   - Click "Add Trade" to log

2. **Monitor Performance**
   - View real-time account balance
   - Check compliance with consistency rules
   - Review win rate and daily statistics

3. **Export Data**
   - Click "Export CSV" for external analysis
   - Data includes all trade details and notes

### Data Persistence

- **Checklists**: Saved in browser localStorage, reset button available
- **Trades**: Stored in browser localStorage, persists between sessions
- **Starting Balance**: Hardcoded at $49,714 (current account status)

## 📊 Trading Rules

### Equity Edge Instant Account Requirements

| Rule | Limit | Breach Consequence |
|------|-------|-------------------|
| **15% Consistency Rule** | Largest winning day ≤ 15% of total net profit | Account forfeiture |
| **Daily Drawdown** | 3% from start-of-day balance ($48,550) | Account breach |
| **Max Drawdown** | 5% from highest balance/equity ($47,250) | Account breach |
| **Risk Per Trade** | 1% maximum ($497.14 currently) | Instant violation |
| **Profit Buffer** | First $1,500 is non-withdrawable | Cannot withdraw until met |
| **Weekend Holding** | No positions over weekend | Auto-close Friday |
| **News Restriction** | 8-minute buffer before/after high-impact news | Profit deduction |
| **Trade Duration** | Average must exceed 2 minutes | Gambling flag |
| **Max Trades** | 2 per day recommended | Consistency maintenance |

### Prohibited Behaviors

- ❌ Trading during news windows
- ❌ Excessive leverage or martingale strategies
- ❌ Splitting trades to bypass limits
- ❌ Using expert advisors (EAs)
- ❌ Copy trading services

## 🛡️ Risk Management

### Position Sizing

```javascript
// Phase 1: Recovery + Buffer Building
Risk per trade: 0.8% ($397)
Stop loss: 1.5 ATR
Take profit: 3:1 Risk-Reward

// Phase 2: Accelerated Growth
Risk per trade: 0.9% ($463)
Stop loss: 1.5 ATR
Take profit: 3:1 Risk-Reward
```

### Daily Limits

- **Maximum Daily Loss**: $800 (1.6% - safe buffer below 3% rule)
- **Maximum Daily Profit**: 
  - Phase 1: $500
  - Phase 2: $700
- **Maximum Trades**: 2 per day

### Strategy Rules

1. **Trend Confirmation Required**: Price above 20 EMA & 50 SMA for longs
2. **Pullback Signal**: Price must touch 20 EMA
3. **Momentum Filter**: RSI in 40-45 zone
4. **Price Action Trigger**: Bullish engulfing or pin bar
5. **News Clearance**: No trades within 8 minutes of high-impact news

## 🔧 Technologies Used

### Core Technologies

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features and calculations

### Libraries & APIs

| Library | Version | Purpose |
|---------|---------|---------|
| [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 | PDF generation |
| [html2canvas](https://github.com/niklasvh/html2canvas) | 1.4.1 | HTML to canvas conversion |
| localStorage API | Native | Data persistence |

### Design Principles

- **Mobile-First**: Responsive design starting from 320px width
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: Semantic HTML and ARIA labels where appropriate
- **Performance**: Minimal dependencies, optimized asset loading

## 🌐 Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Android 5.0+ | ✅ Fully Supported |

### Required Browser Features

- localStorage API
- ES6 JavaScript support
- CSS Grid and Flexbox
- HTML5 input types (date, time, number)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and formatting
- Test on multiple browsers before submitting
- Update documentation for any new features
- Add comments for complex logic
- Ensure mobile responsiveness

### Areas for Contribution

- 🐛 Bug fixes and error handling
- 📱 Mobile UX improvements
- 📊 Additional performance metrics
- 🌐 Internationalization (i18n)
- 🎨 Theme customization options
- 📈 Advanced charting integration
- 🔔 Notification system for alerts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Blessing Omoregie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Blessing Omoregie**

- GitHub: [@blessingomoregie](https://github.com/Nixiestone)
- LinkedIn: [Blessing Omoregie](https://linkedin.com/in/nixiex001)
- Email: omoregieblessing52@gmail.com

## 🙏 Acknowledgments

- **Equity Edge**: For providing the prop trading opportunity
- **Trading Community**: For valuable feedback and strategy refinement
- **Open Source Contributors**: For the excellent libraries used in this project

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check Documentation**: Review this README and inline code comments
2. **Search Issues**: Look through [existing issues](https://github.com/Nixiestone/trading-journal/issues)
3. **Create Issue**: Open a [new issue](https://github.com/Nixiestone/trading-journal/issues/new) with details
4. **Community**: Join discussions in the repository

## 🔄 Version History

### v1.0.0 (Current)
- ✅ Initial release
- ✅ Complete trading plan documentation
- ✅ Interactive trading journal
- ✅ PDF export functionality
- ✅ Mobile-responsive design
- ✅ Risk management tracking
- ✅ CSV export for trade history

### Roadmap

- [ ] v1.1.0: Advanced charting integration
- [ ] v1.2.0: Multi-account support
- [ ] v1.3.0: Cloud sync capabilities
- [ ] v1.4.0: Notification system
- [ ] v2.0.0: Desktop application (Electron)

---

## ⚠️ Disclaimer

This trading plan is for educational purposes only. Trading involves substantial risk of loss. Past performance is not indicative of future results. Always conduct your own research and consult with financial professionals before trading. The author is not responsible for any trading losses incurred using this system.

**Risk Warning**: Trading leveraged products such as forex and CFDs may not be suitable for all investors as they carry a high degree of risk to your capital.

---

<div align="center">

**Built with ❤️ by Blessing Omoregie**

[⬆ Back to Top](#equity-edge-instant-account-trading-plan)

</div>