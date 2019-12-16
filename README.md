# YarnPatternGenerator

Project web application to save projects and generator to make blankets and patterns for blankets.
HTML5, SCSS/CSS3, React, Typescript, Laravel/php, Mariadb/SQL

* Calculate how many squares per color
* Calculate total square amount
* If size of square is inserted calculate size of blanket (cm).
* Dropdown yarn - Category

	- Corner To Corner overlay on free pattern generator.
11|19|20|24|25
10|12|18|21|23
04|09|13|17|22
03|05|08|14|16
01|02|06|07|15

	1 Database of yarn colors, 
		- color, 
		- name, 
		- number, 
		- manufacture, 
		- category, EAN (Artikelnummer, streckkod)

	2. Generate random blanket by
		- Colors
			- Select from yarn database
			- Define by color-wheel
		- Size
			- Size by squares
				- Height, number of squares
				- Width, number of squares
				- Square size
				- (Calculates the size in cm)
			- Size by cm
				- Square size
				- Height, in cm
				- Width, in cm
				- (Calculates the size in squares)
		- Exemple: squaresize: 10x10cm, height 20s, width: 10s => 200x100cm
		- Exemple: squaresize: 10x10cm, height 120cm, width 80cm => 12x8 squares
		- Color per square
		- Amount of each color in small, medium, large amount.

	3. Free paint pattern.
	4. Import picture generate blanket
	5. Generate by pattern - Already made patterns add color
	6. Generate by forms (like tetris)
	7. Pattern by temp (year-date to year-date)
		- Date 1
		- Date 2
		- Location

---------------------

Grid system
	10x10

Log in
	- Username - Email
	- Password

Save generated pattern
	- Save projects
	- Yarn
	- Name
	- Brand
	- Material
	- G (gram)
	- M (Length)
	- Needle size
	- Notes (stitch type or other notes)
	- Import image (of project or pattern example)
	- Markt as done
	- Mark as active

---------------------------------------------------------

Planerin denna veckan:

49 - Krav och View drafts.
50 - Frontend base design - HTML, CSS, REACT
51 - Generate by pattern - Database, React component draft.
52 - Generate by pattern
01 - Free paint pattern
02 - ...
03 - Testing
04 - Anything that needs extra time.
05 - redovisning
