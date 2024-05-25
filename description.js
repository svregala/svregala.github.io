const about = "<b style= 'color: rgb(78, 175, 78);'>Hi</b>, I'm Steve! Thanks for visiting the site!\n\n"
   + "<b style= 'color: rgb(78, 175, 78);'>I</b> recently graduated (May 2023) from the University of Southern California (USC) with a Master of Science (MS) degree in Computer Science. " 
   + "<b style= 'color: rgb(78, 175, 78);'>For</b> my undergraduate studies, I attended the University of California, Santa Barbara (UCSB) " 
   + "and graduated with a Bachelor of Science (BS) degree in Applied Mathematics and a minor in Statistical Science. "
   + "<b style= 'color: rgb(78, 175, 78);'>I</b> enjoy learning and applying new technologies, and thus enjoy the process of building sofware applications; "
   + "with no specified interest just yet, I'm very open to exploring and working in different parts of the software engineering/development industry. "
   + "<b style= 'color: rgb(78, 175, 78);'>In</b> my free time, I like to hang out with my family and friends; we play basketball and videogames, explore new places, and eat good food together. "
   + "<b style= 'color: rgb(78, 175, 78);'>Moreover</b>, I like to discuss philosophy and physics, more specifically, the purpose of life and our time here on Earth. "
   + "<b style= 'color: rgb(78, 175, 78);'>If</b> you get this far in the about me, thank you! <b style= 'color: rgb(78, 175, 78);'>It means a lot to me!</b> "

const educationGrad = {
   "school" : "University of Southern California (USC), Viterbi School of Engineering",
   "degree" : "Master of Science (MS) in Computer Science",
   "graduation" : "May 2023",
   "coursework" : "Programming Systems Design–Java, Database Systems, Operating Systems, Computer Networks, Analysis of Algorithms, Web Technologies, Foundations of Artificial Intelligence, Information Retrieval and Web Search Engines, Multimedia Systems Design"
}

const educationUndergrad = {
   "school" : "University of California, Santa Barbara (UCSB), College of Letters and Sciences",
   "degree" : "Bachelor of Science (BS) in Applied Mathematics; minor in Statistical Science",
   "graduation" : "June 2021",
   "coursework" : "Advanced Linear Algebra, Numerical Analysis, Statistical Machine Learning, Probability & Statistics, Regression Analysis, Multivariable Vector Calculus with Applications, Ordinary Differential Equations, Matrix Analysis, Complex Variable Analysis, Physics"
}

const educationHS = {
   "school" : "Homestead High School",
   "degree" : "Not Applicable",
   "graduation" : "August 2017",
   "coursework" : "Not Applicable"
}

const education = [educationGrad, educationUndergrad, educationHS]

const program_lang = "Java, Python, JavaScript, C, C++"
const web_mobile_app_dev = "HTML, CSS, Angular, Bootstrap, iOS App Development (Swift & SwiftUI)"
const backend_tech = "Node.js, Express.js, REST API, Python Flask, Docker"
const db_cloud = "SQL (PostgreSQL), NoSQL (MongoDB), Google Cloud Platform (GCP)"
const tools = "Git, GitHub, Postman"

const skills = [program_lang, web_mobile_app_dev, backend_tech, db_cloud, tools]

