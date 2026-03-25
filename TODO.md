# Task: Jesse 个人主页开发

## Plan
- [x] 基础环境配置
  - [x] 更新 `tailwind.config.js` 扩展颜色
  - [x] 更新 `src/index.css` 定义全局样式与渐变
- [x] 开发核心组件
  - [x] `Navbar`: 顶部导航，支持平滑滚动与移动端汉堡菜单
  - [x] `HeroSection`: 头像、姓名、介绍，科技感背景
  - [x] `AboutSection`: 个人信息展示卡片
  - [x] `ChatSection`: 数字分身对话逻辑与 UI
- [x] 页面整合与优化
  - [x] 修改 `src/routes.tsx` 配置主路由
  - [x] 在 `src/pages/Home.tsx` 整合所有区块
  - [x] 实现平滑滚动逻辑
- [x] 图片资源获取
  - [x] 使用 `image_search` 获取合适的头像与背景图
- [x] 最终检查
  - [x] 运行 `npm run lint` 修复问题
  - [x] 确认移动端适配

## Notes
- 整体风格：简约、科技感、紫色/深蓝色渐变。
- 数字分身：前端模拟对话，预设知识库。
- 不使用 Supabase，纯前端实现。
