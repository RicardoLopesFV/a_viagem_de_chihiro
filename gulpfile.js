
// Importando o gulp.
const gulp = require('gulp');

// Importando o sass.
const sass = require('gulp-sass')(require('sass'));

function styles() {

    // Pegando os arquivos SCSS.
    return gulp.src('./src/styles/*.scss')

        // Transformando em CSS e minificando.
        .pipe(sass({outputStyle: 'compressed'}))

        // Enviando para o diretório CSS.
        .pipe(gulp.dest('./dist/css'));

}

// Chamando as funcões.
exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
