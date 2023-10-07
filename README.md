# @codegenius/quantity-plugin

运行 `cloc` 分析并统计代码量

## 安装

```bash
npm i @codegenius/quantity-plugin -D
```

```javascript
import { defineConfig } from "code-genius";
import { quantityInstaller } from "@codegenius/quantity-plugin";

export default defineConfig({
  plugins: [quantityInstaller()],
});
```

## 使用

### 命令模式

```bash
# 统计 src 文件夹下代码情况
codeg quantity -p src
```

| 选项                | 描述         |
| ------------------- | ------------ |
| -p, --path \<path\> | 设置代码路径 |

### API 模式

```typescript
import { quantity } from "@codegenius/quantity-plugin";

(async () => {
  await quantity("./src");
})();
```
