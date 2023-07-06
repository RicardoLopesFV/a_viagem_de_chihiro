
// Importando o gulp.
const gulp = require('gulp');

// Importando o sass.
const sass = require('gulp-sass')(require('sass'));

// Importando o imagemin.
const imagemin = require('gulp-imagemin');


function styles() {

    // Pegando os arquivos SCSS.
    return gulp.src('./src/styles/*.scss')

        // Transformando em CSS e minificando.
        .pipe(sass({outputStyle: 'compressed'}))

        // Enviando para o diretório CSS.
        .pipe(gulp.dest('./dist/css'));

}

function images() {

    // Pegar as imagens.
    return gulp.src('./src/images/**/*')

        // Executando a minificação de imagens.
        .pipe(imagemin())

        // Enviando para o diretório imagens.
        .pipe(gulp.dest('./dist/images'));

}

// Chamando as funcões.
exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
