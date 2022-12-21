# Merge Conflicts and other tips and tricks / Undoing

In a real life scenario, when we are working along with a team, sometimes merging wont be so easy peasy.  With the main branch  being updated from different team members, we may touch some of the same files and when doing so we may attempt to merge our code, only to find that we have a merge conflict.  This is when GIT doesn't exactly know what to keep, so we need to determine what code we want to hold on to. Code may be redundant, or code we need to get rid of.

I'm going to head back to our feature/test branch and I'm going to update file1 here and I'm going to show you another git trick that can be used with files that are labeled as modified

we can commit and add at the same time with modified files, by using this command. the -a just stands for the add and then we can tack on the m for the message

```sh
git commit -am "updated file1 on feature/test"
```

keep in mind however, if its a newly created file this will not work

Now lets swing on over to the main branch and update that same line that we updated in file1 and we see that we are unable because our files will be overwritten. we already know we could stash these changes, but for now, lets just commit our changes.

```sh
git commit -am "updated file1 on main"
```


Now we can checkout the feature/test branch and lets try to merge main to the feature test branch

```sh
git checkout feature/test
git merge main
```

and here is where we have a merge conflict.


![](/merge-conflits1.png)


VSCode gives us a few options here. We can Accept the current change, the incoming change, both changes, or we can compare them.

For this example we can also use the IDE itself, and just remove the portions that we done need. so we can delete out the <<<<< HEAD, ===== and >>>> MAIN text objects

![](/merge-conflits2.png)

Now, we see we are in the feature/test branch but it also has the |MERGING appended. we can see by doing a git status that we have something we need to commit. both modified:   file1.txt

Sometimes however we make mistakes and we need to undo an add or a commit. 

lets make a quick add to file 2 and stage it in git.

now, we can remove that stage change by using git reset

```sh
git reset
```

leaving it bare would reset all added changes that we have, or we can specify the file

when we have committed we need to do a little extra typing
git reset HEAD~1 making sure HEAD is in all caps

HEAD is a pointer to the last commit that we made and using ~1 to go back 1 commit. if we had multiple commits, we could update the 1 to how ever many commits we need to go back

```sh
git reset HEAD~1
```

But we can also choose specific commits that we want to revert back to. To do that, we need to see a list of all of our commit we have made. and to do that we can use. git log

looking at the log, there are listed in order from earliest to oldest and each one has a unique hash key that we can revert to. Its also good to note here, that its important to write good commit messages so you know what work was done in that time
you can also check out all commit by clicking enter or space bar, and to exit just hit the Q key

for this example im going to choose to copy this hash and reset to that point

```sh
git reset d06a71e03845dbf89617b7764a0e5a8cde930003
```

and in doing this we still have those changes, however they are no longer staged but if we do want to completely remove them we can add the --hard argument

```sh
git reset --hard d06a71e03845dbf89617b7764a0e5a8cde930003
```