const project1 = {
   "project name" : "Business Finder: User-Friendly Yelp Alternative – Responsive Web and Mobile Application",
   "project description" : "Overall, I built a responsive web app serving as a simplified iteration of Yelp, facilitating user exploration and reservation requests. " 
      + "The application is deployed and managed on Google Cloud Platform (GCP). "
      + "The frontend was constructed using Angular, HTML, CSS, TypeScript, and Bootstrap to which I created a dynamic and responsive user interface. "
      + "I created the backend server with Node.js and Express framework, serving as a RESTful API endpoint; I leveraged the Yelp API to search for thousands of businesses and employed PostgreSQL as the database system for retrieving, storing, and deleting user reservation requests. "
      + "The application consists of features such as navigation bars, autocomplete, routing, search form, results table, business details card, and reservation form. "
      + "I also acquired proficiency in Docker to containerize the app, gaining hands-on experience in deployment and management practices. "
      + "To further develop my skills, I expanded the web application to a native iOS application. I utilized Swift and SwiftUI framework on XCode to build an iOS application to which I delivered an intuitive mobile user interface, "
      + "providing users coherent results and informative details about the specified businesses. "
      + "I practiced the Model-View-ViewModel (MVVM) design pattern and applied third-party libraries through Swift Package Manager such as Alamofire, Kingfisher, and SwiftyJSON.",
   "Web link" : "https://csci-homework-8.wl.r.appspot.com/",
   "project github iOS" : "https://github.com/svregala/Yelp_Business_Search_iOS_App_Development",
   "project github web" : "https://github.com/svregala/Yelp_Business_Search_Responsive_Website_and_Mobile_Development",
   "video demo iOS" : "https://youtu.be/jpORb9KFZLE",
   "video demo web browser" : "https://youtu.be/W5lzIFnYYVU",
   "video demo mobile browser" : "https://www.youtube.com/watch?v=fhoi_OPxm8g"
}

const project2 = {
   "project name" : "Artificial Intelligence Projects",
   "project description" : "Overall, I completed 3 projects that exhibited AI techniques like "
      + "search optimization, game playing, reinforcement learning, and neural networks. "
      + "First, I applied the Genetic Algorithm to a 3D Travelling-Salesman Problem using Java to find the optimal path given a list of 3D coordinates. "
      + "Second, I developed an AI agent based on the Minimax algorithm with Alpha-Beta pruning using Python to play Go-5x5 (Little-Go); I successfully outperformed the random, greedy, aggressive, alpha-beta, and Q-learner agents constructed by the course producers. "
      + "Lastly, I implemented a multi-layer perceptron (MLP) neural network from scratch (without the use of machine learning libraries and external libraries other than NumPy) using Python, and used it to classify from four different datasets: Spiral, Circle, XOR, Gaussian. I achieved 94%+ accuracy on each of the sample datasets provided in course grading.",
   "project github genetic" : "https://github.com/svregala/Genetic-Algorithm-on-Travelling-Salesman-Problem-TSP",
   "project github minmax" : "https://github.com/svregala/Minimax-Algorithm-with-Alpha-Beta-Pruning-to-play-Go-5x5",
   "project github MLP" : "https://github.com/svregala/Multi-Layer-Perceptron-MLP-Neural-Network-from-Scratch"
}

const project3 = {
   "project name" : "Socket Programming",
   "project description" : "Using C++, I created a simplified version of a blockchain service called Txchain, where a client issues a request for finding their current balance in their account, transfers coins to another client, and provides a file statement with all transactions in order across multiple servers. "
      + "To implement communication channels, I utilized TCP and UDP messaging protocols. "
      + "Additionally, I programmed all corresponding servers; the client and monitor servers send requests to a central server which in turn interacts with three other backend servers for real time updates, transferring information, and data processing.",
   "project github socket" : "https://github.com/svregala/Socket-Programming-EE450-Final-Project"
}

const project4 = {
   "project name" : "Weenix Kernel Implementation",
   "project description" : "Using C, I developed code to establish the fundamental components (threads and processes) of the Weenix operating system, allowing the kernel to run several threads and processes concurrently in kernel mode. "
      + "I also engineered a virtual file system to provide a common interface between the operating system kernel and the various file systems. "
      + "Lastly, I implemented the virtual memory so that the kernel can manage user address spaces, run user-level code, and service system calls.",
   "project github weenix" : "https://github.com/svregala/Weenix-Kernel-Implementation"
}

