import { spawn } from "child_process";
let withTaskname = <T>(name: string, fn: T) => Object.assign(fn as Function, { displayName: name });
let run = (command: string, projectPath: string) => {
    return new Promise((reslove, reject) => {
        const [cmd, ...arg] = command.split(" ");
        let app = spawn(cmd, arg, {
            cwd: projectPath,
            stdio: "inherit",//共享父进程
            shell: true
        });
        app.on("close", reslove);
    })
}



export const pathRewriter = (format: string) => {
    return (id: string) => {
        id = id.replaceAll("@yun", `yun/${format}`);
        return id;
    };
}

export {
    withTaskname,
    run
}

