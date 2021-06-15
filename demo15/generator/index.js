/**
 * @file Generator
 */
 'use strict';

 // 前置知识中提到的美化控制台输出的包
 const chalk = require('chalk');
 
 // 封装的打印函数
 const log = require('../src/utils/log');
 
 module.exports = (api) => {
   // 执行脚本
   const extendScript = {
     scripts: {
       'add-component': 'vue-cli-service add-component',
       'add-page': 'vue-cli-service add-page'
     }
   };
   // 拓展 package.json 为其中的 scripts 中添加 add-component 和 add-page 两条指令
   api.extendPackage(extendScript);
 
   // 插件安装成功后 输出一些提示 可以忽略
   console.log('');
   log.success(`Success: Add plugin success.`);
   console.log('');
   console.log('You can use it with:');
   console.log('');
   console.log(`   ${chalk.cyan('yarn add-component')}`);
   console.log('   or');
   console.log(`   ${chalk.cyan('yarn add-page')}`);
   console.log('');
   console.log('to create a component or page.');
   console.log('');
   console.log(`${chalk.green.bold('Enjoy it!')}`);
   console.log('');
};
 