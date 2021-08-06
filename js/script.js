
let webImage = document.querySelectorAll(".webimage");		//get all images in the questions
// ------------------------Available Subjects--------------------------------------------------

const qDSA = [
	["A graph is a collection of nodes, called _____ and line segments called arcs or ______ that connect pair(s) of nodes.",
	"vertices, paths","vertices, edges","graph node, edges","edges, vertices","B"],
	
	["In ________, searching starts at the beginning of the list and checks every element in the list.",
	"Binary search","Heap search","Linear search","Binary Tree search","C"],
	
	["In the _________ traversal, we process all of vertex's descendants before we move to an adjacent vertex.",
	"Breadth-First","Root-First","Node-First","Depth-First","D"],
	
	["Which of these data structure is suitable for representation of hierarchical relationship between elements?",
	"Graph","Trees","Stack","Queue","B"],
	
	["Which of the following data structure is linear?",
	"Binary Tree","Trees","Linked List","Graph","C"],
	
	["________ is a pile in which items are added at one end and removed from the othe other.",
	"Array","Queue","Stack","List","B"],
	
	["The number of comparisons done by sequential search is ______",
	"(N/2)+1","(N+1)/2","(N-1)/2","(N-2)/2","B"],
	
	["_______ operation can not be performed on Queue.",
	"Trasversal","Deletion","Insertion","Retrieval","A"],
	
	["Which of the following sorting algorithm is the slowest?",
	"Shell sort","Merge sort","Heap sort","Bubble sort","D"],
	
	["Which of the following data structure can be used to represent many-to-many relation?",
	"B-Tree","Graph","Binary Tree","All of the above","B"],
	
	["Which of the following data structure is more appropriate to represent a heap?",
	"Two-dimensional array","Doubly Linked List","Linear Array","Linked List","C"],
	
	["Minimum number of fields in each node of a doubly linked list is _______",
	"5","2","3","4","C"],
	
	["A graph is a tree if and only if graph  ______",
	"is a Directed Graph","contains no cycles","is planar","is completely connected","B"],
	
	["Which of the following is not divide-and-conquer approach?",
	"Merge sort","Insertion sort","Shell sort","Quick sort","B"],
	
	["Visiting root node after visiting left and right sub-trees is called _______",
	"In-oder Trasversal","Pre-order Trasversal","Post-order Trasversal","Order Trasversal","C"],
	
	["What about recursion is true in comparison with iteration?",
	"very expensive in terms of memory","low performance","every recursive program can be written with iteration too.","all of the above","D"],
	
	["In binary heap, whenever the root is removed then the rightmost element of last level is replaced by the root. Why?",
	"it is the easiest posible way.","to make sure that it is still a complete binary tree","because left and right subtree might be missing.","None of the above","B"],
	
	["In doubly linked lists _______",
	"a pointer is maintained to store both next and previous nodes.","two pointers are maintained to store next and previous nodes","a pointer to self is maintained for each node","none of the above","B"],
	
	["If there's no base case in a recursive program, the program will ________",
	"not be executed.","execute until all conditions are met","execute inifinitely","obtain progresive approach.","C"],
	
	["A pivot element to partition unsorted list is used in ________",
	"Merge sort","Insertion sort","Selection sort","Quick sort","D"],
	
	["A stable sorting algorithm does not _________",
	"crash","run out of memory","change the sequence of appearance of elements","exist","C"]
			
			]
