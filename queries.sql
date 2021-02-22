select
	s.stack_name as name,
	r.route_name as route,
	l.language_name as language
from
	stacks as s
join routes as r on s.route_id = r.route_id
join stack_schemas as sch on s.stack_id = sch.stack_id
join languages as l on sch.language_id = l.language_id
ORDER BY s.stack_name
;