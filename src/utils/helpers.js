// 格式化价格，确保两位小数
export const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

// 安全的浮点数计算
export const safeCalc = {
  add: (a, b) => {
    return parseFloat((a + b).toFixed(2));
  },
  multiply: (a, b) => {
    return parseFloat((a * b).toFixed(2));
  }
};