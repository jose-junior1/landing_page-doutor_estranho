import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

function styles() {
    console.log("Compilando SCSS para CSS...");
    return gulp.src("./source/styles/main.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("./dist/css"));
}

export default gulp.series(styles);

export function watch() {
    gulp.watch("./source/styles/**/*.scss", styles);
}
