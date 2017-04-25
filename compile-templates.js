var handlebars = require("gulp-handlebars");
var wrap = require("gulp-wrap");
var declare = require("gulp-declare");
var concat = require("gulp-concat");

gulp.task("compile-templates", function() {
  gulp.src("templates/*.handlebars")
    .pipe(handlebars())
    .pipe(wrap("Handlebars.template(<%= contents %>)"))
    .pipe(declare({
      namespace: "HBTemplates",
      noRedeclare: true
    }))
    .pipe(concat("atomic-power.js"))
    .pipe(gulp.dest("script"));
});
