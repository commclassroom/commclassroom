<h1 align="center">Contributing</h1>

## 🔨 Setup & Run

### 1.) Fork The Repo

Click on **Fork** button present on the upper-right area of the screen to create a copy of this repository to your GitHub account.
![fork](https://user-images.githubusercontent.com/73980067/134885545-787243bc-34a7-4f85-9ff3-49c9d3c93bc3.jpeg)


### 2.) Clone The Repo
-> You can clone this branch to your machine by using the below command.

```bash

git clone -b development https://github.com/<YOUR_USERNAME>/commclassroom.git

```

-> Navigate to your repo

```bash

cd commclassroom

```

-> Install dependencies 

```bash

npm install

```

### 3.) Setup Remote

```bash

git remote add upstream https://github.com/commclassroom/commclassroom.git

```
To verify 
```bash

git remote -v

```
You will get output similar to this
```bash

origin  https://github.com/<YOUR_USERNAME>/commclassroom.git (fetch)
origin  https://github.com/<YOUR_USERNAME>/commclassroom.git (push)
upstream        https://github.com/commclassroom/commclassroom.git (fetch)
upstream        https://github.com/commclassroom/commclassroom.git (push)

```

### 4.) Update Fork Repo From Upstream

1. Follow these steps if you are done with <b>Setup Remote</b> ✅.
2. Update your local branch to be in sync with the original repo.

```console

$ git pull upstream development

```

3. Update the forked repo by pushing the local repo up.

```console

$ git push origin development

```

### 5.) Contributing & PR

1. Create a new branch.

```
git checkout -b <your_branch_name>
```

2. Perform your desired changes to the code base.

   Make sure to run ```npm run format ``` 

3. Track your changes:heavy_check_mark: .

```
git add .
```

4. Commit your changes
```
git commit -m "Relevant message"
```

5. Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

6. To create a pull request, click on `compare and pull requests`. Please ensure that you compare your feature branch to the desired branch `development` of the repo to make a PR.


7. Add an appropriate title and description to your pull request explaining your changes and efforts done.
    And edit the PR template

8. Click on `Create Pull Request`.


Voila :exclamation: You have made a PR to the Community Classroom repository :boom: Sit back patiently and relax while the project maintainers review your PR. Please understand at times the duration can vary from a few hours to a few days.


## PR Review
Your PR will get reviewed soon from the maintainers of the project. If they suggest changes, do all the changes, commit the changes, rebase the branch, squash the commits and push the changes. If everything looks good, your PR will be merged. That's it! Thank you for your contribution! Feel free to suggest any changes to this documentation.

## Note
Contribution can be very small, that does not matter. We even love to receive a typo fix PR. Adding feature or fixing a bug is not the only way to contribute. You can send us a PR for adding documentation, fixing typos or adding texts.

