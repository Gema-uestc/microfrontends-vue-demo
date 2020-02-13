const shell = require('shelljs');

const rm = () => {
    const childrm = shell.exec('rm -rf build', { async: true });
    return new Promise((resolve, reject) => {
        childrm.stdout.on('close', function (data) {
            resolve()
        });
    })
}
const build = () => {
    const childBuild = shell.exec('lerna run build --parallel --stream', { async: true });
    return new Promise((resolve, reject) => {
        childBuild.stdout.on('close', function (data) {
            resolve()
        });
    })
}

const cp = () => {
    const copy = shell.exec(`
cp -a packages/navbar/dist/* build/navbar && 
cp -a packages/vue1/dist/* build/vue1 && 
cp -a packages/vue2/dist/* build/vue2`
        , { async: true });
    return new Promise((resolve, reject) => {
        copy.stdout.on('close', function (data) {
            resolve()
        });
    })
}


const cp2 = () => {
    const copy = shell.exec(`cp packages/root/index.html build`
        , { async: true });
    return new Promise((resolve, reject) => {
        copy.stdout.on('close', function (data) {
            resolve()
        });
    })
}
const exec = async () => {
    await rm()
    shell.exec('mkdir -p build/navbar build/vue1 build/vue2 ');
    await build()
    await cp()
    await cp2()
    shell.exec('echo "Files that will be deployed"')
    shell.sed('-i', 'http://localhost:8080', '/navbar/js', 'build/index.html');
    shell.sed('-i', 'http://localhost:8081', '/vue1/js', 'build/index.html');
    shell.sed('-i', 'http://localhost:8082', '/vue2/js', 'build/index.html');
    shell.exec(`cp build/index.html build/200.html`)



}

exec()