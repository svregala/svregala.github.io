const about = "<b style= 'color: rgb(78, 175, 78);'>Hi</b>, I'm Steve! Thanks for visiting the site!\n\n"
   + "<b style= 'color: rgb(78, 175, 78);'>I</b> recently graduated (May 2023) from the University of Southern California (USC) with a Master of Science (MS) degree in Computer Science. " 
   + "<b style= 'color: rgb(78, 175, 78);'>For</b> my undergraduate studies, I attended the University of California, Santa Barbara (UCSB) " 
   + "and graduated with a Bachelor of Science (BS) degree in Applied Mathematics and a minor in Statistical Science. "
   + "<b style= 'color: rgb(78, 175, 78);'>I</b> enjoy learning and applying new technologies, and thus enjoy the process of building sofware applications; "
   + "with no specified interest just yet, I'm very open to exploring and working in different parts of the software engineering/development industry. "
   + "<b style= 'color: rgb(78, 175, 78);'>In</b> my free time, I like to hang out with my family and friends; we play basketball and videogames, explore new places, and eat good food together. "
   + "<b style= 'color: rgb(78, 175, 78);'>Moreover</b>, I like to discuss philosophy and physics, more specifically, the purpose of life and our time here on Earth."


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

const program_web = "Java, JavaScript, Python, Swift, C, C++, HTML, CSS, Rest API, JSON, XML, Node.js"
const tools_frameworks = "SwiftUI, Angular, Bootstrap, Flask, Express, Google Cloud Platform (GCP), PostgreSQL, MongoDB, RDBMS, Unix/Linux, Git, Postman, VScode, Xcode, IntelliJ, Eclipse, Sublime Text, LaTeX"
const language = "Tagalog (Conversational), Spanish (Conversational)"

const skills = [program_web, tools_frameworks, language]

const project1 = {
   "project name" : "Yelp Business Search, Responsive Web and Mobile Application & iOS App Development",
   "project description" : "Overall, I built a fully responsive web application to search for thousands of " 
      + "businesses with the Yelp API using Angular, HTML, CSS, TypeScript, RxJS, and Bootstrap on the client side. "
      + "The application is deployed and managed on Google Cloud Platform (GCP). "
      + "The backend application is written in Node.js on the server side with the Express framework. "
      + "The application consists of features such as navigation bars, autocomplete, routing, search form, results table, business details card, and reservation form. "
      + "To further develop my skills, I expanded the web application to a native iOS application. I utilized Swift and SwiftUI framework on XCode to build an iOS application to which I delivered an intuitive mobile user interface, "
      + "providing users coherent results and informative details about the specified businesses. "
      + "Morever, I practiced the Model-View-ViewModel (MVVM) design pattern and applied third-party libraries through Swift Package Manager such as Alamofire, Kingfisher, and SwiftyJSON.",
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

const project = [project1, project2, project3, project4, project5, project6]

const exp1 = {
   "company" : "Juni Learning",
   "role" : "Python Programming Instructor",
   "location" : "San Francisco, CA (Remote)",
   "duration" : "June 2021-Present",
   "desc" : "My main role is to educate and engage students to learn foundational concepts of Python programming in a challenging course. "
      + "I also develop a class schedule and administer homework assignments for students to follow to succeed in class."
}

const exp2 = {
   "company" : "Self-Employed Math Tutor",
   "role" : "Advanced Placement Calculus BC Student Tutor",
   "location" : "Sunnyvale, CA",
   "duration" : "June 2018–July 2018",
   "desc" : "My main role was to tutor a high school junior to prepare for a Calculus BC class and Advanced Placement Test. "
      + "I also set up a teaching curriculum that followed closely with the high school class curriculum, which ensured effective and comprehensive preparation."
}

const experience = [exp1, exp2]

export {about, education, skills, project, experience};