const { intro, text, isCancel, cancel, select, spinner } = require('@clack/prompts')
const { readdir, readFile, writeFile } = require('node:fs/promises')
const { lstatSync } = require('node:fs')
const { resolve } = require('node:path')
const { copy } = require('fs-extra')
const { spawn } = require('node:child_process')

const templateDir = resolve(__dirname, './../templates')

function checkIsCancel(value) {
    if (isCancel(value)) {
        cancel('Exit');
        return process.exit(0);
    }
}

async function createProject(name = "newProject", dir = "") {
    return new Promise(async (res, rej) => {
        if (!dir) return;
        
        const newName = name.replace(/ /g, "")
        const newDir = resolve(__dirname, '../projects', name.replace(/ /g, "-"))
        const newPkg = resolve(newDir, 'package.json')
        await copy(dir, newDir)

        // modificar el package.json
        const pkgJSON = (await readFile(newPkg)).toString()
        const pkg = JSON.parse(pkgJSON)

        pkg.name = newName;

        await writeFile(newPkg, JSON.stringify(pkg, null, 4));

        const p = spawn('pnpm', ['install'])
        let scriptOutput = "";
        p.stdout.setEncoding('utf8');
        p.stdout.on('data', (data) => {
            console.log(`${data}`);
            data=data.toString();
            scriptOutput+=data;
        });
          
        p.stderr.on('data', (data) => {
            console.error(data);
            rej(data)
        });

        p.on('exit', () => {res()});

    })
}

async function main() {
    intro('Create Project')

    const name = await text({
        message: 'Nombre para el nuevo proyecto?',
        placeholder: 'myProject',
    });

    checkIsCancel(name);

    const s = spinner();
    s.start("Leendo templates");
    const dir = (await readdir(templateDir)).map(x => resolve(templateDir, x)).filter(x => lstatSync(x).isDirectory())
    const info = await Promise.all(dir.map(async x => {
        const pkgJSON = (await readFile(resolve(x, 'package.json'))).toString()

        const pkg = JSON.parse(pkgJSON)
        return {
            path: x,
            name: pkg.name,
            description: pkg.description,
        };
    }))
    s.stop()
    
    // seleccionar plantilla
    const template = await select({
        message: 'Selecciona una plantilla',
        options: info.map(x => ({ value: x.path, label: x.name, hint: x.description}))
    })

    checkIsCancel(template);

    await createProject(name, template)
}

main().catch(console.error);
