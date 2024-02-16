/** @Author: nyamwas
  * @Date: Wed Jan 24 18:37:00 EAT
  * @LastModifiedBy: nyamwas
  * @LastModifiedTime: Wed 7 Feb 16:17:00 EAT
  **/

var records = new Array()
var averageScore = new Array()
let list = [`<form id="register" onsubmit="verify()"><label>username: </label><input type="text" id="username" placeholder="admin"/><br><label>new password</label><input id="password" type="password" placeholder="******"/><br><br><input type="submit"/></form><br>`,`<p id="usr"></p>`,`<fieldset>
<img width="40" height="40" src="./shelf.png" alt="Library-Ideology"/>
<hr>
<form id="frm1" action="" onsubmit="validate()" method="post">
<label for="id19">
			Discuss four common activities to all software processes

</label>
<br>
				<input type="checkbox" id="choice11_5" name="qn5" value=""/>
				<label for="choice11_5">Input, Output, Processing, Storage</label><br>
				<input type="checkbox" id="choice12_5" name="qn5" value=""/>
				<label for="choice12_5">New, Ready, Running, Finished</label><br>
				<input type="checkbox" id="choice13_5" name="qn5" value=""/>
				<label for="choice13_5">Specification, Design and Implementation, Validation, Verification</label><br>
				<input type="checkbox" id="choice14_5" name="qn5" value=""/>
				<label for="choice14_5">Analysis, Design, Prototype, Deployment</label><br>
				<p id="varError1_1"></p>

<label>
Explain four disadvantages of the waterfall methodology at times used in the development of computer applications 

</label>
<br>
				<input type="checkbox" id="choice11_6" name="qn5" value=""/>
				<label for="choice11_6">Delays</label><br>
				<input type="checkbox" id="choice12_6" name="qn5" value=""/>
				<label for="choice12_6">Scope creep</label><br>
				<input type="checkbox" id="choice13_6" name="qn5" value=""/>
				<label for="choice13_6">Customer dissatisfaction</label><br>
				<input type="checkbox" id="choice14_6" name="qn5" value=""/>
				<label for="choice14_6">Low quality</label><br>
				<p id="varError2_1"></p>

<label>
What are the advantages of having a good user-friendly user interface for your computer applications
</label>
<br>
				<input type="checkbox" id="choice11_7" name="qn5" value=""/>
				<label for="choice11_7">Cost savings</label><br>
				<input type="checkbox" id="choice12_7" name="qn5" value=""/>
				<label for="choice12_7">Brand recognition</label><br>
				<input type="checkbox" id="choice13_7" name="qn5" value=""/>
				<label for="choice13_7">Increased productivity</label><br>
				<input type="checkbox" id="choice14_7" name="qn5" value=""/>
				<label for="choice14_7">Efficiency</label><br>
				<p id="varError3_1"></p>

<label>

Software development frameworks are becoming popular options when developing computer applications
Discuss two merits of using software development frameworks to develop computer applications

</label>
<br>
				<input type="checkbox" id="choice11_8" name="qn5" value=""/>
				<label for="choice11_8">It improves the organisation and control of a project</label><br>
				<input type="checkbox" id="choice12_8" name="qn5" value=""/>
				<label for="choice12_8">They are reusable tools</label><br>
				<input type="checkbox" id="choice13_8" name="qn5" value=""/>
				<label for="choice13_8">Reduces errors</label><br>
				<input type="checkbox" id="choice14_8" name="qn5" value=""/>
				<label for="choice14_8">They are compatible with different types of programming languages</label><br>
				<p id="varError4_1"></p>

<label>

Give four examples of software development frameworks, mentioning the programming languages supported by each framework
</label>
<br>
				<input type="checkbox" id="choice11_9" name="qn5" value=""/>
				<label for="choice11_9">Django - python</label><br>
				<input type="checkbox" id="choice12_9" name="qn5" value=""/>
				<label for="choice12_9">React - JavaScript</label><br>
				<input type="checkbox" id="choice13_9" name="qn5" value=""/>
				<label for="choice13_9">Angular - JavaScript</label><br>
				<input type="checkbox" id="choice14_9" name="qn5" value=""/>
				<label for="choice14_9">Laravel - python</label><br>
				<p id="varError5_1"></p>




<input type="submit"/>
<input type="reset">
</form>
<legend>quiz</legend></fieldset> 
`,`<fieldset>
<img width="40" height="40" src="./shelf.png" alt="Library-Ideology"/>
<hr>
<form action="" onsubmit="validateTwo()" id="frm2" method="post">
<label for="id19">
Linear Algebra applications range from signal analysis to machine learning problems. Below is a diagram depicting several road junctions and the number of vehicles counted on various streets in a span of 12 hours. Using row echelon method to perform row reduction, compute the values of x1,x2,x3,x4 and x5, which in the end can guide the traffic control department in effective traffic management at three junctions 
</label>
<br>
				<input type="checkbox" id="choice21_5" name="qn5" value=""/>
				<label for="choice21_5">2,3,5,7, 11</label><br>
				<input type="checkbox" id="choice22_5" name="qn5" value=""/>
				<label for="choice22_5">2,4,6,8,10</label><br>
				<input type="checkbox" id="choice23_5" name="qn5" value=""/>
				<label for="choice23_5">1,1,2,3,5</label><br>
				<input type="checkbox" id="choice24_5" name="qn5" value=""/>
				<label for="choice24_5">1,3,5,7,9,11</label><br>
				<p id="varError1_2"></p>




<input type="submit">
<input type="reset">
</form>
<legend>quiz</legend></fieldset>
`,`<fieldset>
<img width="40" height="40" src="./shelf.png" alt="Library-Ideology"/>
<hr>
<form action="" onsubmit="validateThree()" id="frm3">
<label for="id19">

define the following terms in regard to systems design and development<br> 
System 
Malleability 

</label>
<br>
				<input type="checkbox" id="choice31_5" name="qn5" value=""/>
				<label for="choice31_5">constant pressure for software to be changed rather than replaced</label><br>
				<input type="checkbox" id="choice32_5" name="qn5" value=""/>
				<label for="choice32_5">the degree to which the elements inside a module belong together.</label><br>
				<input type="checkbox" id="choice33_5" name="qn5" value=""/>
				<label for="choice33_5">the inter-dependency or degree of relationship between multiple modules/packages/components</label><br>
				<input type="checkbox" id="choice34_5" name="qn5" value=""/>
				<label for="choice34_5">the ability of a software system to continue functioning correctly and reliably even in the face of unexpected or abnormal inputs or situations</label><br>
				<p id="varError1_3"></p>

<label>
Modularity 
</label>
<br>
				<input type="checkbox" id="choice31_5" name="qn5" value=""/>
				<label for="choice31_5">how well software is decomposed into smaller pieces with standardized interfaces</label><br>
				<input type="checkbox" id="choice32_5" name="qn5" value=""/>
				<label for="choice32_5">the ability of a software system to continue functioning correctly and reliably even in the face of unexpected or abnormal inputs or situations</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">constant pressure for software to be changed rather than replaced</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">the inter-dependency or degree of relationship between multiple modules/packages/components</label><br>
				<p id="varError2_3"></p>

<label>

Ergonomics 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">the overall process of arranging a workplace, systems, and equipment in a way that makes it easy for people to use them</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">the inter-dependency or degree of relationship between multiple modules/packages/components</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">the ability of a software system to continue functioning correctly and reliably even in the face of unexpected or abnormal inputs or situations</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">constant pressure for software to be changed rather than replaced</label><br>
				<p id="varError3_3"></p>

<label>
Robustness

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">the ability of a software system to continue functioning correctly and reliably even in the face of unexpected or abnormal inputs or situations</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">the inter-dependency or degree of relationship between multiple modules/packages/components</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">the degree to which the elements inside a module belong together.</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">the overall process of arranging a workplace, systems, and equipment in a way that makes it easy for people to use them</label><br>
				<p id="varError4_3"></p>

<label>

What is structured analysis 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">graphical tools that analyze and refine the objectives of an existing system and develop a new system specification which can be easily understandable by user</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">study is performed on a software project to understand the viability of the product</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">the process of using current and historical data to identify trends and relationships</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">the process of using data to forecast future outcomes</label><br>
				<p id="varError4_3"></p>

<label>

Describe any three structured analysis tools

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Data Flow Diagrams</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Data dictionary</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Pseudocode</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5_3"></p>

<label>
Describe four different Types of feasibility studies in systems analysis
</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Schedule feasibility</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Economic feasibility</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Technical feasibility</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">Operational feasibility</label><br>
				<p id="varError6_3"></p>

<label>

Describe four different maintenance strategies in systems development 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Preventive Maintenance</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Corrective Maintenance</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Predictive Maintenance</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">Reactive maintenance</label><br>
				<p id="varError7_3"></p>

<label>

Discuss the waterfall model of systems development

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Requirements gathering, Design, Implementation, Testing, Deploying, Maintenance</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Requirements gathering, Design, Construction, Testing, Deployment, Feedback</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Requirements gathering, Design, Building Prototype, Evaluation,Refining Prototype</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError8_3"></p>

<label>

Suppose Safaricom's Mpesa system is in the last phase of the systems development i.e. review stage pending the start of a new cycle. A new financial transaction transaction system proposed to replace the current Mpesa system. Identify and explain five functional requirements for the proposed system

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Performance, Security, Portability, Scalability, Reliability</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Authentication, Validation, Verification, Data manipulation and processing, Administrative functions</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Completeness, Atomicity, Traceability, Relevance, </label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">Products, systems, software, and processes</label><br>
				<p id="varError9_3"></p>



<input id="id19" type="submit"/>
<input type="reset">
</form>
<legend>quiz</legend></fieldset>`,`<fieldset>
<img width="40" height="40" src="./shelf.png" alt="Library-Ideology"/>
<hr>
<form action="" onsubmit="validateFour()" id="frm4" method="post">
<label for="id19">


Differentiate the following terms as used in databases
</label>
<br>

<label>

Distributed database and decentralized database 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">a database that consists of two or more files located in different sites either on the same network or on entirely different networks</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">a type of database that stores and provides access to data points that are related to one another</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">a database system that can work with complex data objects</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">allows for multiple users to access the same data without having to share information with each other</label><br>
				<p id="varError1_4"></p>

<label>
Data repository and Data dictionary 
</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">a logical, but also sometimes physical grouping of data from related but separate databases</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">a collection of names, definitions, and attributes about data elements that are being used or captured in a database</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">a centralized database architecture used to store and maintain the data in a fixed format or fields in a file</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError2_4"></p>

<label>


Transitive dependency and functional dependency

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">when one non-prime attribute is dependent on another non-prime attribute</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">a relationship between two sets of attributes in a database, where one set (the determinant) determines the values of the other set (the dependent)</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">represents an association between two fundamental entities that has a potential many-to-many cardinality or that holds some attributes</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">a thing, person, place, unit, object or any item about which the data should be captured and stored in the form of properties, workflow and tables</label><br>
				<p id="varError3_4"></p>

<label>

Transaction log and change log

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">a list that provides you with the ability to recover your environment to a consistent state and preserve the integrity of your data</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">a list that provides the information about changes made against the database objects</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">a sequence of recorded computer events that involves any activity around the operating system, applications or user actions</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">A list that notes the rollback of a particular change to the database</label><br>
				<p id="varError4_4"></p>

<label>

State and explain five disadvantages from traditional file systems

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Competition, Complexity,Lack of standards,
Lack of experience, associated increased costs</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Competition</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Complexity
Cost,Data integrity,Maintenance problem,Performance</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">Limited data sharing, lack of security, limited scalability, flexibility</label><br>
				<p id="varError5_4"></p>

<label>

State and explain benefits resulting from client server database architecture

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">improved scalability, centralized management and control, better security, and the ability to share resources</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Network Traffic Congestion</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">increased cost</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError6_4"></p>

<label>

Outline two approaches applicable when performing back-up for large databases 
</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">undo, or reverse the effects of a transaction</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">redo, or replay the effects of a transaction</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">using cloud storage</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">using physical backup</label><br>
				<p id="varError7_4"></p>

<label>


State conditions that suggest we should model a relationship into an association entity 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">When an association is between more than two fundamental entities, contains data or can have several contexts (relationship types) then an associative entity is used</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">When a run-time error is discovered</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">When a compile time error is discovered</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError8_4"></p>

<label>

Briefly explain the objectived and trade-offs of distributed database systems
</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">scalability,  data locality, cost-effectiveness, flexibility, </label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">high availability</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">fault tolerance</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">global availability</label><br>
				<p id="varError9_4"></p>

<input id="id19" type="submit"/>
<input type="reset">
</form>
<legend>quiz</legend></fieldset>
`,`<fieldset>
<img width="40" height="40" src="./shelf.png" alt="Library-Ideology"/>
<hr>
<form action="" onsubmit="validateFive()" id="frm5" method="post">
<label for="id19">

Solve the following system of linear equations using an inverse matrix 
X+2y+2z=5
3x-2y+z=-6
2x+y-z=-1

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">x = 1, y = 2, z = 3</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">x = 2, y = 4, z = 6</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">x = 2, y = 3, z = 5</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError1_5"></p>

<label>
Discuss three common sources of numerical errors in computer programs

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Transcription error</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Transposition error</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Approximation error</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError2_5"></p>

<label>
Determine Eigen values and Eigen vectors of the square matrix A below 
A=7,3,3,-1

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">value = 0, vector = [[3,5],[7,11]]</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">value = 1, vector = [[13,17],[21,23]]</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">value = 2, vector = [[3,5],[7,11]]</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError3_5"></p>

<label>

Using appropriate examples, explain three theorems of Eigen values and Eigen vectors 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5"> Two distinct real eigenvalues,  Complex conjugate eigenvalue,  One eigenvalue, one eigenvector.</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">If A is an n × n matrix, then the sum of the n eigenvalues of A is the trace of A and the product of the n eigenvalues is the determinant of A</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Decomposition</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">De Morgan's theorem</label><br>
				<p id="varError4_5"></p>


<input id="id19" type="submit"/>
<input type="reset">
</form>
<legend>quiz</legend>
</fieldset>`,`<fieldset>
<legend>quiz</legend>
<img src="./shelf.png" height="40" width="40" alt="">
<hr>
<form id="frm6" onsubmit="validateSix()">
<label for="id19">

Distinguish between the TCP and IP protocols found on the internet

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Transmission Control Protocol (TCP) is a communications standard that enables application programs and computing devices to exchange messages over a network while Internet Protocol (IP) is a set of standards for addressing and routing data on the Internet</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Transmission Control Protocol (TCP) uses encryption for secure communication over a computer network while Internet Protocol (IP) is a standard communication protocol used for the transfer of computer files from a server to a client on a computer network</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Transmission Control Protocol (TCP) does not require prior communication to set up communication channels or data paths while Internet Protocol (IP) is used when operating network services securely over an unsecured network</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>

Explain briefly the meaning and importance of the following technologies in web applications development<br>
HTTP
</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Hypertext Transfer Protocol is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems.</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Hypertext Transfer Protocol uses encryption for secure communication over a computer network, and is widely used on the Internet.</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Hypertext Transfer Protocol is a cryptographic network protocol for operating network services securely over an unsecured network</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>


GRID

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Grid computing is a distributed architecture that uses a group of computers to combine resources</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5"> Grid computing is a model in which the client, a user or an application, sends a request to the server, which in turn responds</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Grid computing is arranging an application as a small set of loosely coupled components</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>

state two advantages of using CSS for styling

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">increased website speed</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">time efficiency,</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">flexibility</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">consistency</label><br>
				<p id="varError5"></p>

<label>

Name TWO Types of servers that are used in the internet and briefly explain their functions

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">Web server</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">Mail server</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">Application server</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">Database server</label><br>
				<p id="varError5"></p>

<label>

Using an example, explain the anatomy of a URL 

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">protocol</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">domain</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">path</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">query</label><br>
				<p id="varError5"></p>

<label>

Outline the steps that describe what happens on a high level after an address is entered in the browser's address bar up to when the page is displayed on the browser

</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">The web browser requests a webpage using HTTP, the web browser establishes a TCP connection with the web server, The web server sends the requested webpage using HTTP, the web browser resolves the domain name using DNS</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">The web browser requests a webpage using HTTP,The web server sends the requested webpage using HTTP, the web browser resolves the domain name using DNS, the web browser establishes a TCP connection with the web server</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">The web browser requests a webpage using HTTP, the web browser establishes a TCP connection with the web server, the web browser resolves the domain name using DNS, The web server sends the requested webpage using HTTP</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>

Briefly describe the following http request-response methods<br>
GET
</label>
<br>
				<input type="checkbox" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">request method creates a new resource or replaces a representation of the target resource with the request payload</label><br>
				<input type="checkbox" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">requests a representation of the specified resource</label><br>
				<input type="checkbox" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">used to request a resource from the server</label><br>
				<input type="checkbox" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>
<input type="submit"/>
<input type="reset"/></form>
</fieldset>`,
`
<fieldset>
<legend>quiz</legend>
<img src="./shelf.png" height="40" width="40" alt="">
<hr>
<form id="frm7" onsubmit="validateSeven()">
<label for="id19">

Define the following terms<br>
A set

</label>
<br>
				<input type="checkbox" id="choice71_1" name="qn5" value=""/>
				<label for="choice1_5">a set is an abstract data type that can store unique values, without any particular order</label><br>
				<input type="checkbox" id="choice72_1" name="qn5" value=""/>
				<label for="choice2_5">indexed collection</label><br>
				<input type="checkbox" id="choice73_1" name="qn5" value=""/>
				<label for="choice3_5">an ordered, immutable collection of elements</label><br>
				<input type="checkbox" id="choice74_1" name="qn5" value=""/>
				<label for="choice4_5">values in a sequence</label><br>
				<p id="varError1_7"></p>

<label>

Power set


</label>
<br>
				<input type="checkbox" id="choice71_2" name="qn5" value=""/>
				<label for="choice1_5">values in a sequence</label><br>
				<input type="checkbox" id="choice72_2" name="qn5" value=""/>
				<label for="choice2_5">a set which includes all the subsets including the empty set and the original set itself</label><br>
				<input type="checkbox" id="choice73_2" name="qn5" value=""/>
				<label for="choice3_5">Set A is said to be a subset of Set B if all the elements of Set A are also present in Set B</label><br>
				<input type="checkbox" id="choice74_2" name="qn5" value=""/>
				<label for="choice4_5">an ordered data structure with elements separated by a comma and enclosed within square brackets</label><br>
				<p id="varError2_7"></p>

<label>
Relation

</label>
<br>
				<input type="checkbox" id="choice71_3" name="qn5" value=""/>
				<label for="choice1_5">defines what the name of the table is</label><br>
				<input type="checkbox" id="choice72_3" name="qn5" value=""/>
				<label for="choice2_5">databases that organize data in documents, collections, and graphs, allowing for a more flexible data model with the ability to store complex structures</label><br>
				<input type="checkbox" id="choice73_3" name="qn5" value=""/>
				<label for="choice3_5">a connection from a row of data to a column or type of data</label><br>
				<input type="checkbox" id="choice74_3" name="qn5" value=""/>
				<label for="choice4_5">has a single input for a single output</label><br>
				<p id="varError3_7"></p>

<label>


Equivalence

</label>
<br>
				<input type="checkbox" id="choice71_4" name="qn5" value=""/>
				<label for="choice1_5">A statement that two properties, descriptors or attributes of classes have similar meaning</label><br>
				<input type="checkbox" id="choice72_4" name="qn5" value=""/>
				<label for="choice2_5">same in all aspects</label><br>
				<input type="checkbox" id="choice73_4" name="qn5" value=""/>
				<label for="choice3_5">when you can map one perfectly onto the other by reflection, rotating, and translating it without distortion</label><br>
				<input type="checkbox" id="choice74_4" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError4_7"></p>

<label>


Truth table 


</label>
<br>
				<input type="checkbox" id="choice71_5" name="qn5" value=""/>
				<label for="choice1_5">used to describe sequential circuits</label><br>
				<input type="checkbox" id="choice72_5" name="qn5" value=""/>
				<label for="choice2_5"> a method for mapping out the possible truth values in an expression and to determine their outcomes</label><br>
				<input type="checkbox" id="choice73_5" name="qn5" value=""/>
				<label for="choice3_5">defines the next state of flip-flop in terms of flip-flop input and current state</label><br>
				<input type="checkbox" id="choice74_5" name="qn5" value=""/>
				<label for="choice4_5">determines what an algorithm does by running through it to see what happens as the algorithm runs</label><br>
				<p id="varError5_7"></p>

<label>
State and prove FOUR Laws of sets


</label>
<br>
				<input type="checkbox" id="choice71_6" name="qn5" value=""/>
				<label for="choice1_5">the commutative rule of addition, the commutative rule of multiplication, the associative rule of addition, the associative rule of multiplication, and the distributive property of multiplication</label><br>
				<input type="checkbox" id="choice72_6" name="qn5" value=""/>
				<label for="choice2_5">switching, addition, and multiplication</label><br>
				<input type="checkbox" id="choice73_6" name="qn5" value=""/>
				<label for="choice3_5">commutative, associative, distributive, identity</label><br>
				<input type="checkbox" id="choice74_6" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError6_7"></p>

<label>
Let A={a,b,c,d}, B={d,e,a,c}, C={d,b,a,c} and D={a,a,d,e,c,e} which of the above sets are equal
Suppose A={1,2,3}, B={u,v} and C={m,n}. List the elements of Ax(BxC)

</label>
<br>
				<input type="checkbox" id="choice71_7" name="qn5" value=""/>
				<label for="choice1_5">D = {a,a,d,e,c,e} and B = {d,e,a,c}</label><br>
				<input type="checkbox" id="choice72_7" name="qn5" value=""/>
				<label for="choice2_5">D = {a,a,d,e,c,e} and A={a,b,c,d}</label><br>
				<input type="checkbox" id="choice73_7" name="qn5" value=""/>
				<label for="choice3_5">D = {a,a,d,e,c,e} and C={d,b,a,c}</label><br>
				<input type="checkbox" id="choice74_7" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError7_7"></p>

<label>

Transform the following summation and product notation by making the change of variable I=k+1
sum from k=0 to k(k+1)

</label>
<br>
				<input type="checkbox" id="choice71_8" name="qn5" value=""/>
				<label for="choice1_5">sum from k=0 to k(k+1)</label><br>
				<input type="checkbox" id="choice72_8" name="qn5" value=""/>
				<label for="choice2_5">sum from k=0 to I = k+1</label><br>
				<input type="checkbox" id="choice73_8" name="qn5" value=""/>
				<label for="choice3_5">sum from k=0 to k(k+1)</label><br>
				<input type="checkbox" id="choice74_8" name="qn5" value=""/>
				<label for="choice4_5">sum from k=0 to k+1</label><br>
				<p id="varError8_7"></p>

</label>
<input id="id19" type="submit"/>
<input  type="reset"/></form>
</fieldset>`,

`<fieldset>
<legend>quiz</legend>
<img src="./shelf.png" height="40" width="40" alt="">
<hr>
<form id="frm8" onsubmit="validateEight()">
<label for="id19">
Explain three (3) skills needed by managers at different levels of management in an organization

</label>
<br>
				<input type="radio" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">O(n)</label><br>
				<input type="radio" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">O(1)</label><br>
				<input type="radio" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">O(n^2)</label><br>
				<input type="radio" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>

"A firm is only as good as its management and inevitably gets the management it deserves". Interpret this statement with reference to the managerial functions 

</label>
<br>
				<input type="radio" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">O(n)</label><br>
				<input type="radio" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">O(1)</label><br>
				<input type="radio" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">O(n^2)</label><br>
				<input type="radio" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>


Clearly define the process of organizing

</label>
<br>
				<input type="radio" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">O(n)</label><br>
				<input type="radio" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">O(1)</label><br>
				<input type="radio" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">O(n^2)</label><br>
				<input type="radio" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>

Is management an art or science


</label>
<br>
				<input type="radio" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">O(n)</label><br>
				<input type="radio" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">O(1)</label><br>
				<input type="radio" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">O(n^2)</label><br>
				<input type="radio" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>

<label>
How can managers improve their personal time management so that they can focus on the pressing demands of the day and create the pressing demands of the day and create space in which to plant strategically for the future

</label>
<br>
				<input type="radio" id="choice1_5" name="qn5" value=""/>
				<label for="choice1_5">O(n)</label><br>
				<input type="radio" id="choice2_5" name="qn5" value=""/>
				<label for="choice2_5">O(1)</label><br>
				<input type="radio" id="choice3_5" name="qn5" value=""/>
				<label for="choice3_5">O(n^2)</label><br>
				<input type="radio" id="choice4_5" name="qn5" value=""/>
				<label for="choice4_5">none of the above</label><br>
				<p id="varError5"></p>


</label>
<input id="id19" type="submit"/><input type="reset"/></form>
</fieldset>`]

