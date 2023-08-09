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
   "graduation" : "May 2023"
}

const educationUndergrad = {
   "school" : "University of California, Santa Barbara (UCSB), College of Letters and Sciences",
   "degree" : "Bachelor of Science (BS) in Applied Mathematics; minor in Statistical Science",
   "graduation" : "June 2021"
}

const educationHS = {
   "school" : "Homestead High School",
   "degree" : "Not Applicable",
   "graduation" : "August 2017"
}

const education = [educationGrad, educationUndergrad, educationHS]

const project1 = {
   "project name" : "Yelp Business Search, Responsive Web and Mobile App Development & iOS App Development",
   "project description" : "Overall, I built a fully responsive web application to search for thousands of " 
      + "businesses with the Yelp API using Angular, HTML, CSS, TypeScript, RxJS, and Bootstrap on the client side. "
      + "The application is deployed and managed on Google Cloud Platform (GCP). "
      + "The backend application is written in Node.js on the server side with the Express framework. "
      + "The application consists of features such as navigation bar, autocomplete, routing, search form, results table, business details card, and reservation form. "
      + "To further develop my skills, I expanded the web application to a native iOS application. I utilized Swift and SwiftUI framework on XCode to build a native iOS application that allows users to perform a business search; "
      + "with the help of the Yelp API, it provides users coherent results and informative details about the specified businesses. "
      + "Morever, I practiced the Model-View-ViewModel (MVVM) design pattern and applied third-party libraries through Swift Package Manager such as Alamofire, Kingfisher, and SwiftyJSON.",
   "Web link" : "https://csci-homework-8.wl.r.appspot.com/",
   "project github iOS" : "https://github.com/svregala/Yelp_Business_Search_iOS_App_Development",
   "project github web" : "https://github.com/svregala/Yelp_Business_Search_Responsive_Website_and_Mobile_Development",
   "video demo iOS" : "https://youtu.be/jpORb9KFZLE",
   "video demo web browser" : "https://youtu.be/W5lzIFnYYVU",
   "video demo mobile browser" : "https://www.youtube.com/watch?v=fhoi_OPxm8g"
}

const project2 = {
   "project name" : "Artificial Intelligence (AI) Projects",
   "project description" : "Overall, I completed 3 projects that exhibited AI techniques like "
      + "search optimization, game playing, reinforcement learning, and neural networks. "
      + "First, I applied the Genetic Algorithm to a 3D Travelling-Salesman Problem using Java to find the optimal path given a list of 3D coordinates. "
      + "Second, I developed an AI agent based on the minimax algorithm with Alpha-Beta pruning using Python to play Go-5x5 (Little-Go); I successfully outperformed the random, greedy, aggressive, alpha-beta, and Q-learner agents constructed by the course producers. "
      + "Lastly, I implemented a multi-layer perceptron (MLP) neural network from scratch (without the use of machine learning libraries and external libraries other than NumPy) using Python, and used it to classify from four different datasets: Spiral, Circle, XOR, Gaussian. I was able to achieve 94%+ accuracy on each of the sample datasets provided in course grading.",
   "project github genetic" : "https://github.com/svregala/Genetic-Algorithm-on-Travelling-Salesman-Problem-TSP",
   "project github minmax" : "https://github.com/svregala/Minimax-Algorithm-with-Alpha-Beta-Pruning-to-play-Go-5x5",
   "project github MLP" : "https://github.com/svregala/Multi-Layer-Perceptron-MLP-Neural-Network-from-Scratch"
}

const project3 = {
   "project name" : "Socket Programming",
   "project description" : "Using C++, I created a simplified version of a blockchain service called Txchain, where a client issues a request for finding their current balance in their account, transfers coins to another client, and provides a file statement with all transactions in order across multiple servers. "
      + "To implement communication channels, I utilized TCP and UDP messaging protocols. "
      + "Additionally, I programmed all corresponding servers; the client and monitor servers send requests to a central server which in turn interacts with three other backend servers for real time updates, pulling information, and data processing.",
   "project github socket" : "https://github.com/svregala/Socket-Programming-EE450-Final-Project"
}

const project4 = {
   "project name" : "Weenix Kernel Implementation",
   "project description" : "Using C, I developed code for the building blocks (threads and processes) of the Weenix operating system, which runs concurrently in kernel mode. "
      + "I also coded a virtual file system as it provides a common interface between the operating system kernel and the various file systems. "
      + "Lastly, I implemented the virtual memory so that the kernel can manage user address spaces, run user-level code, and service system calls.",
   "project github weenix" : "https://github.com/svregala/Weenix-Kernel-Implementation"
}

const project5 = {
   "project name" : "HackSC Project - Fin-Friends (USC Hackathon 2023 Submission)",
   "project description" : "We are a full scale web application that will help people across the world to find friends in the financial space, and to financially become more literate with those who seek financial accountability. We are here to provide a safe space for everyone who wants to learn about finance while navigating through different aspects of life such as college, buying a house, investing in retirement or stocks, and more. "
      + "Our inspirations include the renowned social media platforms, however with our own personal twist that will target a huge population such as college students and/or people who are seeking financial literacy. We wanted to provide a safe space for users to improve their financial life as well as connect with others who are on the same boat or others who can teach them about finance in general. We built this idea as a web application to support the community and provide financial literacy. Some challenges we ran into were finding the incentive to lure in more users and presenting the content in a way that would engage every user. We’re proud of building something that we would use in our day to day lives; it could solve a crucial yet unaddressed issue among students. We learned the financial domain, understood the psychology of users, and implemented how to build a community with the tools and frameworks we have. We could scale this application to make it a real-time android/iOS app, and could reduce the disparity in financial literacy among people. "
      + "This prototype of the web application was planned to be built using the Angular, Node.js Express.js, and mySQL tech stack.",
   "project github HackSC" : "https://github.com/svregala/HackSC_Project"
}

const project6 = {
   "project name" : "Video Index Creation with Interactive Player",
   "project description" : "In this project, I led a team of 4 to complete a project focused on developing an automated solution for creating a logical index for video content with audio. "
      + "To determine the scene/shot/subshot changes, we mainly utilized the OpenCV (computer vision) library, more specifically, determining frame differences with histogram comparison using a combination of Chi-Square and Bhattacharyya coefficients. "
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

export {about, education, project, experience};