const qEnglish = [
	["Our instructor gave us the impression that the problem was <span style='text-decoration:underline;'>complicated</span> but we found it ________",
	"light","mysterious","simple","hard","C"],

	["It is no longer a matter of <span style='text-decoration:underline;'>choice</span> but ________ to have basic education in our country.",
	"request","command","determination","compulsion","D"],

	["Despite Joseph's claim that he killed the dog _________, the owner insists that he did it <span style='text-decoration:underline;'>deliberately</span>.",
	"instantly","accidentally","angrily","forcefully","B"],

	["If our <span style='text-decoration:underline;'>ancestors</span> preserved the culture for us, why can't we do the same for our _________?",
	"siblings","kinsmen","predecessors","descendants","D"],

	["While Mr. Samson is <span style='text-decoration:underline;'>theoretical</span> about upbringing of children, his wife is _________.",
	"pragmatic","subjective","sceptical","logical","A"],

	["Whether you <span style='text-decoration:underline;'>commend</span> the boys or _________ them, they are determined to do their best.",
	"control","confuse","condemn","abuse","C"],

	["The <span style='text-decoration:underline;'>hope</span> with which he assumed office contrasts with the _________ with which he is leaving.",
	"disgust","distress","distrust","despair","D"],

	["The <span style='text-decoration:underline;'>landing</span> of a plane is more frightening than its _________",
	"taxiing","take-off","flying","descent","B"],

	["I prefer the <span style='text-decoration:underline;'>exact</span> rather than an  _________ figure.",
	"elusive","appropriate","approximate","inflated","C"],

	["Although the students were <span style='text-decoration:underline;'>content</span> with the new welfare arrangement, their representatives were _________ with it",
	"annoyed","unhappy","discouraged","dissatisfied","D"],

	["The car crashed into a _________ vehicle when the driver lost control.",
	"stationary","stagnant","stationed","stationery","A"],

	["I told you before the match started that my team would _________ yours.",
	"win","lose","beat","score","C"],

	["The Literature teacher instructed us to memorize the first and second _________ of the poem.",
	"stanzas","chapters","paragraphs","sections","A"],

	["Gambo was arrested while _________ his late brother as a military oficer.",
	"imitating","personifying","impersonating","copying","C"],

	["Some church members came to _________ with me on the death of my father.",
	"counsel","console","commiserate","associate","C"],

	["On that _________ day, nearly five hundred people died in a pipeline explosion.",
	"faithful","unhappy","fateful","frightful","C"],

	["He came to the _________ only two years ago when he won a gold medal.",
	"show","front","limelight","position","C"],

	["The Road Safety officials will soon be _________ by the government to carry guns.",
	"authorized","expected","invited","approved","A"],

	["The sale of certain drugs is <span style='text-decoration:underline;'>restricted</span> to adults.",
	"limited","confined","extended","controlled","A"],

	["His attempts to claim the child proved <span style='text-decoration:underline;'>futile</span>.",
	"uncertain","abortive","senseless","risky","B"],

	["These days, most businessmen are very <span style='text-decoration:underline;'>crafty</span>.",
	"extravagant","skillful","cunning","wise","C"],

	["This kind of music is <span style='text-decoration:underline;'>inappropriate</span> for such a solemn ceremony.",
	"unfashionable","indecent","unsuitable","insufficient","C"],

	["The clash between the two communities was a great <span style='text-decoration:underline;'>calamity</span>.",
	"shame","disaster","accident","problem","B"],

	["The negotiations ended <span style='text-decoration:underline;'>amicably</span> to the surprise of the warring factions.",
	"violently","abruptly","harmoniously","suspiciously","C"],

	["We did not like him because he was <span style='text-decoration:underline;'>headstrong</span>.",
	"wicked","rude","unreliable","stubborn","D"],

	["His mission was to <span style='text-decoration:underline;'>enlighten</span> his people about the proposed project.",
	"strengthen","remind","educate","task","C"],

	["The Council of Elders _________ advised youths to desist from telling lies.",
	"have","have been","has","has been","C"],

	["On my way to the airport, I _________ an old classmate.",
	"ran by","ran in","ran into","ran across","C"],

	["Their ideas are similar, aren't they? Yes, _________ .",
	"there are","are they","they are","it is","C"],

	["The team was to leave Lagos _________ Accra at 4.15 a.m. on Tuesday.",
	"for","to","from","by","A"],
];
const qMathsSenior = [
	["Express 10000800 in standard form.",
	"1.00008 x 10<sup>7</sup>","1.00008 x 10<sup>5</sup>","1.00008 x 10<sup>2</sup>", "1.00008 x 10<sup>-7</sup>", "A"],

	["Evaluate 11011<sub>two</sub> + 11110<sub>two</sub>",
	"111010<sub>two</sub>","111001<sub>two</sub>","110001<sub>two</sub>","101001<sub>two</sub>","B"],
	
	["Let U = {1,2,3,4, ..., 10},<br>A = {odd numbers up to 9} and<br>B = {numbers less than 7}.<br><br>Find A ᴜ U",
	"{1,2,3,4,5,6,7,8,9,10}","{1,2,3,4,5,6,7,9}","{1,3,5,7,8,9,10}","{1,2,3,4,10}","A"],

	["Evaluate (3√3-√6)(√6+3√3)",
	"21","16","12", "9", "A"],
	
	["Express 0.0040752 to three significant figures.",
	"0.00475","0.0041","0.00408", "0.004", "C"],
	
	["The product of three numbers is 3876. Two of the numbers are 17 and 19. What is the third number?",
	"57","12","6", "3", "B"],
	
	["Find the 6th term of the Geometric Progression (G.P) -108, -36, -12, ....",
	"2<small>1/4</small>","4/9","-4/9", "-1<small>1/3</small>", "C"],
	
	["Given that ¼log<sub><small>10</small></sub> M = 10<sup><small>0</small></sup>. Find the value of M",
	"10000","1000","4", "10", "A"],
	
	["Th sum of an Arithmetic Progression(A.P.) is 561. If the first and last terms are 2 and 100 respectively, find the number of terms",
	"13","11","10", "6", "B"],
	
	["Find the principal which amounts to ₦72,800.00 at simple interest in 4 years at 3% per annum.",
	"₦68,736.00","₦67,800.00","₦65,000.00", "₦8,736.00", "C"],
	
	["Solve the simultaneous equations:<br>3x - 5y = 5, x + 10y = 4",
	"x = 2, y = 1/5","x = -1/5, y = 2","x = -1/5, y = -2", "x = 1/2, y = 1/5", "A"],
	
	["Calculate the compound interest, if ₦120,000.00 is borrowed for 3 years at 16% per annum.",
	"₦187,307.52","₦167,307.52","₦67,307.52", "₦21,307.52", "C"],
	
	["Find the value of x for which x<sup>2</sup>-4/2(x+5) is undefined.",
	"5","2","-4", "-5", "D"],
	
	["For what value of k is the expression 4x<sup>2</sup> + 8x + k a perfect square?",
	"64","32","16", "8", "C"],
	
	["Find the gradient and y-intercept of line 2x - 5y = 10.",
	"3/5, 3","2/5, -2","1/5, -1", "-2/5, 2", "B"],
	
	["Solve the equation x<sup>2</sup> - 2x - 3 = 0.",
	"x = 1 or 3","x = -3 or 1","x = -3 or -1", "x = -1 or 3", "D"],
	
	["Evaluate (ax<sup>2</sup> +bx + c)/(mx + c), if<br>a = 2, b = 3,c = 4, m = 1 and x = -2.",
	"5","3","-1", "-3", "B"],
	
	["Find y<sup>2</sup> - 6y - 7.",
	"(y + 1)(y + 7)","(y + 1)(y - 7)","(y - 2)(y - 4)", "(y - 1)(y + 7)", "B"],
	
	["Given that x/y = 2/3, evaluate (2x + y)/(2x - y)",
	"7","4","2", "1/2", "A"],
	
	["For what values of x is the fraction (x<sup>2</sup> - x - 6) / 3(x - 4) equals to zero?",
	"x = -2 or -3","x = -2 or 3","x = 0 or 4", "x = 2 or -3", "B"],
	
	["If x varies directly as y and x = 4 when y = 6,<br>find the value of x when y = 12.",
	"4","6","8", "12", "C"],
	
	["Find the quadratic equation whose roots are 2√2 and 3√2",
	"2x<sup>2</sup> - 5√2x = -12","x<sup>2</sup> - 5√2x = 12","x<sup>2</sup> - 5√2x = -12", "x<sup>2</sup> + 5√2x = 12", "C"],
	
	["If the volume of a sphere is 360cm<sup>3</sup>, calculate its radius to 1 decimal place.",
	"4.5 cm","3.5 cm","3.4 cm", "3.1 cm", "D"],
	
	["The position of two points A and B on the earth surface<br>are (20<sup>0</sup>S, 30<sup>0</sup>E) and (65<sup>0</sup>S, 30<sup>0</sup>E) respectively.<br> Find their distance apart along the great circle.",
	"9,496 km","5,027 km","4,748 km", "251 km", "B"],
	
	["A man 25m tall, observes that the angle of elevation of the top of a pole 20m away is 25<sup>0</sup><br>. Find the height of the pole.",
	"54.3 m","44.3 m","34.3 m", "24.3 m", "C"],
	
	["Calculate without using tables: cos 60<sup>0</sup> + tan 45<sup>0</sup>",
	"2<small>1/3</small>","1<small>1/2</small>","1<small>2/3</small>", "1/2", "B"],
	
	["Find the range of the following set of numbers:<br>26,21,22,24,22,23,29",
	"8","6","4", "3", "A"],
	
	["If the mean of the following set of numbers: 1,2,3,x,4,5 is 10,<br>find the value of x.",
	"10","35","20", "45", "D"],
	
	["If y = 2x<sup>3</sup> - 6x<sup>2</sup> + 3x + 10,<br>find the second derivative(d<sup>2</sup>y/dx<sup>2</sup>) at x = -1.",
	"24","9","0", "-9", "C"],
	
	["Find the derivative of y = (2x<sup>2</sup> + 7)<sup>-3</sup>",
	"x(2x<sup>2</sup> + 7)<sup>-4</sup>","6x(2x<sup>2</sup> + 7)<sup>-4</sup>","12x(2x<sup>2</sup> + 7)<sup>4</sup>", "-12x(2x<sup>2</sup> + 7)<sup>-4</sup>", "D"],
	
	["The distance S metres travelled by a particle after t seconds is given by<br>S = t<sup>2</sup> + 3t + 8. Find the velocity after 5 seconds",
	"13 m/s","10 m/s","7 m/s", "5 m/s", "B"],
	];
