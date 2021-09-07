--create database  lesson_4;
--create table products (
--	id uuid primary key default uuid_generate_v4(),
--    title text not null,
--    description text,
--    price integer
--);

--create table Stocks (
--	product_id uuid primary key default uuid_generate_v4(),
--    count serial NOT NULL,
--    foreign key("product_id") references "products" ("id")
--);


--insert into products (product_id) values
--('Directors Cut','SEVENTEEN Special Album - Directors Cut (SET Ver.) 2CD', 30.5),
--('Chaos Chapter : FIGHT OR ESCAPE','TXT Album - Chaos Chapter : FIGHT OR ESCAPE (ESCAPE : RANDOM Ver.) CD', 10.30),
--('Light Stick','ATEEZ Official Light Stick', 38.61),
--('Changer : Dear Eris CD','A.C.E 2nd Repackage Album - Changer : Dear Eris CD + Poster', 18.90),
--('Light Stick','EXO Official Light Stick Ver 3.0', 39.81)
--
--insert into Stocks (title, description, price) values
--('00a1a570-6ed8-4de5-86e2-58a00791ddf4'),
--('70f10d7e-cc48-49d7-8060-20fe62382499'),
--('c98dd6ff-b8b3-4326-93c9-a74d7c60a26b'),
--('d5cd00b0-9f98-4854-9e20-bfd4405edc2a'),
--('7ccfccf0-bd8c-4036-a13c-a47fefc62092')

--create extension if not exists "uuid-ossp";


