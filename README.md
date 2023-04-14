# attraction

----SERVER DEVELOPMENT----

1. Create a repo on your Github account and clone the repo locally.

2. Write code to implement your server

3. Check that it is working e.g. use postman

4. Commit and push changes to your remote repo

----How to Run Server on AWS EC2 Instance----

1. Create EC2 instance in AWS
2. Connect and remote into EC2 instance via SSH
3. Install Node, NPM, PM2 & GIT on EC2 instance
4. Allow access to your EC2 instance via the port where your API is running
5. Getting a response from your server

Step 1 Create EC2 instance in AWS

- Log in to your AWS Account
  N.B. It is safer to log in as an IAM and not the root user.
  Please see how to create and IAM here **\***

- In the Search bar at the top of the screen type EC2
- A number of services should then appear
- Select EC2
- In the left side panel, click the dropdown arrow next to Instances and select Instances
- Now, in the top right select Launch instances
- You woud be brought to the "Launch an instance" page
- Add a name to you instance in the "name input"
- Select an Application Image or OS Image e.g Amazon Linux, MacOS, Ubuntu etc.
  NB. You will be required to use the necessary commands that work with the application of choice. e.g using Ubuntu you need Ubuntu commands which usually start with "sudo"
- Now it is time to create a new Key Pair, in the Key Pair (login) section, click on "create a new key pair"
- Download the certificate and store it in a safe place within your local computer becasue you would need this to connect to your instance later one.
  -Within the Network Settings section, check that "Allow SSh traffic from anywhere is selected. If it is not, select Allpw SSH...
- Have a look at the summary of your instance and check that it is what you want then, select Launch instance.
- You would now be able to click on your instance from the section at the top of your screen.
- At this time your instance may or may not be running, if it is not wait a few more seconds and you should see the instance state switch from pending to running.

Step 2 - Connect and remote into EC2 instance via SSH

- Once your instance is running, click the checkbox to the left of your instance.
- The Connect button will now be lit, click it
- On the Connect to instance page, select SSH client
- Then, copy the command given in Step 3 (this section has a title of Instance ID)
  eg chmod 400 attraction-ec2.pem
  NB this command updates th access on the certificate that was downloaded earlier

- Let's pause and go to our terminal, from the terminal change directory to the one that stores the certificate downloaded earlier.
- From within that directory, paste the copied "chmod" and run the comma

  - We will then access our ec2 instance by using the ssh -i, now, coppy the command that begins with ssh -i
    e.g. ssh -i "attraction-ec2.pem" ubuntu@ec2-54-224-110-192.compute-1.amazonaws.com
    -Now copy the "ssh"command and paste it in your terminal and press enter

  Tadaaaa!!!😃 you have now been connected to your EC2 using an SSH Client

Step 3 - Install Node, NPM, PM2 & GIT on EC2 instance

- Run commands that suit you VM to install node and the above eg sudo apt-get install nodejs
- Now it is time to clone your code e.g from Github use command "git clone <url of repo>"
  -Then install dependencies by navigating to the "npm install"
- Once all the dependencies have been installed correctly you can run your server by typing node . from within the folder that stores the server or you can run node <name of file> e.g. node server.js

NB. You can do a git pull to retrieve any changes made to your repo

Step 4 - Allow access to your EC2 instance via the port where your API is running

- To make your ip address accessible by anyone, head back to your aws account and just below your instance, navigate to the Security section and click on the launch wizard under the Security groups area
- Then, select Inbound rules
- Click, Edit inbound rules
- Select, Add rule
- Your new rule will be given and ID
  -For Type, select Custom TCP from the dropdown
  -Under Port range, type in the number of your port e.g. 5050
- Select Anywhere for the source
- Next, click save rules

Step 5 - Getting a response from your Server

Navigate to your Instances, use the side panel for example
-Select your instance and
-Then Select Networking tab from the instance

- Now copy your Public ip address and paste it to your browser adding a colon and your port number to the address provided

BRAVO you have made it to the end and now received a response from your Server ...congrats😎
