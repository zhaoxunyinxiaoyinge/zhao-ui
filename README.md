# Zhao UI

[![npm version](https://img.shields.io/npm/v/zhao-ui.svg?style=flat)](https://www.npmjs.com/package/zhao-ui)
[![npm downloads](https://img.shields.io/npm/dm/zhao-ui.svg?style=flat)](https://www.npmjs.com/package/zhao-ui)
[![GitHub stars](https://img.shields.io/github/stars/your-username/zhao-ui.svg?style=social&label=Stars)](https://github.com/your-username/zhao-ui)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/your-username/zhao-ui/pulls)

🎨 一个基于 Vue.js  的现代化 UI 组件库，为开发者提供高质量、易用的前端组件。

## ✨ 特性

- 🚀 **高性能** - 优化的渲染性能，流畅的用户体验
- 📦 **开箱即用** - 提供丰富的基础组件，即装即用
- 🎯 **TypeScript** - 完整的 TypeScript 类型支持
- 🎨 **主题定制** - 支持灵活的主题定制和样式覆盖
- 📱 **响应式** - 完美适配桌面端
- 🔧 **易于集成** - 简单的 API 设计，快速集成到现有项目
- ♿ **无障碍** - 支持 ARIA 标准，关注无障碍访问

## 📦 安装

### 使用 npm
  # npm install zhao-ui

### 使用pnpm
  # pnpm add zhao-ui

## 🚀 快速开始
  # javascript
    // main.js 或 main.ts

    import { createApp } from 'vue'

    import App from './App.vue'

    import ZhaoUI from 'zhao-ui'

    import 'zhao-ui/dist/zhao-ui.css' // 引入样式

    const app = createApp(App)

    app.use(ZhaoUI)

    app.mount('#app')

## 📚 组件文档
    
### 基础组件

| 组件名 | 描述 | 使用示例 |
|--------|------|----------|
| `Button` | 按钮组件 | [查看详情](./src/components/Button/README.md) |
| `Input` | 输入框组件 | [查看详情](./src/components/Input/README.md) |
| `Form` | 表单组件 | [查看详情](./src/components/Form/README.md) |
| `Table` | 表格组件 | [查看详情](./src/components/Table/README.md) |
| `Modal` | 模态框组件 | [查看详情](./src/components/Modal/README.md) |
| `Select` | 选择器组件 | [查看详情](./src/components/Select/README.md) |
| `Icon` | 图标组件 | [查看详情](./src/components/Icon/README.md) |

### 布局组件

| 组件名 | 描述 | 使用示例 |
|--------|------|----------|
| `Grid` | 栅格布局 | [查看详情](./src/components/Grid/README.md) |
| `Layout` | 页面布局 | [查看详情](./src/components/Layout/README.md) |
| `Space` | 间距组件 | [查看详情](./src/components/Space/README.md) |

## 🔍 使用示例

