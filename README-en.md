# TengenX Technology

<p align="center">
  <strong>Embodied Intelligence Robotics</strong>
</p>

<p align="center">
  <a href="README-en.md">English</a> | <a href="README.md">中文</a>
</p>

---

## 📖 About Us

TengenX is a high-tech company focused on universal industrial embodied intelligence platform, building next-generation industrial robots with VLM/VLA/VFA layered architecture.

We are committed to solving the pain points of traditional industrial robotics - excessively high R&D and implementation costs. Our end-to-end control solution requires only scenario data adaptation, no complex on-site debugging, greatly improving replicability.

## 🚀 Product Matrix

### TX01 Industrial Embodied Robot

Wheel-based humanoid dual-arm robot for industrial flexible operations:

- **Dual-Arm System**: 14 joints, 12kg payload per arm
- **Lifting Waist**: 0-2.2m operation height
- **Battery Life**: 4-8 hours continuous operation
- **Chassis Options**: 4-wheel omnidirectional / 2-wheel differential
- **Safety System**: Full-body force control, power-off protection

### TX-CARBO Loading/Unloading Robot

Intelligent logistics integrated solution:

- **Payload Range**: 2-60kg
- **Efficiency**: 400 cycles/hour
- **Working Radius**: 1.8m
- **Core Capabilities**: Autonomous loading/unloading, palletizing, multi-robot coordination

### TengenData Platform

Low-code self-training platform supporting 4 major visual perception tasks:

- Image Classification
- Object Detection
- Semantic Segmentation
- Anomaly Detection

## 🧠 Technical Architecture

VLM/VLA/VFA layered architecture:

| Model | Function | Feature |
|-------|----------|---------|
| **VLM** (Vision-Language Model) | Scene understanding & task decomposition | Flexible & efficient |
| **VLA** (Vision-Language-Action Model) | Sub-task execution | Real-time |
| **VFA** (Vision-Fine-Action Model) | Fine manipulation execution | Data closed-loop |

## 🏭 Application Scenarios

- Flexible handling
- Precision tape application
- Autonomous loading/unloading
- Intelligent palletizing

## 💼 Leading Customers

CATL, CRRC, Sunwoda, Foxconn, Cixing Group, etc.

---

## 🛠️ Website Tech Stack

This is the official website of TengenX, using:

- **Next.js 16** - React full-stack framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Atomic CSS
- **Framer Motion** - Animation library
- **i18n** - Chinese/English bilingual support

## 📦 Installation & Running

### Prerequisites

- Node.js >= 20.x
- pnpm >= 9.x

### Install Dependencies

```bash
pnpm install
```

### Local Development

```bash
pnpm dev
```

Visit http://localhost:8000

### Build for Production

```bash
pnpm build
```

---

## 📁 Project Structure

```
src/
├── app/                 # Next.js pages
│   ├── page.tsx         # Homepage
│   ├── about/           # About us
│   ├── products/        # Products page
│   ├── contact/         # Contact page
│   └── ...
├── components/          # Components
│   ├── Navbar/          # Navigation bar
│   ├── Footer/          # Footer
│   ├── Logo/            # Logo
│   └── LanguageSwitcher/ # Language switcher
├── lib/                 # Utilities
│   ├── i18n.ts          # i18n translations
│   └── locale-context.tsx # Locale context
└── ...
```

---

## 📞 Contact Us

- **Business**: business@tengenx.com
- **Media**: pr@tengenx.com
- **Location**: Shenzhen, Guangdong, China

---

## License

Copyright © 2024-2026 Shenzhen TengenX Technology Co., Ltd.