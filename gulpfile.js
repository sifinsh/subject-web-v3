var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    cache = require('gulp-cache'),
    pug = require('gulp-pug'),
    notify = require("gulp-notify"),
    plumber = require("gulp-plumber"),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


// 样式
gulp.task('styles', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            precision: 10
        }))
        .pipe(autoprefixer({
            browsers: ["chrome 30", "Firefox < 20", "ios_saf 8", "safari 8", 'Android >= 4.1', 'IE 9', 'IE 10']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(reload({ stream: true }));
});


// 脚本
gulp.task('scripts', function () {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(reload({ stream: true }));
});


// 图片
gulp.task('images', function () {
    return gulp.src('./src/images/**/*')
        // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./dist/images'));
});


// 页面
gulp.task('views', function () {
    return gulp.src('./src/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream: true }));
});


// 库文件
gulp.task('comps', function () {
    return gulp.src('src/comps/**/*')
        .pipe(gulp.dest('dist/comps'));
});


// 清理
gulp.task('clean', function () {
    return gulp.src(['./dist/'], { read: false })
        .pipe(clean());
});


// 主构建
gulp.task('build', ['clean'], function () {
    gulp.start('views', 'styles', 'scripts', 'images', 'comps');
});


/**
 * 默认任务
 * 初始化一次构建任务
 * 启动browsersync服务器，监听dist文件
 * 监听src文件变动，并执行对应的构建任务
 */
gulp.task('default', ['build'], function () {

    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    // 看守所有.scss档
    gulp.watch('./src/styles/**/*', ['styles']);

    // 看守所有.js档
    gulp.watch('./src/scripts/**/*.js', ['scripts']);

    // 看守所有图片档
    gulp.watch('./src/images/**/*', ['images']);

    // 看守所有页面
    gulp.watch('./src/**/*.pug', ['views']);

    gulp.watch('./src/comps/**', ['comps']);
});