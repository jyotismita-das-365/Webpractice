# Webpractice
Move the exist code

Configure terminal: git config --global user.name "user name"
git config --global user.email "user email"

1. git fetch : This downloads update from github.
But does not change your code yet.
2. git diff origin/main: Show line by line differences between your local code and latest github code
3. git log HEAD..origin/main: Shows commits added by collaborators
4. git pull origin main: This fetches changes and merges into your main
5. git log: You will see new commits with author names(Your collaborators)


Pro workflow(use the sequence):
git fetch
git status
git diff origin/main
git pull