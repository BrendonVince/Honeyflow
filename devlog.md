1. Created Github repository for project "Honeyflow"
2. Created Folder for prooject on local computer "Honeyflow"
3. Created devlog.md and updated steps
4. Link the local folder to github repo
5. Command line is Ctrl + ~
```
git init
git add devlog.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/BrendonVince/Honeyflow.git
git push -u origin main
```
6. Tried to run git init but not recognized, find way to install git
7. path was not recognized, installed git via website but then path was not recognized when running git init.
8. Resetting computer resolved issue, git init now works.
9. Ran `git commit -m "first commit"` encountered "Author identity unknown"
10. Set Global Identity in git 
```
git config --global user.email "your.email@example.com"
git config --global user.name "Your Name"
```
11. Re- execute `git commit -m "first commit"`  Success
12. Completing git setup, ensuring compatability