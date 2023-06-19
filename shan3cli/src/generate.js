const {
    getRepoList,
    getTagList
} = require('./utils')
const path = require('path')
const axios = require("axios")
const inquirer = require('inquirer')
const chalk = require('chalk')
const downloadGitRepo = require('download-git-repo') // 不支持 Promise
class generator{
    constructor(name, dir){
        this.name = name;
        this.targetDir = dir;


    }
    async download(){
        
        downloadGitRepo("kssssssss28/Template", this.name,path.resolve(process.cwd(), this.name),(err)=>{
            console.log("")
        })
}


    async create(){

        // 3）下载模板到模板目录
        await this.download();

        console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`)
    }
}
module.exports = generator;