const project5 = {
   "project name" : "HackSC Project - Fin-Friends (USC Hackathon 2023 Submission)",
   "project description" : "I spearheaded the development of a full-scale web application aimed at improving user’s financial literacy and connecting with like-minded individuals. I led a team of developers in building a prototype of the web application using Angular, Node.js (Express framework), and MySQL. "
   + "The inspiration for this project idea stemmed from the need to increase financial literacy among people, especially college students. This application is intended to help users find friends in the financial space and to provide a safe space for everyone who wants to learn about finance while navigating through different aspects of life such as college, buying a house, investing in retirement or stocks, and more.",
   "project github HackSC" : "https://github.com/svregala/HackSC_Project"
}

const project6 = {
   "project name" : "Computer Vision-based Video Indexing and Interactive Playback System",
   "project description" : "In this project, I led a team of 4 to complete a project focused on developing an automated solution for creating a logical index (table of contents) for video content with audio. "
      + "To determine the scene/shot/subshot changes, we mainly utilized the OpenCV library, more specifically, determining frame differences with histogram comparison using a combination of Chi-Square and Bhattacharyya coefficients. "
      + "My team and I also designed and implemented a user-friendly interactive player setup that allowed seamless browsing and exploration of the video content based on the extracted index, while ensuring synchronization between audio and video playback. "
      + "For our interactive player, we mainly used the Tkinter, Pygame, and PIL libraries. ",
   "project github video" : "https://github.com/svregala/Video_Index_Creation_with_Interactive_Player"
}

const project7 = {
   "project name" : "Multi-threading: Token Bucket Simulation",
   "project description" : "Using C, I designed a traffic shaper to transmit/service packets controlled by a token bucket filter using multi-threading within a single process. "
      + "I implemented five different threads working together to efficiently transmit packet objects in a time-driven fashion; when the program runs, it produces a simulation trace (printed timestamps) for every important event. "
      + "I engineered the program to account for versatility such as processing input files and modifying settings using user-specified parameters. "
      + "Read about the bucket filter in the link below!",
   "project github bucket" : "https://github.com/svregala/Multithreading_Token_Bucket_Simulation"
}

const project8 = {
   "project name" : "Bank Statement Formatter: Doubly-Linked Circular List",
   "project description" : "Using C, I implemented a doubly-linked circular list. It will be used as the representation for a list of transactions (or transaction objects). "
      + "Moreover, this is a program that will process a file of unsorted transaction records and produce a sorted transaction history with computed balances; it will also check for various types of file and format errors. "
      + "Test out the program by reading more below!",
   "project github bank" : "https://github.com/svregala/Bank_Statement_Formatter_DoublyLinked_Circular_List"
}

const project9 = {
   "project name" : "Web Crawl",
   "project description" : "In this project, I expand on an existing web crawler to measure the aspects of a crawl, study the characteristics of the crawl, download web pages from the crawl, and gather webpage metadata. "
      + "We can choose which news sites to crawl by editing some of the code, but for this repository, we crawl the USA Today news site (https://www.usatoday.com). "
      + "After running, the crawl creates 3 CSV files (fetch_usatoday.csv, urls_usatoday.csv, visit_usatoday,csv) and 1 text file (CrawlReport_usatoday.txt). "
      + "More information about what these 3 files are about are in the link below!",
   "project github crawl" : "https://github.com/svregala/https://github.com/svregala/Web_Crawling"
}

const project10 = {
   "project name" : "Hash Table Implementation using Linked Lists",
   "project description" : "Using C++, I implemented a hash table using linked lists. This program can be tested using the command prompt in terminal or autonomously. "
      + "Check out the program by reading more in the link!",
   "project github hash" : "https://github.com/svregala/Hash_Table_Implementation_using_Linked_Lists"
}

const project11 = {
   "project name" : "Scrabble Word Finder",
   "project description" : "Using Java, given an existing dictionary (or user-provided dictionary) and a rack (starting letters), the program will output a list of possible combinations of letters that could be used from the rack sorted by score in descending order. "
      + "Try the program yourself by clicking the link!",
   "project github scrabble" : "https://github.com/svregala/Scrabble_Word_Finder"
}