function initialize(){
var terms = `Library-Ideology is an online software on GitHub Inc. platform. In order to use the Library-Ideology and access any content you need to be 13 years of age (or equivalent minimum age in your country) or older.Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
var isTermsAndConditionsOk = false
const z = prompt(terms)
return 1
}


function declare(){
var score = 0
for(let i = 0; i <= 16; i++){
document.querySelector("body").innerHTML += list[i]
}
return 1
}
//frm1
function validate(){
event.preventDefault()

var score = 0
if(document.querySelector("input#choice12_5").checked){score++
document.querySelector("p#varError1_1").innerHTML +="correct +" + 1 + " XP"} else{
document.querySelector("p#varError1_1").innerHTML +="correct answer is New, Ready, Running, Finished"
}
if(document.querySelector("input#choice11_6").checked && document.querySelector("input#choice12_6").checked && document.querySelector("input#choice13_6").checked && document.querySelector("input#choice14_6").checked){score++
document.querySelector("p#varError2_1").innerHTML +="correct +" +  1 + " XP"} else {
document.querySelector("p#varError2_1").innerHTML +="correct answer is Delays,Scope creep , Customer dissatisfaction, Low quality"
}
if(document.querySelector("input#choice11_7").checked && document.querySelector("input#choice12_7").checked && document.querySelector("input#choice13_7").checked){score++
document.querySelector("p#varError3_1").innerHTML +="correct +" +  1 + " XP"} else {
document.querySelector("p#varError3_1").innerHTML +="correct answer is Cost savings, Brand recognition, Increased productivity"
}
if(document.querySelector("input#choice11_8").checked && document.querySelector("input#choice12_8").checked && document.querySelector("input#choice13_8").checked){score++
document.querySelector("p#varError4_1").innerHTML +="correct +" +  1 + " XP"} else {
document.querySelector("p#varError4_1").innerHTML +="correct answers are It improves the organisation and control of a project, They are reusable tools, Reduces errors, They are compatible with different types of programming languages"
}
if(document.querySelector("input#choice11_9").checked && document.querySelector("input#choice12_9").checked && document.querySelector("input#choice13_9").checked && document.querySelector("input#choice14_9").checked){score++
document.querySelector("p#varError5_1").innerHTML +="correct +" +  1 + " XP"} else {
document.querySelector("p#varError5_1").innerHTML +="correct answer is Django - python, React - JavaScript, Angular - JavaScript, Laravel - python"
}





document.querySelector("p#usr").innerHTML += "congratulations , you got "+ score/5 *100 + "%" + "<br>" 
averageScore.push(score/5)
average()
return 0
}

//frm2
function validateTwo(){
event.preventDefault()

var score = 0
if(document.querySelector("input#choice21_5").checked){score++
document.querySelector("p#varError1_2").innerHTML +="correct " + 1 + " XP"} else{
document.querySelector("p#varError1_2").innerHTML +="correct answer is 2,3,5,7, 11"
}

document.querySelector("p#usr").innerHTML += "congratulations , you got " + score/1 *100 + "%" + "<br>"
averageScore.push(score/1)
average()
return 0
}

//frm3
function validateThree(){
event.preventDefault()

var score = 0
if(document.querySelector("input#choice12_5").checked){score++
document.querySelector("p#varError1_1").innerHTML +="correct " + 1 + " XP"} else{
document.querySelector("p#varError1_1").innerHTML +="correct answer is New, Ready, Running, Finished"
}
if(document.querySelector("input#choice21_5").checked && document.querySelector("input#choice22_5").checked && document.querySelector("input#choice23_5").checked && document.querySelector("input#choice24_5").checked){score++
document.querySelector("p#varError2_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError2_1").innerHTML +="there are no solutions "
}
if(document.querySelector("input#choice31_5").checked && document.querySelector("input#choice32_5").checked && document.querySelector("input#choice33_5").checked){score++
document.querySelector("p#varError3_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError3_1").innerHTML +="correct answer is Cost savings, Brand recognition, Increased productivity"
}
if(document.querySelector("input#choice41_5").checked && document.querySelector("input#choice42_5").checked && document.querySelector("input#choice43_5").checked){score++
document.querySelector("p#varError4_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError4_1").innerHTML +="correct answers are It improves the organisation and control of a project, They are reusable tools, Reduces errors, They are compatible with different types of programming languages"
}
if(document.querySelector("input#choice51_5").checked && document.querySelector("input#choice52_5").checked && document.querySelector("input#choice53_5").checked){score++
document.querySelector("p#varError5_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError5_1").innerHTML +="there are no solutions"
}





document.querySelector("p#usr").innerHTML += "congratulations , you got " + score/5 *100 + "%"+ "<br>" 
averageScore.push(score/5)
average()
return 0
}
//frm4
function validateFour(){
event.preventDefault()
var score = 0
if(document.querySelector("input#choice12_5").checked){score++
document.querySelector("p#varError1_1").innerHTML +="correct " + 1 + " XP"} else{
document.querySelector("p#varError1_1").innerHTML +="correct answer is New, Ready, Running, Finished"
}
if(document.querySelector("input#choice21_5").checked && document.querySelector("input#choice22_5").checked && document.querySelector("input#choice23_5").checked && document.querySelector("input#choice24_5").checked){score++
document.querySelector("p#varError2_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError2_1").innerHTML +="there are no solutions "
}
if(document.querySelector("input#choice31_5").checked && document.querySelector("input#choice32_5").checked && document.querySelector("input#choice33_5").checked){score++
document.querySelector("p#varError3_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError3_1").innerHTML +="correct answer is Cost savings, Brand recognition, Increased productivity"
}
if(document.querySelector("input#choice41_5").checked && document.querySelector("input#choice42_5").checked && document.querySelector("input#choice43_5").checked){score++
document.querySelector("p#varError4_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError4_1").innerHTML +="correct answers are It improves the organisation and control of a project, They are reusable tools, Reduces errors, They are compatible with different types of programming languages"
}
if(document.querySelector("input#choice51_5").checked && document.querySelector("input#choice52_5").checked && document.querySelector("input#choice53_5").checked){score++
document.querySelector("p#varError5_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError5_1").innerHTML +="there are no solutions"
}





document.querySelector("p#usr").innerHTML += "congratulations , you got " + score/5 *100 + "%" + "<br>"
averageScore.push(score/5)
average()
return 0
}

//frm5
function validateFive(){
event.preventDefault()
var score = 0
if(document.querySelector("input#choice12_5").checked){score++
document.querySelector("p#varError1_1").innerHTML +="correct " + 1 + " XP"} else{
document.querySelector("p#varError1_1").innerHTML +="correct answer is New, Ready, Running, Finished"
}
if(document.querySelector("input#choice21_5").checked && document.querySelector("input#choice22_5").checked && document.querySelector("input#choice23_5").checked && document.querySelector("input#choice24_5").checked){score++
document.querySelector("p#varError2_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError2_1").innerHTML +="there are no solutions "
}
if(document.querySelector("input#choice31_5").checked && document.querySelector("input#choice32_5").checked && document.querySelector("input#choice33_5").checked){score++
document.querySelector("p#varError3_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError3_1").innerHTML +="correct answer is Cost savings, Brand recognition, Increased productivity"
}
if(document.querySelector("input#choice41_5").checked && document.querySelector("input#choice42_5").checked && document.querySelector("input#choice43_5").checked){score++
document.querySelector("p#varError4_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError4_1").innerHTML +="correct answers are It improves the organisation and control of a project, They are reusable tools, Reduces errors, They are compatible with different types of programming languages"
}
if(document.querySelector("input#choice51_5").checked && document.querySelector("input#choice52_5").checked && document.querySelector("input#choice53_5").checked){score++
document.querySelector("p#varError5_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError5_1").innerHTML +="there are no solutions"
}





document.querySelector("p#usr").innerHTML += "congratulations , you got " + score/5 *100 + "%" + "<br>"
averageScore.push(score/5)
average()
return 0
}

//frm6
function validateSix(){
event.preventDefault()
var score = 0
if(document.querySelector("input#choice12_5").checked){score++
document.querySelector("p#varError1_1").innerHTML +="correct " + 1 + " XP"} else{
document.querySelector("p#varError1_1").innerHTML +="correct answer is New, Ready, Running, Finished"
}
if(document.querySelector("input#choice21_5").checked && document.querySelector("input#choice22_5").checked && document.querySelector("input#choice23_5").checked && document.querySelector("input#choice24_5").checked){score++
document.querySelector("p#varError2_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError2_1").innerHTML +="there are no solutions "
}
if(document.querySelector("input#choice31_5").checked && document.querySelector("input#choice32_5").checked && document.querySelector("input#choice33_5").checked){score++
document.querySelector("p#varError3_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError3_1").innerHTML +="correct answer is Cost savings, Brand recognition, Increased productivity"
}
if(document.querySelector("input#choice41_5").checked && document.querySelector("input#choice42_5").checked && document.querySelector("input#choice43_5").checked){score++
document.querySelector("p#varError4_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError4_1").innerHTML +="correct answers are It improves the organisation and control of a project, They are reusable tools, Reduces errors, They are compatible with different types of programming languages"
}
if(document.querySelector("input#choice51_5").checked && document.querySelector("input#choice52_5").checked && document.querySelector("input#choice53_5").checked){score++
document.querySelector("p#varError5_1").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError5_1").innerHTML +="there are no solutions"
}





document.querySelector("p#usr").innerHTML += "congratulations , you got " + score/5 *100 + "%" + "<br>"
averageScore.push(score/5)
average()
return 0
}

//frm7
function validateSeven(){
var score = 0
event.preventDefault()
if(document.querySelector("input#choice71_1").checked){score++
document.querySelector("p#varError1_7").innerHTML +="correct " + 1 + " XP"} else{
document.querySelector("p#varError1_7").innerHTML +="correct answer is a set is an abstract data type that can store unique values, without any particular order"
}
if(document.querySelector("input#choice72_2").checked) {score++
document.querySelector("p#varError2_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError2_7").innerHTML +="correct answer is a set which includes all the subsets including the empty set and the original set itself "
}
if(document.querySelector("input#choice73_3").checked) {score++
document.querySelector("p#varError3_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError3_7").innerHTML +="correct answer is a connection from a row of data to a column or type of data"
}
if(document.querySelector("input#choice71_4").checked) {score++
document.querySelector("p#varError4_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError4_7").innerHTML +="correct answers is a statement that two properties, descriptors or attributes of classes have similar meaning"
}
if(document.querySelector("input#choice72_5").checked) {score++
document.querySelector("p#varError5_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError5_7").innerHTML +="correct answer is a method for mapping out the possible truth values in an expression and to determine their outcomes"
}

if(document.querySelector("input#choice73_6").checked) {score++
document.querySelector("p#varError6_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError6_7").innerHTML +="correct answer is commutative, associative, distributive, identity"
}

if(document.querySelector("input#choice71_7").checked) {score++
document.querySelector("p#varError7_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError7_7").innerHTML +="correct answer is {a,a,d,e,c,e}"
}

if(document.querySelector("input#choice72_8").checked) {score++
document.querySelector("p#varError8_7").innerHTML +="correct " +  1 + " XP"} else {
document.querySelector("p#varError8_7").innerHTML +="correct answer is I=k+1"
}
document.querySelector("p#usr").innerHTML += "congratulations , you got " + score/8 *100 + "%" + "<br>"
averageScore.push(score/8)
average()
return 0
}
function verify(){
event.preventDefault()
records[0] = new Object({username: document.querySelector("input#username").value ,password: document.querySelector("input#password").value})
document.querySelector("input#username").value !== "" && document.querySelector("input#password").value !== "" ? alert("Logged in as " + records[0].username) : alert("Username or password incorrect")
return 1
}

function average(){
var result = 0
for(let i = 0; i <= averageScore.length - 1; i++){
result = result + averageScore[i]
}
alert("Average: " + result/averageScore.length * 100 + "%") 
return 1
}















