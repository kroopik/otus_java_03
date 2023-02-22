--таблица «Вопросы»

CREATE TABLE public.questions (
	id int4 NOT NULL,
	"text" varchar NULL,
	CONSTRAINT questions_pk PRIMARY KEY (id)
);

--таблица «Ответы»

CREATE TABLE public.answers (
	id int4 NOT NULL,
	"text" varchar NULL,
	CONSTRAINT answers_pk PRIMARY KEY (id)
);


--таблица «Ответы на вопросы»

CREATE TABLE public.question_answers (
	id int4 NOT NULL,
	question_id int4 NULL,
	answer_id int4 NULL,
	is_correct boolean NOT NULL,
	CONSTRAINT question_answers_pk PRIMARY KEY (id)
);

ALTER TABLE public.question_answers ADD CONSTRAINT question_answers_fk FOREIGN KEY (question_id) REFERENCES public.questions(id);
ALTER TABLE public.question_answers ADD CONSTRAINT question_answers_fk_1 FOREIGN KEY (answer_id) REFERENCES public.answers(id);