const project12 = {
   "project name" : "Mine Sweeper Game",
   "project description" : "Using Java, I recreated the classic Mine Sweeper game featuring a graphical user interface, providing an intuitive window for user interaction. "
      + "I programmed the game logic to simulate the puzzle challenge of uncovering squares in a minefield while avoiding hidden mines. "
      + "Minesweeper is a game where mines are hidden in various random locations in a two-dimensional minefield. The player has to figure out where all the mines are without exploding a mine. They do this by repeatedly uncovering locations, and guessing mine locations, until they uncover all of the non-mine locations (win) or they explode a mine (lose). "
      + "This is more than a game of chance, because when a non-mine square is uncovered it displays the number of mines adjacent to that square. The player can use that information to figure out where the mines are (or at least narrow down their locations). "
      + "Try the game yourself on your local computer by clicking the link!",
   "project github mine" : "https://github.com/svregala/Mine_Sweeper_Game"
}

const project13 = {
   "project name" : "Image Compression using Vector Quantization",
   "project description" : "Using Java, we better our understanding of image compression. We perform image compression using vector quantization. "
      + "To compress an image with M=2 (2 adjacent pixels side by side), we first initialize our code words, N, which is the number of vectors (assume it's a power of 2 -- thus after quantization, each vector will need an index with logN bits). "
      + "Then, we use K-Means clustering to cluster the vectors around each code word. Then, we refine and update the code words depending on the clusters that were created in K-Means clustering (programmed manually with no use of external libraries). "
      + "After repeating the previous 2 steps until convergence, we quantize the input vectors to produce an output image. The extra credit is similar except it is able to handle values of M = 4, 16, and 64, in addition to M=2. "
      + "Try out the program by clicking the link!",
   "project github compression" : "https://github.com/svregala/Image_Compression_using_Vector_Quantization"
}

const project14 = {
   "project name" : "Inverted Index Creation",
   "project description" : "In this project, we write code using Java to create a unigram index and a bigram index that is a part of a self-contained, complete, minimal MapReduce process; "
      + "it is code that indexes words from multiple text files (files exist in \"data\" folder), and outputs an inverted index that looks like what is shown in both unigram_index.txt and selected_bigram_index.txt. "
      + "The input data in the data folder is already cleaned, e.g. newline (backslash n) and return (backslash r) characters. However, tab (backslash t) character exists between the document ID and the document text (taken care of in the code in map method). In other words, the input files are in a key-value format where docID is the key, and the contents are the value; the key and value are separated by a tab. "
      + "After running UnigramIndex.java and BigramIndex.java, unigram_index.txt and selected_bigram_index.txt are created respectively. "
      + "Read more about it by clicking the link!",
   "project github invert" : "https://github.com/svregala/Inverted_Index_Creation"
}

const project15 = {
   "project name" : "Spatial Temporal Resampling and Aliasing",
   "project description" : "In this project, we gain a practical understanding of resampling and filtering in the spatial and temporal domain. Part 1 explores sampling and aliasing issues in the spatial domain, while part 2 explores sampling and aliasing issues in the temporal domain. "
      + "In part 1, we display 2 images side by side: the left image will be the original image, and the right side is a resampled version of the original image. The resampled image is a scaled down version of the original image (utilized 3x3 average neighborhood filtering technique); this algorithm allows us to overcome/meet the Nyquist sampling criteria, resulting in minimal aliasing. "
      + "In part 2, we display 2 videos side by side: the left video is a clockwise rotating radial pattern at a certain speed, and the right video is the same thing as the left except it will be given an fps (frames per second) rate of display. For the video on the right, it must be that the refresh rate (fps) is more than twice the rotational speed for them to look the same. "
      + "Check out the project in the link below!",
   "project github sampling" : "https://github.com/svregala/Spatial_Temporal_Resampling_and_Aliasing"
}

const project16 = {
   "project name" : "Search Engine Comparison",
   "project description" : "In this project, we compare the search results from Google with the results from DuckDuckGo specifically (or other search engines like Bing, Yahoo, and Ask, if edited). In particular, we: "
      + "(1) Scrape the results from DuckDuck Go (SearchEngine.py), and "
      + "(2) Determine the Pecent Overlap and Spearman Coefficient, compared against given Google results (CompareResults.py). "
      + "More details about the project in the link below!",
   "project github search" : "https://github.com/svregala/Search_Engine_Comparison"
}

