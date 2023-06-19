
const fs = require('fs-extra')
const generator = require('./generate')
//module.expotrs 对应 require  export 对应import
const path = require('path');
const init = require("init")
const inquirer = require('inquirer');
module.exports = async (name, options)=>{
    const cwd = process.cwd();
    const targetAir = path.join(cwd, name); 
    if (fs.existsSync(targetAir)) {
        if (options.force) {
          await fs.remove(targetAir)
        } else {
            const param = [{
                name:'aciton',
                type:"list",
                choices:[
                    {name:"replace the dir", value:"replace"},
                    {name:"delete the dir", value:"delete"},
                    {name:"cancle the creation", value:"cancle"},
                ]
            }]

            let feedback = await inquirer.prompt(param);
            let res = feedback[Object.keys(feedback)[0]] 
            if(res === "delete"){
                fs.remove(targetAir)
            }
            else if(res === "cancle"){
                return
            }

        }
    }

    const p = new generator(name,targetAir)

    p.create()
}


