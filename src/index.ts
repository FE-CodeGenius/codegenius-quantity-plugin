import path from "node:path";

import type { CAC } from "cac";
import { ACTIVATION, execCommand, loggerInfo } from "code-genius";

const quantity = async (dir: string) => {
  if (ACTIVATION) {
    loggerInfo(`clear 参数信息: \n${dir}`);
  }
  const root = path.join(process.cwd(), dir);
  await execCommand("npx", ["cloc", root], {
    stdio: "inherit",
  });
};

const quantityInstaller = () => {
  return {
    name: "quantity",
    describe: "运行 cloc 分析并统计代码量",
    command: "quantity",
    setup: (cli: CAC) => {
      cli
        .command("quantity", "运行 cloc 分析并统计代码量")
        .option("-p, --path <path>", "设置代码路径", {
          default: ".",
        })
        .action(async (options) => {
          const { path } = options;
          await quantity(path);
        });
    },
  };
};

export { quantity, quantityInstaller };
