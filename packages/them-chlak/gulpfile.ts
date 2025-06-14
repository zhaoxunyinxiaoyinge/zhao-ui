import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";
import { projectPath } from "./../../build/utils/path";

import {src,series,dest,parallel} from "gulp"
console.log("打包样式")
  
const complie = () => {
    const sass = gulpSass(dartSass);
    
    return src(path.resolve(__dirname, "./src/*.scss")).pipe(sass.sync()).pipe(autoprefixer()).pipe(cleanCss()).
        pipe(dest("./dist/css"))
    }

const copy = () => {
    return src(path.resolve(__dirname, "./src/font/**")).pipe(cleanCss()).pipe(dest('./dist/font'))
}

const copyStyle = () => {
    return src(path.resolve(__dirname, "./dist/**")).pipe(dest(projectPath + "/dist/them-chalk"));
}

export default series(
    complie,
    copy,
    copyStyle
)