const qBasicScience = [
	["Backbone helps human being to _________",
	"feed their young ones","think","see","walk properly","D"],
	
	["Deforestation is defined as _________",
	"bush burning","farming","felling of trees","weeding","C"],
	
	["Flooding occurs mostly in ",
	"tropical season","dry season","raining season","high temperature","C"],
	
	["The control center of the body is _______",
	"brain","kidney","heart","eye","A"],
	
	["Fishes move in the water with the aid of _________",
	"wings","claws","fins","feathers","C"],
	
	["In females, the enlargement of the breast starts at _______",
	"adolescence","old age","childhood","adulthood","A"],
	
	["A child of two weeks is called _______",
	"adult","child","baby","neonate","D"],
	
	["Wind erosion is common in which part of Nigeria?",
	"Western region","Eastern region","Northern region","Southern region","C"],
	
	["The increase in the earth's temperature is called ________",
	"atmospheric heating","depletion","global warming","green house effect","C"],
	
	["The physical appearance of an individual is known as _______",
	"alleles","heterozynous","phenotypes","genotypes","A"],
	
	["The transfer of thermal energy in liquids is called _______",
	"conduction","sublimation","convection","polarization","A"],
	
	["The phenomenon of apparent depth can be explained by _________",
	"brownian motion","radiation","reflection","refraction","D"],
	
	["Metal can be beaten into sheet because they are _______",
	"dense","strong","durable","malleable","D"],
	
	["Which of these describes the change of state from solid to gas?",
	"Diffusion","Evaporation","Sublimation","Osmosis","C"],
	
	["The smallest unit of a substance that can exist separately is ________",
	"compound","ion","element","molecule","D"],
	
	["Kinetic theory assumes that partcles of gas are in constant _______",
	"change","motion","state","position","B"],
	
	["The process whereby a matter changes from solid to liquid is called ________",
	"precipitation","evaporation","melting","diffusion","C"],
	
	["One of these can exhibit compressibility",
	"Gas only","Liquid only","Solid only","Solid and gas","A"],
	
	["Which of the foolowing energy source is NOT derived from petroleum?",
	"Diesel","Natural gas","Kerosene","Water","D"],
	
	["The change in the direction of light as it passes from one medium to another is _______",
	"radiation","refraction","conduction","reflection","B"],
	
	["Which of these is NOT a laboratory equipment?",
	"Burette","Test tube","Fire stand","Bunsen burner","C"],
	
	["The mixture of sand and kerosene can be separated by _______ .",
	"evaporation","filtration","distillation","plastic","B"],
	
	["Potential energy has its formula as ________",
	"Joule(J)","mgh","Newton(N)","1/2mv<sup>2</sup>","B"],
	
	["The following are examples of biodegradable materials EXCEPT _______",
	"banana","nylon bag","yam peelings","orange peels","B"],
	
	["_______ is the existence of atoms of an element having the same atomic number but different mass number.",
	"Element","Isotopy","Nuclide","Nucleus","B"],
	
	["The following are sources of chemical energy EXCEPT _________",
	"Air","Firewood","Kerosene","Diesel","A"],
	
	["Energy that stimulates the sense of our vision is termed _________",
	"chemical energy","beam light","kinetic energy","light energy","D"],
	
	["Calulate the workdone by a body of weight 200N that moves through a distance of 5 meters.",
	"40 J","205 J","1000 J","1050 J","C"],
	
	["The rotation of the fan blade shows that electrical energy has been converted to ______ energy.",
	"rotational","heat","mechanical","sound","C"],
	
	["Which of these does the same work as a fuse in an electic circuit?",
	"Voltmeter","Circuit breaker","Ohmmeter","Ammeter","B"],
	
	["The ratio of work output of a machine to the work input is known as _______",
	"efficiency","revolution","friction","workdone","A"]
	];
const qPython = [
	["Which of the following is a valid identifier?",
	"12age","_age","Age-Mike","-age56","B"],
	
	["x = 3<br>x += 5<print(x)<br> What will be the output of the program above",
	"12age","_age","Age-Mike","-age56","B"],
]	
	
const qBasicTech = [
	["Which of these is not a pure metal?",
	"Brass","Copper","Aluminium","Tin","A"],

	["Which of these is not an alloy?",
	"Duralumin","Brass","Zinc","Bronze","C"],

	["__________ is a hard material formed when cement is mixed with sand and water only with sand, gravel, broken stones and water",
	"Limestone","Concrete","Ceramics","Granite","B"],

	["Vulcanisation is a special chemical treatment where ________ is added to raw rubber and heated at a high temperature.",
	"Carbon","Oxygen","Sulphur", "Hydrogen","C"],

	["A metal can be changed into molten state by_______",
	"continuous heating until it becomes soft","heating at very high temperatures","leaving it under the sun", "applying chemicals","B"],

	["_______ is a milk-like liquid substance found under the bark of rubber tree",
	"latex", "pulp","gum","wax","A"],

	["A furnace or oven specially designed for baking finished wet clay products is called_______",
	"baker", "burner","microwave","kiln","D"],

	["The type of metal which contains iron is called _______",
	"iron metal", "non-ferrous metal","alloy metal","ferrous metal","D"],

	["Carbon is added to pure refined iron to produce ______",
	"steel", "ore","pig iron","gangue","A"],

	["The major raw materials for making cement are ______ and _______",
	"dust, limestone", "clay, sand","clay, limestone","sand, limestone","C"],

	["The process of hardening a pot to make the pot stronger is known as ________",
	"seasoning","thickening","baking", "frying","C"],

	["________ are used to protect the hands during electrical wirings.",
	"Metal clips","Hand gloves","masking tapes", "Table clothes","B"],

	["Which of the following is an electrical wiring tools?",
	"Saw","File","Plier", "Pulley","C"],

	["Socket outlets provide means of connecting to live, neutral and _________ terminals.",
	"negative","positive","earth", "static","C"],

	["Timber is obtained from the _________ of trees.",
	"leaves and stems","roots and twigs","flowers and seeds", "trunk and branches","D"],

	["Steel with carbon content above 0.8% is called _________ steel.",
	"mild","hard","core", "tool","D"],

	["Articles made from clay are called ________.",
	"blocks","rubber","glass", "ceramics","D"],

	["Concave or convex curve along the length of a plank is a wood defect called _________",
	"twist","bow","cup", "check","B"],

	["________ method is a way of making thermoplastics.",
	"Kiln","Pinch","Injection", "Plunger","C"],

	["Machines that operate mainly with fluid are _______.",
	"hydraulic","pneumatic","milling", "gas","A"],

	["The products made by combining two or more metallic elements is ________.",
	"an aluminum","an alloy","a brass", "a bronze","B"],

	["Belt drives are driven by ________",
	"gear","machine","pulley", "shaft","C"],

	["An example of sanitary fitting in a building is __________",
	"urinad","elbow","tap", "defects","B"],

	["An example of natural defect is ________",
	"bow","knot","twisting", "wanes","B"],

	["Metals are classified into pure metals and ________",
	"alloy","non-ferrous metals","ferrous metals", "carbon steel","A"],

	["The machine used in banks for financial transaction is referred to as ________",
	"Automated Teller Motor","Automating Teller Model","Automation Teller Machine", "Automated Teller Machine","D"],

	["The wood obtained from deciduous tree is called ________",
	"sapwood","Mahogany wood","hardwood", "cherrywood","C"],
	
	["Tile used for walls and floors in building is a product from  ________",
	"metals","glass","concrete", "ceramics","D"],
	
	["Which of the following is an example of non-ferrous metal?",
	"Carbon","Steel","Magnet", "Copper","D"],
	
	["Which of the following is used as head protection device in workshop?",
	"head belt","helmet","fez cap", "shield","B"]
	];
