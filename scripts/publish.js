const { readdir, lstatSync, readFile, copy, writeFile } = require('fs-extra')
const { resolve, join } = require('node:path')
var ghpages = require('gh-pages');

const buildPath = resolve(__dirname, '../dist')
const projectPath = resolve(__dirname, '../projects')

async function build() {
    // 1 leer todos los projectos
    const projectsList = (await readdir(projectPath))
        .map(x => {
            return {
                path: resolve(projectPath, x),
                folderName: x,
                projectPath: join('projects', x)
            }
        }).filter(x => lstatSync(x.path).isDirectory())

    // 2 leer package.json
    const projects = await Promise.all(projectsList.map(async x => {
        const pkgJSON = (await readFile(resolve(x.path, 'package.json'))).toString()

        const pkg = JSON.parse(pkgJSON)

        return {
            ...x,
            ...pkg,
            isBuild: !!pkg.scripts.build
        }
    }))

    let listHtml = ""

    // 2.1 copear todos lo projectos que no tengan script:build en package.json
    for (const p of projects) {
        await copy(resolve(p.path, !p.isBuild ? 'src': 'dist'), resolve(buildPath, p.folderName))

        listHtml += `
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <a href="./${p.folderName}" class="text-decoration-none fw-bold d-block">${p.name}
                        </a>
                        <span>${p.description}</span>
                        <div>
                            ${(p.keywords ?? []).map(x => `<span class="badge text-bg-secondary me-2">${x}</span>`).toString().replace(/,/g, '')} 
                        </div>
                    </div>
                    <a href="https://github.com/fvcoder/project/tree/main/projects/${p.folderName}" class="link-secondary text-decoration-none">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        view in Github
                    </a>
                </li>
        `
    }

    const html = (await readFile(resolve(__dirname, '../index.html'))).toString()

    await writeFile(resolve(buildPath, 'index.html'), html.replace(/<%ListItems%>/, listHtml))

    // subir a guthub pages
    ghpages.publish('dist', e => {
        console.error(e)
    })
}

build();
