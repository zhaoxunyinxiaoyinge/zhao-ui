const { series } = require("gulp");
import { run, withTaskname } from "./utils/index";
import {ComponentsRoot, projectPath} from "./utils/path"

// 清理根目录下的dist文件夹
const cleanDist=withTaskname("clean", async() => run('rm -rf ./../dist',projectPath));

// 执行操作，去，packages下的compnents下的buid 命令
const buildCmd= withTaskname("buildPackage",async() => run('npx pnpm run  --parallel build --filter ./packages',projectPath));

//对组件进行打包
const buildAllComponent=withTaskname("buildFullComponent", async () =>
     run("npx pnpm run rollup",ComponentsRoot)
);

export default series(
  cleanDist,
  buildCmd,
  buildAllComponent,
)

