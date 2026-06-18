# 天元兴科技 TengenX

<p align="center">
  <strong>具身智能机器人 | Embodied Intelligence Robotics</strong>
</p>

<p align="center">
  <a href="README.md">中文</a> | <a href="README-en.md">English</a>
</p>

---

## 📖 关于公司

天元兴科技（TengenX）是一家专注于通用工业具身智能平台的高科技公司，以 VLM/VLA/VFA 分层架构打造下一代工业机器人。

我们致力于解决传统工业机器人研发和现场实施成本过高的痛点，端到端控制方案只需适配场景数据，无需复杂现场调试，可复制性大幅提升。

## 🚀 产品矩阵

### TX01 工业具身机器人

轮式底盘人形双臂机器人，面向工业场景柔性作业：

- **双臂系统**：14关节，单臂12kg负载
- **升降腰部**：0-2.2m作业高度
- **续航时间**：4-8小时连续作业
- **底盘选项**：4转4驱全向移动 / 两轮差速
- **安全系统**：全身力控、断电保护

### TX-CARBO 装卸机器人

智能物流一体化解决方案：

- **负载范围**：2-60kg
- **作业效率**：400循环/小时
- **工作半径**：1.8m
- **核心能力**：自主装卸货、自主拆码垛、多机协同

### TengenData 平台

低代码自训练平台，支持 4 大类视觉感知任务：

- 图像分类
- 目标检测
- 语义分割
- 异常检测

## 🧠 技术架构

采用 VLM/VLA/VFA 分层架构：

| 模型 | 功能 | 特点 |
|------|------|------|
| **VLM** (Vision-Language Model) | 场景理解和任务分解 | 灵活高效 |
| **VLA** (Vision-Language-Action Model) | 子任务执行 | 实时性好 |
| **VFA** (Vision-Fine-Action Model) | 精细操控执行 | 数据闭环 |

## 🏭 应用场景

- 柔性搬运
- 精密贴胶
- 自主装卸货
- 智能码垛

## 💼 头部客户

宁德时代、中铁、欣旺达、富士康、慈兴集团等

---

## 🛠️ 网站技术栈

本项目是天元兴科技公司官网，采用以下技术栈：

- **Next.js 16** - React 全栈框架
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 原子化 CSS
- **Framer Motion** - 动画库
- **国际化** - 中英文双语支持

## 📦 安装与运行

### 前置条件

- Node.js >= 20.x
- pnpm >= 9.x

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

访问 http://localhost:8000

### 构建生产版本

```bash
pnpm build
```

---

## 📁 项目结构

```
src/
├── app/                 # Next.js 页面
│   ├── page.tsx         # 首页
│   ├── about/           # 关于我们
│   ├── products/        # 产品页面
│   ├── contact/         # 联系页面
│   └── ...
├── components/          # 组件
│   ├── Navbar/          # 导航栏
│   ├── Footer/          # 页脚
│   ├── Logo/            # Logo
│   └── LanguageSwitcher/ # 语言切换
├── lib/                 # 工具库
│   ├── i18n.ts          # 国际化翻译
│   └── locale-context.tsx # 语言上下文
└── ...
```

---

## 📞 联系我们

- **商务合作**：business@tengenx.ai
- **媒体合作**：pr@tengenx.ai
- **地址**：广东省深圳市

---

## License

Copyright © 2024-2026 深圳天元兴科技有限公司