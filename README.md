# 购物车项目
基于 React + Vite 实现的购物车项目，包含商品列表、购物车功能等。

## 功能

- 显示商品列表，包含名称、图片、价格、尺寸等信息
- 每个商品可以选择尺寸和数量
- 点击添加到购物车按钮，将商品添加到购物车
- 购物车页面显示已添加的商品，包括名称、图片、价格、尺寸、数量等信息
- 可以减少或删除购物车中的商品
- 显示购物车总价

## 技术栈

- React
- Vite
- javaScript

## 组件

- `Header`：页面头部组件，显示标题和购物车图标
- `ProductList`：商品列表组件，显示所有商品
- `ProductCard`：商品卡片组件，显示单个商品的信息
- `SizeFilter`：尺寸筛选组件，允许用户选择商品尺寸
- `PriceSort`：价格排序组件，允许用户根据价格高低对商品进行排序
- `Cart`：购物车组件，显示购物车中的商品和总价
- `CartItem`：购物车Item组件，显示购物车中的单个商品
- `SizeSelector`：尺寸选择器组件，允许用户选择商品尺寸
- `Loading`：加载动画组件，在数据加载时显示

## 项目结构
src/
├── components/
│   ├── Header.jsx         # 页面头部组件
│   ├── ProductList.jsx    # 商品列表组件
│   ├── ProductCard.jsx    # 商品卡片组件
│   ├── SizeFilter.jsx     # 尺寸筛选组件
│   ├── PriceSort.jsx      # 价格排序组件
│   ├── Cart.jsx           # 购物车组件
│   ├── CartItem.jsx       # 购物车Item组件
│   ├── SizeSelector.jsx   # 尺寸选择器组件
│   └── Loading.jsx        # 加载动画组件
├── context/
│   └── CartContext.jsx    # 购物车上下文
├── data/
│   └── products.js        # 模拟商品数据
└── utils/
    └── helpers.js         # 辅助函数

# 使用步骤

1. 克隆项目 git clone xxx
2. 安装依赖 npm install
3. 启动项目 npm run dev
4. 访问 http://localhost:8888 查看项目

## 注意事项 
数据使用的是模拟数据，如果需要修改 data/products.js 文件， 所以如果需要真实数据，就自己封装请求吧