const qComputer2 = [
	["Examples of application software include _______"
	,"MS Excel","MS-DOS","UNIX","LINUX","A"],
	
	["The following are examples of Operating System except ______"
	,"Windows","Linux","Adobe PageMaker","Mac","C"],
	
	["Convert 30 to Hexadecimal:"
	,"1E","1A","2F","1F","A"],
	
	["Convert 111101<sub>two</sub> to decimal:"
	,"16","61","72","85","B"],
	
	["Binary digit is also known as _______"
	,"byte","bit","nibble","integer","B"],
	
	["The intersection of row and column in spreadsheet application is called _______"
	,"column-row","worksheet","cell","box","C"],
	
	["Another name for the Monitor is _______"
	,"VDU","DUC","Display","FTP","A"],
	
	["Information displayed on the monitor screen is _________"
	,"hard copy","carbon copy","bind copy","soft copy","D"],
	
	["The longest key on the keyboard is _________"
	,"Return key","Space bar","Control key","Enter key","B"],
	
	["There are _______ bits in a byte"
	,"2","4","6","8","D"],
	
	["How many kilobytes make 1 megabyte?"
	,"1000kb","1024kb","1080kb","1200kb","B"],
	
	["A presentation is created using _________"
	,"MS Excel","MS-PowerPoint","CorelDraw","Adobe PhotoShop","B"],
	
	["What is the full meaning of BASIC?"
	,"Beginners All-Purpose Symbolic Instructional Code","Basic All-Purpose Symbolic Instructional Code","Beginners All-Purpose Symbolic Interaction Code","Basic All-Purpose Symbolic Interaction Code","A"],
	
	["The software designed for cleaning off or preventing virus attack in the computer system is called _______"
	,"virus cleaner","virus proof","anti-virus","vacuum cleaner","C"],
	
	["What is the output of the following program segment?:<br>A = 10<br>C = A ^ 2<br>PRINT C"
	,"2","102","20","100","D"],
	
	["Deleted files in the computer can be found in the _____"
	,"Storage box","Desktop","Library","Recycle bin","D"],
	
	["Storage currently in use when processing data is _______"
	,"RAM","Flash drive","ROM","Hard drive","A"],
	
	["The part of a computer which holds data and instructions"
	,"Arithmetic and Logic Unit(ALU)","Memory Unit","Control Unit","Instructional Unit","B"],
	
	["The lowest unit of measuring information in a computer is _________"
	,"byte","bit","megabyte","nibble","B"],
	
	["Information stored in RAM is _________"
	,"volatile","non-volatile","permanent","portable","A"],
	
	["A set of instructions which tells the computer what to do is called ________"
	,"Algorithm","Data Structure","Program","Software","C"],
	
	["A step-by-step procedure designed towards solving a certain problem is known as __________"
	,"Algorithm","Data Structure","Program","Software","A"],
	
	["The method of recording and handling of data that makes it neccessary for conversion is __________"
	,"Collation","Gathering","Processing","Storage","A"],
	
	["The process of going into someone's files on the internet without permission is _________"
	,"fraud","hacking","piracy","plagiarism","B"],
	
	["Using CTRL + V keys in the word processing can ensure the _________ of files/documents"
	,"loading","saving","moving","pasting","D"],
	
	["A unique field within a data record which identifies other record is _________"
	,"data","entity","keys","schema","C"],
	
	["The database that has a tree-like structure is said to be ________"
	,"flat","hierarchical","network","relational","B"],
	
	["________ is a selected file in a table that uniquely identifies a record."
	,"entity key","primary key","secondary key","selected key","B"],
	
	["The following BASIC program is written to _______ .<br><small>INPUT LENGTH; A</small><br><small>INPUT WIDTH; B</small><br><small>LET C = A * B</small><br><small>PRINT C</small><br><small>END</small>"
	,"Multiply two numbers A and B","Multiply two numbers A and C","Multiply three numbers A, B and C","Add two numbers A and B","A"],
	
	["The following are programming languages except ______"
	,"Java","JavaScript","Python","PowerPoint","D"]
	];

