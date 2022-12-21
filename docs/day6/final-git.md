# Final Git Lesson with diff tool, alias and forking

for our final Git lesson were going to look at diff, difftool, alias's and forking repos

Lets start with alias's. In git we can write our own shorthand alias's to save us some typing. More often than not ill mistype a git command and have to redo it. so lets shorten some of our commands

```sh
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

now instead of using 

```sh
git checkout -b "branchname" 
```

we can use the shorthand of 

```sh
git co -b "branchname"
```

For me this is great, I use git status incredibly often, and I honestly mistype it often as statys. so now I can check the status easier by using git st which is much quicker as well.

There are a ton more you can do with this, and I encourage you to to look up some of the awesome alias's people have made to add some extra added productivity to your day!

Now lets check out some git diff tools

```sh
git diff
```

looking through this we can see there was an update that  states 

```sh
Give examples // [!code --]
Test // [!code ++]
```

this looks fine, but if there were tons more changes, this would be pretty terrible to look through. Thats why so many people use GUI diff tools. or 

```sh
git difftool
```

now if yours states "Launch 'vimdiff' [Y/n]? " Then lets go ahead and set it up to where we use VSCode for out default diff tool. and for this we need to set 2 configurations

```sh
git config --global diff.tool vscode
```

were going to use --wait and --diff

```sh
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"
```

$LOCAL and $REMOTE are in all caps and represents the old and new copies of the files

now lets make sure everything is set up properly

```sh
git config --global -e
```

Your config should look similar to this, and if not you can copy and paste what i have and add it in

```sh
[user] 
	email = gober.jonathan@gmail.com 
	name = Jonathan Gober 
[core] 
	editor = code --wait 
	autocrlf = true 
[diff] 
	tool = vscode 
[difftool "vscode"] 
	cmd = "code --wait --diff $LOCAL $REMOTE" 
[alias] 
	co = checkout 
	br = branch 
	ci = commit 
	st = status
```

Now with our Diff toll updated we can run and see how it looks in VSCODE.
This looks much easier to read as we can see a side by side difference for our code.

Alright. there is one final thing that id like to show you with repositories and that's forking.

Forking allows you to freely evaluate and experiment with changes without damaging the main repository. So when you forking someone elses repo, it is an exact replica of that repository.

People do this to propose changes to someone else's project or to have a good starting point for their own project.
For example, Playwright itself is a fork of another automation tool called puppeteer. Which we can also fork the entire code of playwright as well

https://github.com/microsoft/playwright-vscode

Now that the code is forked, we can make whatever updates to playwright and submit pull requests to the main repository to be accepted as updates.

for now however, im going to delete this repo, and were going to dive right into api testing coming up next. So your next test is to Fork a copy of the poke-api that is on my repo, run a npm install, then run the test.

If you have joined our discord server let me know what starter pokemon you received!

but well done on git! and ill see you in tomorrow with api testing