const project17 = {
   "project name" : "Bookshelf Keeper",
   "project description" : "This is a program to interact with a bookshelf-keeper, that maintains a shelf of books in increasing order by height. The program enables users to perform a series of put and pick operations via a BookshelfKeeper object. "
      + "The pick operation refers to a case where you need to pick a book from a given position (index), and the put operation refers to putting a book of given height on the shelf, such that the bookshelf remains sorted after completing any operation. "
      + "The user input consists of the initial state of our bookshelf and a series of pick and put operations to perform; for each operation it will print out the contents of the updated bookshelf, the number of lower-level book-moving operations used, and the total number of lower-level operations used since the start of the program. "
      + "Read more about it in the link below!",
   "project github book" : "https://github.com/svregala/Bookshelf_Keeper"
}

const project18 = {
   "project name" : "Coin Toss Simulation Visualization",
   "project description" : "This is a program that provides a visualization of a coin toss simulation, more specifically tossing 2 separate coins counts as a trial. When the program is ran, the user will be asked to input a number representing how many trials should occur. "
      + "Try out the project in the link below!",
   "project github coin" : "https://github.com/svregala/Coin_Toss_Simulation_Visualization"
}

const project = [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13, project14, project15, project16, project17, project18]

const exp1 = {
   "company" : "Juni Learning",
   "role" : "Computer Science Instructor",
   "location" : "San Francisco, CA (Remote)",
   "duration" : "June 2021-Present",
   "desc" : "I teach weekly one-on-one coding lessons to elementary, junior high, and high school students in advanced Java, Python, C++, and Web Development using a project-based curriculum, and provide detailed feedback on students’ progress and learning goals. "
   + "I develop thorough teaching plans and maintain records across various courses and skill levels, with an average class size of 8-12 students per week."
   + "Moreover, I have led more than 380 lessons!"
}

const exp2 = {
   "company" : "Self-Employed Math Tutor",
   "role" : "Mathematics Tutor for Algebra, Geometry, and Number Theory",
   "location" : "Sunnyvale, CA",
   "duration" : "July 2021–August 2021",
   "desc" : "I tutored both a 3rd grade and a 5th grade student in advanced algebra, geometry, and number theory, following the curriculum from \"The Art of Problem Solving\" series. "
      + "I ensured effective learning by administering homework assignments and constant practice problems with extensive discussions."
}

const exp3 = {
   "company" : "Self-Employed Math Tutor",
   "role" : "Advanced Placement (AP) Calculus BC Student Tutor",
   "location" : "Sunnyvale, CA",
   "duration" : "June 2018–July 2018",
   "desc" : "My main role was to tutor a high school junior to prepare for a Calculus BC class and Advanced Placement Test. "
      + "I also set up a teaching curriculum that followed closely with the high school class curriculum, which ensured effective and comprehensive preparation."
}

const exp4 = {
   "company" : "Chick-Fil-A",
   "role" : "Food Service Team Member",
   "location" : "Sunnyvale, CA",
   "duration" : "April 2017–June 2018",
   "desc" : "I handled transactions, worked with team of employees, and ensured overall customer satisfaction."
}

const exp5 = {
   "company" : "University of California, Santa Barbara (UCSB)",
   "role" : "California NanoSystems Institute Research Intern (Apprenticeship)",
   "location" : "Santa Barbara, CA",
   "duration" : "August 2017–August 2017",
   "desc" : "With a group, I performed research on Generalizing Categorization of the brain with a team, and conducted tests on human subjects to stimulate their ability to implicitly and explicitly categorize images of objects."
   + "We analyzed how the results of categorizing adaptability could be applied to computer vision."
}

const experience = [exp1, exp2, exp3, exp4, exp5]

export {about, education, skills, project, experience};