const qMathsJunior = [
	["Over the weekend, Dare walked 85.5km. Her Dad walked 350m further than her. What is the total distances walked by them?"
	,"85.8km","85.85km","858.5km","171.35km","B"],
	
	["Find the least possible whole number which must be added to 81, so that it can be divided exactly by 7."
	,"31","34","17","3","D"],
	
	["When a number is divided by 4, the result is 15. Find 2/3 of that number."
	,"43","40","22","60","B"],
	
	["Find the circumference of a circle when area is 154cm<sup>2</sup> . π = 22/7."
	,"132cm","66cm","55cm","44cm","D"],
	
	["Simplify 2/4 x ¼ + ½"
	,"5/8","¾","1/3","½","A"],
	
	["Find 6½% of ₦600.00"
	,"₦3900.00"  ,"₦78.00","₦72.00","₦39.00","D"],
	
	["A dress was sold for ₦120.00. If the profit percent was 50%, how much did the dress cost?"
	,"₦50.00","₦160.00","₦80.00","₦60.00","D"],
	
	["The average of 30 students in a Mathematics test is 6. If 28 out of these students score a sum of 160 marks, find the average mark of the two remaining students."
	,"20"  ,"10","6","4","B"],
	
	["A coin has a circumference of 3cm. How many revolutions will it take to cover a distance of 120cm? "
	,"360","132","171","90","D"],
	
	["A cylindrical bottle is filled with a liquid. The volume of the liquid is 11000cm3.  If the height of the bottle is 35cm, what is the radius of the bottle (Take  π = 22/7)."
	,"22cm","100cm","770cm","77000cm","B"],
	
	["Five years ago, Kunle’s age was one-fifth of the mother’s age. If his mother is now 50 years, how old is Kunle now?"
	,"15years","14years","13years","20years","B"],
	
	["A man spent 5/8 of his salary on food and 2/5 of the remainder on clothes. What fraction of his salary is left?"
	,"21/40","9/40","17/30","½","A"],
	
	["An empty tipper weighed 900kg. When half full of sand, it weighed 15 tonnes, 280kg. What will it weigh when full?"
	,"27t, 780kg","30t, 560kg","28t, 760kg","29t, 660kg","D"],
	
	["Find the value of 1/√9 – 1/√16."
	,"5/6","13/36","1/6","1/12","D"],
	
	["A rectangle and a square have the same perimeter. The rectangle of length 12cm has an area of 96cm<sup>2</sup>. Find the length of the square."
	,"5cm","8cm","10cm","120cm","C"],
	
	["The sum of three consecutive odd numbers is 45. What is the difference between the highest and the lowest number?"
	,"7","6","5","4","B"],
	
	["If the cube of a positive number is half of the square of the same number. Then, what is the number?"
	,"½","2/5","1/6","5/8","A"],
	
	["Ojo and Mathew shared some oranges in the ratio 3:5. If Ojo had 15 oranges, how many oranges were shared?"
	,"25","30","40","45","C"],
	
	[`<img src = ${webImage[0].src} alt='Triangle Inside Square'><br />If ABCD above is a square, find the area of the shaded region.`
	,"64cm<sup>2</sup>","40cm<sup>2</sup>","32cm<sup>2</sup>","20cm<sup>2</sup>","C"],
	
	["Simplify 0.024 x 2.4 / 0.12 x 0.28"
	,"0.002","0.02","0.2","2","D"],
	
	["How many litres of oil can fill a tank dimension 15cm by 10cm by 12cm?"
	,"1.8","18","180","1800","A"],
	
	["Find the cost of 7 articles, if 4 of such articles cost ₦324.00"
	,"₦576.00","₦567.00","₦504.00","₦331.00","B"],
	
	[`<img src = ${webImage[1].src} alt='Angle at a Point'><br />Find the value of x in the diagram above.`
	,"30°","45°","60°","70°","C"],
	
	["A rope is 1km long. How many shorter ropes each of 50cm long can be cut from the rope?"
	,"2","20","200","2000","D"],
	
	[`<img src = ${webImage[2].src} alt='Plane Shape'><br />Calculate the area of the entire shape above.`
	,"72cm<sup>2</sup>","96cm<sup>2</sup>","71cm<sup>2</sup>","60cm<sup>2</sup>","C"],
	
	[`<img src = ${webImage[3].src} alt='Isosceles Triangle'><br />In the diagram above /AB/ = /AD/, find x`
	,"72°","18°","108°","54°","D"],
	
	["Express a speed of 20m/s in km/hr."
	,"120km/hr","100km/hr","90km/hr","72km/hr","D"],
	
	["If 800m is increased to 1km, in what ratio has it been increased?"
	,"4:1","5:4","800:1","8:1","B"],
	
	["Find the number that must be added to 40% of 225 to give 200."
	,"290","190","110","90","C"],
	
	["12 boys can dig a hole in 25 days. How long will it take 15 boys take to do it?"
	,"25days","20days","15days","10days","B"],
	
	["Factorise: 12p<sup>2</sup>q - 9q<sup>2</sup>"
	,"3(4<sup>2</sup> - 3q)","pq(4p<sup>2</sup> - 3q)","pq(12p - 9q)","3q(4p<sup>2</sup> - 3q)","D"],
	
	["The bearing of a town Q from a town P is 045°. Find the bearing of P from Q."
	,"090°","135°","180°","225°","D"],
	
	["If the average of 5,8,b,9 and 4 is 7. Find the value of b."
	,"9","8","7","5","A"],
	
	["If x is an acute angle and tan x = 5/12, evaluate sin x."
	,"5/13","5/12","12/13","11/12","A"],
	
	["Which of the following are Pythagorean triples?<br>I. (3,4,5)	II. (5,12,13)	III. (8,13,17)"
	,"I only","II only","I and II only","II and III only","C"],
	
	["A cone is 8cm high and has base diameter of 12cm. Its slant height is ........"
	,"6cm","8cm","10cm","12cm","C"],
	
	["Evaluate 0.6721 x 0.0261 and express your answer in standard form."
	,"1754 x 10<sup>4<sup>","1754 x 10<sup>-3<sup>","1.754 x 10<sup>-3<sup>","1.754 x 10<sup>-2<sup>","D"],
	
	["P = {prime numbers less than 20} and Q = {odd numbers less than 10}. Find P ∩ Q"
	,"{2,3}","{1,3,5,7,11}","{3,5,7,9}","{3,5,7}","D"],
	
	["Convert 104<sub>ten</sub> to a binary numeral"
	,"1101000","1010100","1101100","1011010","A"],
	
	["What is the HCF of 48,30 and 18?"
	,"2","3","5","6","D"],
	
	["Express 34m 5cm 6mm in millimetres"
	,"342506 mm","34056 mm","30456 mm","34565 mm","C"],
	
	["Write 356.07 in standard form"
	,"35.607 x 10","35.607 x 10<sup>2</sup>","3.5607 x 10<sup>2</sup>","3.5607 x 10<sup>-2</sup>","C"],
	
	[`What is the rule for the mapping below?<br /><img src = ${webImage[4].src} alt='Mapping Image'/>`
	,"y = 2x + 2","y = 2<sup>x</sup>","y = x + 2","y = x + 1","B"],
	
	["Solve 4x - 6 < -2"
	,"x < 1","x > 1","x < -1","x > -1","A"],
	
	["In a school, 80 pupils wrote an examination and 64 of them passed. What is the percentage of pupils who passed?"
	,"8%","16%","20%","80%","D"],
	
	["The interior angle of a regular polygon is 120°. How many sides has the polygon?"
	,"3","4","5","6","D"],
	
	["Kofi throws a die. What is the probability that he throws the number 2?"
	,"1","2/3","1/6","1/2","C"],
	
	[`<img src = ${webImage[5].src} alt='A Triangle'/><br />Find the value of P in the diagram above.`
	,"110","90","70","40","D"],
	
	["Make <em>a</em> subject of the the relation P = 2(a + b)"
	,"a = (P-2b)/2","a = (P+2b)/2","a = (2b-P)/2","a = (P-2b)/2","A"],
	
	["What is the value of x in relation	5<sup>x</sup> = 125?"
	,"2","3","4","5","B"],
	
	[`Calculate the length of QR in triangle PQR below<br /><img src = ${webImage[6].src} alt='A Triangle'/>`
	,"11","14","16","17","B"],
	
	["Five cards are numbered 1 to 5. A card is picked at random. What is the probability that it has an even number?"
	,"1","4/5","3/5","2/5","D"],
	
	["The ages (in years) of 8 boys are: 14, 14.5, 12, 11.5, 13, 10.5, 13.5"
	,"14","13","12","11","B"],
	
	["Convert 133<sub>five</sub> to base ten numeral"
	,"23","25","41","43","D"],
	
	["Find the simple interest on $15,000.00 at rate of 20% per annum for 5 years."
	,"$10,000","$15,000","$30,000","$50,000","B"],
	
	["Find the difference between (2d)<sup>2</sup> and 2d<sup>2</sup> when d = 2"
	,"16","18","24","28","B"],
	
	["The heights of two boys are in the ratio 4:5. The shorter boy is 80cm. What is the height of the taller boy?"
	,"100cm","150cm","164cm","180cm","A"],
	
	["Factorise completely 5xy + 10ny"
	,"5y(x + n)","5y(x + 2n)","5xy(1 + 2n)","5(xy + 2ny)","B"],
	
	["If 13x - 12 = 5x + 60, find x."
	,"-9","-6","6","9","D"],
	
	["The length of a spring when a mass of n kg is hung on it is L = (74 + 15n) mm. What is the length of the spring when a mass of 1.2kg is hanged on it?"
	,"75.20 mm","89.00 mm","92.00 mm","97.00 mm","C"],
	
	[`In the figure below, triangle ABC is an enlargement of triangle ADE. If |AE| = 20cm and |EC| = 10cm. What is the scale factor of the enlargement?<br /><img src = ${webImage[7].src} alt='A Triangle'/>`
	,"1/2","3/2","2","3","B"],
	
	[`<img src = ${webImage[8].src} alt='Angles between lines'/><br />The angles a and b in the figure above are`
	,"corresponding","interior opposite","vertically opposite","alternate","A"],
	
	["A man travelled a distance of 1.2km in 30 minutes. What distance can he cover in 55 minutes travelling at the same speed?"
	,"1.375 km","2.02 km","2.2 km","12.02 km","C"],
	
	[`<img src = ${webImage[9].src} alt='Angles in a polygon'/><br />In the diagram above, triangle ABC is an isosceles triangle. ‹ABD = 108°. Find the value of y.`
	,"72","60","48","36","D"]
	
];


