# Cloning, Branching (Checkout -b), merging, stashing

Oh No! all of our code is deleted!

good thing that we have all of our code backed up in github. So I'm going to create a folder called "git-repos" and clone our code to that folder

```sh
git clone https://github.com/jtgober/playwright.git
```

great! now we have all of our code back. lets dive back into learning more about GIT.

first of all I think its a good idea to start talking about branches and why they are important. Having a good branching strategy can help teams  move fast. branches can be used as an indicator to a snapshot of your changes. For automation developers, I think this is less important, unless you are working with a large team of automation engineers, who are all working on automating different features. however, one thing I do think is important, is making sure that the main branch is always in a working state. The end goal for automation, should be to run it in a CI/CD environment, and if the main branch is broken due to a silly change, its possibly that all of your automation wont run either. So Whenever making a change, its always important to make sure the stability of the main branch is not being compromised.

So to start, lets make a new branch and check it out by using the following command
```sh
git checkout -b feature/test
```
we can also view all branches by using
```sh
git branch
```

now that we have a new branch created, im going to go ahead and create a couple of files, and prepare to push them out.

when we perform a push, it doesn't know exactly where to go, because we haven't set the origin, luckily, git gives us a hand with the exact command we can use.

Now we can take a look at what we have accomplished in both github and in our local environment.

there is also 2 ways that we can go about combining the feature branch with the main branch. for now lets do it through our command line.

first we need to check out our main branch and then, do a merge pointed at the feature/test branch
```sh
git checkout main
git merge feature/test
```

great! we just merge all of the code over to our main branch. Now lets look at another scenario.

lets checkout feature/test again and im going to create a file3

```sh
git checkout feature/test
```

lets pretend for a moment that we are working on file3 and something comes up and we need to immediately work on something different / or we just arent ready to commit these changes yet. Well, we can stash the changes and get them later. so lets stash away file3

```sh
git stash
```

this will temporarily store modified, tracked files in order to change branches

now we can create yet another new file "file4" and do what we need on here, commit and push it out.  then bring back our work by doing a git stash pop. 

but first lets do a list

```sh
git stash list
```

here we see our stashed file that can be brought back

```sh
git stash pop
```

for learning sake lets stash that file3 again and we can discard it entirely by using git stash drop.

```sh
git stash drop
```