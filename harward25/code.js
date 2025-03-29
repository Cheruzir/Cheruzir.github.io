//SELECT course.course_code AS "Код курса",
//       trainer.trainer_name AS "Тренер",
//       count(*)*(course.course_price) AS income
//FROM product
//JOIN app ON app.product=product.product_id
//JOIN course ON course.course_id=product.product_course
//JOIN trainer ON trainer.trainer_id=product.product_trainer
//GROUP BY course.course_code,
//         trainer.trainer_name,
//         course.course_price
//ORDER BY income DESC;

// SELECT * FROM `USERS` WHERE `NAME` LIKE 'Мышь%';