// -----------------Testing Purpose

const qComputer = [
	["Examples of application software include _______"
	,"MS Excel","MS-DOS","UNIX","LINUX","A"],
	
	["The following are examples of Operating System except ______"
	,"Windows","Linux","Adobe PageMaker","Mac","C"],
	
	["Convert 30 to Hexadecimal:"
	,"1E","1A","2F","1F","A"]
]
// ---------------------------------------------------------------------------------------------------------------------------------

const _ = elem => {
	return document.querySelector(elem);
}
let pos = 0;
let subjTitle;
let subjChosen;
let question;
let optionA;
let optionB;
let optionC;
let optionD;

let start = _("#start");
let displayArea = _(".cont-portal-body");
let subject = "";
let quesList = null;
let next = _("#next");
let prev = _("#prev");
let page = _("#page");
let send = _("#send");
let menu = _("#open-menu");
let menuBar = _("#menu-bar");
let submitted = false;
let timeOut;
let home = document.querySelectorAll(".home");
let result = document.querySelectorAll(".result");
let contact = document.querySelectorAll(".contact");
let displayPortfolio = _("#show-portfolio");
let displayContact = _("#show-contact");
let pressMenu = true;
let okay = _("#ok");
let cancel = _("#cancel");

let chooseSubject = _("#choose-subject");
let subjectOptions = _("#subject");
let reTake = _("#retake");

let selectionArea = _("#subject-option");
let allocatedTime = 0;
let m = false;

window.addEventListener("DOMContentLoaded", ()=>{
	if(!sessionStorage.hasOwnProperty("firstLoading"))
	{
		sessionStorage.setItem("firstLoading", "1");
	}
	if(sessionStorage.getItem("firstLoading") === "1")
	{
		sessionStorage.setItem("firstLoading","0");
		_("#overlay").style.display = "block";
		_("#loader-wrapper").style.display = "block";
		setTimeout(()=>{
			_("#overlay").style.display = "none";
			_("#loader-wrapper").style.display = "none";
		_("#main-container").style.display = "flex";										
		}, 4000);
		
	}
	else
	{
		_("#main-container").style.display = "flex";
	}

})
// 	-------------------------------this works out the timestamp---------------------------------
const getTimeStamp = function()
	{
		const days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
		let minute = date.getMinutes() > 9 ? date.getMinutes() : "0"+date.getMinutes();
		let period = date.getHours() >= 12 ?"pm":"am";
		let today = days[date.getDay()];
		
		return `${today} ${day}/${month}/${year} ${hour}:${minute}${period}`;
	}
	
_(".close-result").addEventListener("click", ()=>{
	_("#overlay").style.display = "none";
	_("#results").style.display = "none";
})
//users can retake the test
reTake.addEventListener("click", () => {
	_("#overlay").style.display = "none";
	_("#chart-outer-wrapper").style.display = "none";
	pos = 0;
	next.style.display = "initial";
	subject = subjChosen;
	switch(subject){
		case "ENGLISH LANGUAGE":
			render(qEnglish);
			break;
		case "senior-maths":
			render(qMathsSenior);
			break;
		case "junior-maths":
			render(qMathsJunior);
			break;
		case "COMPUTER STUDIES":
			render(qComputer);
			break;
		case "BASIC TECHNOLOGY":
			render(qBasicTech);
			break;
		case "BASIC SCIENCE":
			render(qBasicScience);
			break;
		case "dsa":
			render(qDSA);
			break;
		case "python":
			render(qPython);
			break;
	}
	
})

const createNewRow = function(arr){										//this creates a new image on the fly
		
		let newRow = document.createElement("tr");
		newRow.classList.add("table-row");
		newRow.innerHTML += "<td><i class='fa fa-circle'></i></td>";
		newRow.innerHTML += `<td>${arr[0]}</td>`;
		newRow.innerHTML += `<td>${arr[1]}</td>`;
		newRow.innerHTML += `<td>${arr[2]}%</td>`;
		newRow.innerHTML += `<td>${arr[3]}</td>`;
		return newRow;
	}

const createNewHeader = function(){										//this creates a new image on the fly
	
	let newHeader = document.createElement("tr");
	newHeader.id = "table-header";
	newHeader.innerHTML += "<th></th>";
	newHeader.innerHTML += "<th>Subject</th>";
	newHeader.innerHTML += "<th>Score</th>";
	newHeader.innerHTML += "<th>Percent Score</th>";
	newHeader.innerHTML += "<th>Timestamp</th>";
	return newHeader;
}

const clearResultLog = function(){
	localStorage.removeItem("userResults");
	document.querySelectorAll(".table-row").forEach((element)=>{
		element.innerHTML = "";
	});
};

_("#clear-log button").addEventListener("click", clearResultLog);


function showResultTable(){
	_("#overlay").style.display = "block";
	_("#results").style.display = "block";
	if(localStorage.hasOwnProperty("userResults"))
	{
		_("#clear-log").style.display = "block";
		_("#result-table").innerHTML = "";
		_("#result-table").appendChild(createNewHeader());
		const eachItem = JSON.parse(localStorage.getItem("userResults"));
		for(let x = eachItem.length - 1; x >= 0; x--)
		{
			let newRow = createNewRow(eachItem[x]);
			_("#result-table").appendChild(newRow);
		}
	}
	else
	{
		_("#clear-log").style.display = "none";
		_("#result-table").innerHTML = "<p class='no-result-text'>No result has been submitted yet</p>"
	}
	
	menuBar.style.display = "none";
}


window.addEventListener("load", () =>{subject = ""});

home.forEach(element => {
	element.addEventListener("click", () => {
		location.reload(); 						//refresh the app to go start all over
	});	
});


