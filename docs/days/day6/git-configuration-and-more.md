# Git Configuration / adding / Removing / Committing best practices

Configuring git
There are three different levels we can configure git for. The SYSTEM level, which is for all users, GLOBAL level, which is for all repositories of the current user, and the LOCAL level which apply to the current repository.

lets check out what we have using 

```sh
git config --global -e
```

The -e just specifies the editor you chose when first downloading git. if you followed my beginning tutorials, it should show up in VSCODE.

For me i have my email, name, and my core editor. We can update these using the following commands

```sh
git config --global user.name "Jon Gober"
git config --global user.email "email@email.com"
```

we can even change our default editor if you didn't in the beginning. However, keep in mind you need to have VSCODE in your PATH. to test this you can simply type 'code' in a terminal.

```sh
git config --global core.editor "code --wait"
```

Now lets talk about configuring the end of lines. in the last video we saw something like warning: LF will be replaced by CRLF. in windows, end of lines are marked with two special characters, \r \n.  CRLF stands for Carriage Return, and Line Feed

in mac and linux systems, end of lines are indicated with line feed. \n
So if we dont configure these properly, we could have some issues later on. So lets prevent this 

```sh
git config --global core.autocrlf true
// for mac or linux
git config --global core.autocrlf input
```

we can add singles files as well instead of doing it recursively ( git add . )  like this

```sh
//add a new file
git add newFile.txt
```

also, when committing, sometimes a simple one liner isn't enough information to get across. Maybe you fixed a bug in your code or there was a major update or sometime. Whatever it may be, make sure they are meaningful, so other team members are in the know

We can perform a git commit without using the -m and our core editor will come up. which we can see we are editing the git message. the first line can be a quick one liner and can be considered a Title, then click enter twice to leave line in between, and add a longer description.

after this is complete, let check out our results to see exactly what this did in github.

Now since this is a dummy file we can also remove it. 

```sh
git rm newFile.txt
```
we can see as well by doing a git status that it is deleted, and we can push those changes out.

Whenever we are committing changes, its good to commit. often, but not too often. in the real world, you might commit half a dozen times a day or even less. but you do not want to keep changes in hand for 3 days and then commit. 

Whenever committing messages we also want to make sure they fit a pattern. if you create a new automation test. go ahead and commit those changes. and when writing a commit message, speak in the past tense. example "Bug fixed" v.s. "Fixing bug"