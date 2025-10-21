import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
// import js from "@eslint/js";

/**
 * 兼容旧的 .eslintrc 配置
 * Next.js 15 使用新的 Flat Config 风格
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [// 基础配置：支持 Next.js + TypeScript
    ...compat.extends("next/core-web-vitals", "next/typescript"), // 忽略目录配置
    {
        ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts",],
    },

    // 自定义规则部分
    // {
    //     files: ["**/*.{mjs,js,jsx,ts,tsx}"],
    //     plugins: {
    //         prettier, // 启用 prettier 插件
    //     },
    //     rules: {
    //         /**
    //          * prettier 格式化规则
    //          */
    //         "prettier/prettier": ["warn", {
    //             singleQuote: true,  // 单引号
    //             semi: false,  // 无分号
    //             printWidth: 150,  //  80 每行宽度至多80字符，超过这个字符的行会自动折行
    //             trailingComma: "none", // 不加对象|数组最后逗号
    //             endOfLine: "auto", // 换行符号不限制（win mac 不一致）
    //         },],
    //
    //         /**
    //          * JS/TS 常用规则
    //          */
    //         "no-undef": "error", // 禁止使用未定义变量
    //         "no-unused-vars": ["warn", {argsIgnorePattern: "^_"}], // 忽略未使用的以 _ 开头的参数
    //     },
    // },

];

export default eslintConfig;


