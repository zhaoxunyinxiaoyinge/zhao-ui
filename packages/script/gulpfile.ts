import { src, dest, series } from "gulp";
import { run } from "../../build/utils";
import path from "path";

// 复制 package.json 到 dist 目录
const copypackage = async () => {
  return src(path.resolve(__dirname, "./package.json"))
    .pipe(dest(path.resolve(__dirname, "../../dist")));
};

// 复制组件的 ES 模块到 dist/es
const copyComponentEs = async () => {
  return src(path.resolve(__dirname, "../compnents/dist/es/**"))
    .pipe(dest(path.resolve(__dirname, "../../dist/es")));
};

// 复制组件的 Lib 模块到 dist/lib
const copyComponentLib = async () => {
  return src(path.resolve(__dirname, "../compnents/dist/lib/**"))
    .pipe(dest(path.resolve(__dirname, "../../dist/lib")));
};

// 发布任务
const publish = async () => {
  // 升级版本号
  // await run("pnpm version patch", path.resolve(__dirname, "../../"));
  // 复制文件
  await copypackage();
  await copyComponentEs();
  await copyComponentLib();

  console.log("文件已成功复制到 dist 目录");
};

export default series(publish);