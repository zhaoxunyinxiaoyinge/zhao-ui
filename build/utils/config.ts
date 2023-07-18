import path from 'path';
import { outdir } from "./outdir";

export const buildConfig = {
    esm: {
        module: 'ESNext',
        format: "esm",
        output: {
            name: 'es',
            path: path.resolve(outdir, "es")
        },
        bundle: {
            path: "zha-ui/es"
        }
    },
    cjs: {
        module: 'CommonJs',
        format: "cjs",
        output: {
            name: 'lib',
            path: path.resolve(outdir, "lib")
        },
        bundle: {
            path: "zha-ui/lib"
        }
    },
}

export type BuildConfig=typeof buildConfig;