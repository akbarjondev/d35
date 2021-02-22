insert into routes (route_name) values
('Frontend'),
('Backend'),
('iOS Engineering'),
('Android Development'),
('Cross Mobile Development'),
('Database Management Systems'),
('API Design')
;

insert into languages (language_name) values
('JavaScript'),
('HTML'),
('CSS'),
('Go'),
('Java'),
('SQL'),
('Swift'),
('PHP'),
('C++'),
('Python'),
('Dart'),
('GraphQl'),
('TypeScript')
;

insert into stacks (stack_name, route_id) values
('React', 1),
('Cocoa Touch', 3),
('Express', 2),
('Django', 2),
('Flutter', 5),
('Apollo Server', 7),
('Postgres', 6),
('Nodejs', 2),
('Jetpack Compose', 4)
;

insert into stack_schemas (stack_id, language_id) values
(1, 1),
(2, 7),
(3, 1),
(4, 10),
(5, 11),
(6, 12),
(7, 6),
(8, 1),
(9, 5),
(1, 13)
;

insert into specializations(specialization_name) values
('Frontend Developer'),
('Backend Developer'),
('Fullstack Developer'),
('Mobile Developer'),
('Data Architect'),
('DevOps Architect')
;