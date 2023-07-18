const { series, parallel, src, dest } = require("gulp");
import { buildConfig } from "./utils/config";
import { projectPath,outDir} from "./utils/path";
// 在gulp中来对ts 文件编译成js
import ts from "gulp-typescript";
import path, { dirname } from "path";
import { withTaskname } from "./utils/index"
export const buildPackages = (paths: string, names: string) => {
    //打包的格式
    let tasks = Object.entries(buildConfig).map(([name, value]) => {
        let output = path.resolve(paths+"/dist", value.output.name);
        return series(
            withTaskname(`build-${names}`, () => {
                let tsconfig = path.resolve(projectPath, "tsconfig.json");
                // 排除不需要编译的ts 文件
                let inputs = ["**/*.ts", "!gulpfile.ts", "!node_modules"];
                let tsProject = ts.createProject(tsconfig, {
                    declaration: true,//生成声明文件，
                    module: value.module,//根据配置文件生成模块名称
                    strict: false//不启用严格模式
                });
                return src(inputs).pipe(tsProject()).pipe(dest(output));
            }),
            // 对编译后的js进行打包
            withTaskname(`build-${names}`, () => {
                return src(`${output}/**`).pipe(dest(path.resolve(outDir,value.output.name,names)));
            })
        )
    })
    return parallel(...tasks);
}