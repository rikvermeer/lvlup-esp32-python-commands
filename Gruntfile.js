module.exports = function(grunt) {

 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    commands: {
        options: {
            process: function(src, filepath) {
                console.log(filepath);
                const cmd = filepath.replace('src\/python\/commands\/','').replaceAll('/', '_').replace('.py','');
                const includes = [...src.matchAll(/#! @include (\w+)/g)].map(i => i[1]);
                includes.forEach(i => src = src.replaceAll(`#! @include ${i}`, ''));
                const params = [...src.matchAll(/#! @param (\w+)/g)].map(i => i[1]);
                params.forEach(i => src = src.replaceAll(`#! @param ${i}`, '${'+i+' ? JSON.stringify(' + i + ') : "None"}'));
                params.forEach(i => src = src.replaceAll(`#! @param ${i}`, `JSON.stringify(${i})`));
                //params.forEach(i => src = src.replaceAll(`#! @param ${i}`, `${i ? JSON.stringify(i) : 'None'}`));
                let file = ``;
                return `
// Source ${filepath}
${includes.map(i => '// Include: ' + i).join('\n')}

const ${cmd} = (${params.join(',')}) => {
    return \`
${includes.map(i => i.endsWith('.py') ? i : i + '.py').map(i => grunt.file.read('src/python/includes/' + i)).join('\n')}
${src}\`
}

export {${cmd}}`;
            },
        },
        files: { 'dist/python_commands.js': ['src/python/commands/**/**']}
    },
  },
//    commands: {
//         options: {
//            process: function(src, filepath) {
//                return src;
//            },
//                console.log(`Processing: ${filepath}`);
//                let header = '// Source' + filepath + '\n';
                
//                const includes = [...src.matchAll(/#! @includes (\w+)/g)].map(i => i[1]);
//                const include_src = includes.map(i => grunt.file.read('src/python/includes/' + i)).join('\n');
                
//                if(includes.length > 0) {
//                    header += includes.map(i=> `// Include: ${i}\n`) + '\n';
//                }
                //includes.forEach(i => src += `${grunt.file.read('src/python/includes/' + i)}\n`)

//                const params = [...src.matchAll(/#! @params (\w+)/g)].map(i => i[1])
//                params.forEach(i => src = src.replaceAll(`#! @params ${i}`, '${' + i + '}'))
                
//                const cmd = filepath.replace('src\/python\/commands\/','').replaceAll('/', '_').replace('.py','');
                //let cmd = `${header}\nconst ${cmd} = (${params.join(',')}) => { return \`${src}\`}`
//                let file = `
//${header}
//${include_src}
//const ${cmd} = (${params.join(',')}) => { 
//    return \`${src}\`
//}
//export {${cmd}}
//`;
//console.log(file);
//return file;
//              return '// Source: ' + filepath + '\n' +
//                'const ' + cmd + ' = `\n' + src + '`\n' + 'export {' + cmd  + '}\n';
//            },
//        },
//        dist: {
//          src: ['src/python/commands/**/**'],
//          dest: 'dist/python_commands.js',
//        },
//    },
//  },
  copy: {
    main: {
      files: [
        {expand: true, cwd: 'src/python', src: ['**'], dest: 'dist/'},
      ],
    },
  }
 });

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-concat');
 // Default task(s).
grunt.registerTask('default', ['concat', 'copy']);
};
