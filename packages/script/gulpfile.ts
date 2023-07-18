import { src, dest, series } from "gulp";
import { run, withTaskname } from "../../build/utils";
import { projectPath } from "./../../build/utils/path";

const copypackage = async () => {
  return src(`./package.json`).pipe(dest(`${projectPath}/dist/zhao-ui`));
};
//发布任务
const publish = async () => {
  //先给transitpkg升个版本
  await run('pnpm version patch', projectPath)
  //复制到dist目录
  await copypackage()
  //在dist下执行发布命令
  await run('pnpm publish', projectPath)
  // run('pnpm publish')
}

export default series(
    publish
)