result.forEach(element => {
	element.addEventListener("click", showResultTable);
});

cancel.addEventListener("click", () => {			//give the user a chance to reconsider
	_("#confirmation").style.display = "none";
	_("#overlay").style.display = "none";
	});											

function generateAndPresentResult(){
	let result = displayResult();							//compute the result of the just concluded test
	let timestamp = getTimeStamp();
	let percent = Math.round((result/quesList.length)*100);	//compute the percent (correct answers) to a whole number
	_("#overlay").style.display = "block";
	_("#chart-outer-wrapper").style.display = "flex";
	_("#incorrect").style.width = `${100 - percent}%`;		//compute the percent(wrong answers)
	_("#incorrect").textContent = quesList.length - result;
	_("#correct").style.width = `${percent}%`;
	_("#correct").textContent = result;
	
	_("#result-info").innerHTML = `<p>You answered ${result} of ${quesList.length} questions correctly.</p>`;
	_("#result-info").innerHTML += `<p>Your score is <span style="font-size:1.5rem; font-weight:bolder;">${percent}%</span></p>`;
	_("nav").style.visibility = "hidden";
	_("#confirmation").style.display = "none";
	
	prev.style.visibility = "hidden";
	send.style.display = "none";
	
	if(!localStorage.hasOwnProperty("userResults"))
	{
		localStorage.setItem("userResults", JSON.stringify([[subjTitle,`${result}/${quesList.length}`, percent, timestamp]]))
	}
	else
	{
		let temp = JSON.parse(localStorage.getItem("userResults"));
		temp.push([subjTitle,`${result}/${quesList.length}`, percent, timestamp]);
		localStorage.setItem("userResults", JSON.stringify(temp));
	}
}

okay.addEventListener("click", () => {
	clearInterval(timeOut);									//stop the timer
	submitted = true;										//the user has submitted and seen the results
	generateAndPresentResult();
	});

menu.addEventListener("click", () => {				//hide and display the menu bar
	if(pressMenu){									//show it
		menuBar.style.display = "block";
		pressMenu = false;
	}
	else{
		menuBar.style.display = "none";				//hide it
		pressMenu = true;
	}
})

addEventListener("click", event => {		//Alternative to using the menu button to hide the menu bar
	let x = document.body.clientWidth;		 //the with of the page
	let y = document.body.clientHeight;		//the height of the page
	
	//the user only needs to click anywhere on the page outside the menu bar to hide it
	//since the height and width of the bar are 60% and 40% of the page respectively
	//the click that will hide the menu bar must happen at a point farther than the 40% and 60% width and height of the page respectively
	if(event.target.getAttribute("id") != "open-menu" && (event.clientX > (x * 0.4) || event.clientY > (y * 0.6))){
		menuBar.style.display = "none";
	}
});

//show available subject options to the users
chooseSubject.addEventListener("click", () => {
	chooseSubject.style.display = "none";
	subjectOptions.style.display = "block";
	displayArea.style.setProperty("padding-top", "0px");
	subjectOptions.style.animation="slide 0.2s linear normal";
 });
 let secondTier = Array.from(document.querySelectorAll(".second-tier"));
 for(let x of secondTier)
 {
	 x.classList.add("sublist");
 }
subjectOptions.addEventListener("click", event => {
	subject = event.target.textContent;
	subjTitle = subject;				//users choose a subject
	subjChosen = subject;
	switch(subject){
		case "MATHEMATICS":
			selectionArea.innerHTML = _("#level-maths").innerHTML;
			break;
		case "PROGRAMMING":
			selectionArea.innerHTML = _("#programming").innerHTML;
			break;
		default:
			allocatedTime = 20;
			selectionArea.innerHTML = `You have <span style="font-weight:bolder;">${allocatedTime} minutes</span> for this test.`;
			start.style.display = "block";
			break;						// allocate 20 minutes to all other subjects;	
	}	
});
addEventListener("click", event => {
	subject = event.target.id || event.target.textContent;
	
	switch(subject)
	{
		case "junior-maths":
			
		case "senior-maths":
			subjChosen = subject;
			allocatedTime = 40;	
			selectionArea.innerHTML = `You have <span style="font-weight:bolder;">${allocatedTime} minutes</span> for this test.`;
			start.style.display = "block";
			break;
		case "dsa":
			
		case "python":
			subjChosen = subject;
			allocatedTime = 35;
			selectionArea.innerHTML = `You have <span style="font-weight:bolder;">${allocatedTime} minutes</span> for this test.`;
			start.style.display = "block";
			break;
	}
	
	});
addEventListener("click", event => {
	if(event.target.nodeName == "INPUT"){						//ok. Maybe the tag clicked was input tag
		event.target.setAttribute("checked",true);			
		let allOptions = Array.from(document.querySelectorAll("input"));	//get all the input tags on the DOM
		for(let each of allOptions){
			if(each.getAttribute("checked") && each == event.target){		//which of the input was selected?
				if(quesList[pos].length == 6){								//the question has not been answered already
					quesList[pos].push(each.value);							//take note of the content of the option selected
					quesList[pos].push(allOptions.indexOf(each));			//take note of the option selected
				}
				else{																//oh the question had already been answered, the user only wants to change his/her mind
					quesList[pos][quesList[pos].length - 2] = each.value;					//modify and take note of the content of the new choice
					quesList[pos][quesList[pos].length - 1] = allOptions.indexOf(each);		//note the new option selected	
				}
			}
			else{
				each.removeAttribute("checked");									//double sure that the option the user selected is the only one remaining selected
			}
		}
	}
});

//this computes the number of quuestions the user answered correctly
function displayResult(){
	let count = 0;
	for(let list of quesList){
		if(list.length == 8 && list[5] == list[6]){  //a list of length 8 here means that this particular question was answered
			count++;								//although the app will not allow any question to be left unanswered before the allocated time has elapsed
		}
	}
	return count;
}
//this submits the progress of the user when the allocated time has elapsed
//It does so WITHOUT asking whether the user wants to submit or not
//consequently, 0 is recorded for any unanswered question in this case

function submitWithout(){
	error.style.display = "none";
	generateAndPresentResult();
}

send.addEventListener("click",() => {
	if(quesList[pos].length == 6){			//this question has not been answered, you still have the time to do this
		error.style.display = "block";		//then, an error message pops up to tell you this
	}
	else{
		error.style.display = "none";
		_("#overlay").style.display = "block";
		_("#confirmation").style.display = "flex";	//if all questions were answered, confirmation page pops us ready for submission
		_("#cancel").focus();
	}
})

//this always renders or displays the first questions, in fact it initiates the test
function render(chosen){
	quesList = chosen.map(arr => arr.slice());				//make a deep copy of the chosen subject
	question = quesList[pos][0];
	optionA = quesList[pos][1];
	optionB = quesList[pos][2];
	optionC = quesList[pos][3];
	optionD = quesList[pos][4];
	
	_(".subject-title").innerHTML = subjTitle.toUpperCase();

	displayArea.style.setProperty("align-items","flex-start");
	//displayArea.style.setProperty("justify-content","flex-start");
	displayArea.style.setProperty("padding-top","10%");
	displayArea.style.setProperty("font-weight","bold");
	displayArea.innerHTML = "";
	 if(subject == "ENGLISH LANGUAGE"){					//pass in the instruction for English only
		displayArea.innerHTML = `<p style="font-style:italic; font-weight:light; margin-bottom:8px;">For questions 1 to 10, choose the option that is <span style="font-style:normal; font-weight:bolder;">most nearly opposite</span> in meaning to the underlined word as it is used in the sentence</p>`;
	}
				
	displayArea.innerHTML+= `<div style="display:flex; width:100%;line-height:1.6;"><div>${pos + 1}.</div><div style="overflow-wrap:break-word;  line-spacing:2px; text-indent:10px;">${question}</div></div>`;
																									//						^
																									//						^
																									//this ensures the text are always contained in their container
	displayArea.innerHTML+= `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="A" id="first"><label for= "first">${optionA}</label></p>`;
	displayArea.innerHTML+= `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="B" id="second"><label for="second">${optionB}</label></p>`;
	displayArea.innerHTML += `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="C" id="third"><label for= "third">${optionC}</label></p>`;
	displayArea.innerHTML += `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="D" id="fourth"><label for="fourth">${optionD}</label></p>`;
	_("nav").style.visibility = "visible";
	page.innerHTML = (pos+1)+"\t\tof\t\t"+quesList.length; 
	prev.style.visibility = "hidden";
	
	startTimer(allocatedTime * 60);									//allocate time for the test and start reading in countdown fashion
}

start.addEventListener("click", () => {chooseQuest(subject);})	//use the subject chosen

function chooseQuest(subj){
	switch(subj){
		case "ENGLISH LANGUAGE":
			render(qEnglish);
			break;
		case "senior-maths":
			render(qMathsSenior);
			break;
		case "junior-maths":
			render(qMathsJunior);
			break;
		case "COMPUTER STUDIES":
			render(qComputer);
			break;
		case "BASIC TECHNOLOGY":
			render(qBasicTech);
			break;
		case "BASIC SCIENCE":
			render(qBasicScience);
			break;
		case "dsa":
			render(qDSA);
			break;
		case "python":
			render(qPython);
			break;
	}
};

 //this supplies the questions to the display area subsequently
function displayQuestion(sign){
	sign == "-"? pos-- : pos++;		//the sign controls the next and previous buttons
	question = quesList[pos][0];
	optionA = quesList[pos][1];
	optionB = quesList[pos][2];
	optionC = quesList[pos][3];
	optionD = quesList[pos][4];
	displayArea.style.setProperty("align-items","flex-start");
	displayArea.style.setProperty("padding-top","10%");
	displayArea.style.setProperty("font-weight","bold");
	displayArea.innerHTML = "";
	if(subject == "ENGLISH LANGUAGE"){
		switch(pos){			//pass in the corresponding instructions at each section for English only
			case 10:
				displayArea.innerHTML = `<p style="font-style:italic; font-weight:light; margin-bottom:8px;">For questions 11 to 18, choose the option that <span style="font-style:normal; font-weight:bolder;">best completes</span> each of the following sentences</p><br>`;
				break;
			case 18:
				displayArea.innerHTML = `<p style="font-style:italic; font-weight:light; margin-bottom:8px;">For questions 19 to 26, choose the option that is <span style="font-style:normal; font-weight:bolder;">nearest in meaning</span> to the underlined word as it is used in the sentence</p><br>`;
				break;
			case 26:
				displayArea.innerHTML = `<p style="font-style:italic; font-weight:light; margin-bottom:8px;">For questions 27 to 30, choose the option that <span style="font-style:normal; font-weight:bolder;">best completes</span> each of the following sentences</p><br>`;
				break;
		}	
	}
	displayArea.innerHTML += `<div style="display:flex; width:100%;line-height:1.6;"><div>${pos + 1}.</div><div style="overflow-wrap:break-word;  line-spacing:2px; text-indent:10px;">${question}</div></div>`;
	displayArea.innerHTML += `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="A" id="first"><label for= "first">${optionA}</label></p>`;
	displayArea.innerHTML += `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="B" id="second"><label for="second">${optionB}</label></p>`;
	displayArea.innerHTML += `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="C" id="third"><label for= "third">${optionC}</label></p>`;
	displayArea.innerHTML += `<p style="margin-left:20px; margin-top:20px;"><input type="radio" name="choices" value="D" id="fourth"><label for="fourth">${optionD}</label></p>`;
	if(quesList[pos].length == 8){
		let userChoice = document.querySelectorAll("input")[quesList[pos][quesList[pos].length - 1]];
		userChoice.setAttribute("checked", true);
	}
	page.innerHTML = "\t\t"+(pos+1)+"\t\tof\t\t"+quesList.length+"\t\t"; 
}

next.addEventListener("click",function(){
	if (pos < quesList.length) {		//as long as there are still questions to be answered, move
		let error = _("#error");
		if(quesList[pos].length == 6){				//this question has not been answered yet
			prev.style.visibility = "visible";
			error.style.display = "block";			//the error message remains there until you answer the question
			if(!pos){								//if this is the first question,
				prev.style.visibility = "hidden";	//there is nothing to go back to
			}
		}
		else{
			error.style.display = "none";			//ok this has been answered
			prev.style.visibility = "visible";
			displayQuestion("+");					//move to the next question
		}
		
	}
	if (pos == quesList.length - 1) {		//if this is the last question, 
		next.style.display = "none";		//there is nothing to look forward to
		prev.style.visibility = "visible";
		send.style.display = "block";		//ok this is the last question, then the submit button appears, waiting to be clicked to submit
	}
});

prev.addEventListener("click", function() {
	if (pos > 0) {					//as long as there are still more behind,
		displayQuestion("-");		//go back to the previous question
		next.style.display = "initial";
	}
	if(pos == 0){							//if this is the first question,
		prev.style.visibility = "hidden";	//there is nothing to go back to
		next.style.display = "initial";		//we have something to look forward to instead
	}
	let error = _("#error");	
	error.style.display = "none";					
	send.style.display = "none";
	
});

function startTimer(duration){
	let timer = _(".timer");
	let hour = 0;
	let min = 0;
	let sec = 0;
	let x = duration;
	timeOut = setInterval(() => {
				sec = x % 60;
				min = Math.floor(x/60);
				min = min % 60 == 0 ? 0 : min % 60;
				hour = Math.floor(x/3600);
				
				hour = hour < 10 ? "0"+ hour : hour;
				min = min < 10 ? "0"+ min : min;
				sec = sec < 10 ? "0"+ sec : sec;
				if(x == 0 && !submitted){
					submitWithout();			//when the time is up and the user has not submitted, submit for the user
					clearInterval(timeOut);		//stop the timer
				}
				if(x < 30) timer.classList.add("end");		//change the color of the timer
				timer.innerHTML = `${hour}:${min}:${sec}`;
				x--;
			}, 1000);
}
