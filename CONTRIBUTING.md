# Contributing Guidelines

We would love to accept your contributions! To start contributing, follow the below guidelines:

**1.** Fork [this](https://github.com/commclassroom/commclassroom) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/commclassroom.git

```

<img src="Img/s1.png"  width="800">

**3.** Navigate to the project directory :file_folder: .

```
cd commclassroom
```

**4.** Add a reference(remote) to the original repository.
```
git remote add upstream https://github.com/commclassroom/commclassroom.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

<p align="center"><img src="Img/programming.gif"  width="400"></p>

**9.** Track your changes:heavy_check_mark: .

```
git add .
```

**10.** Commit your changes
```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure that you compare your feature branch to the desired branch of the repo you are supposed to make a PR to.

<img src="Img/s2.png"  width="800">

**13.** Add an appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.

<img src="Img/s3.png"  width="800">

**15.** Voila :exclamation: You have made a PR to the Community Classroom repository :boom: Sit back patiently and relax while the project maintainers review your PR. Please understand at times the duration can vary from a few hours to a few days.


<p align="center"><img src="Img/done.gif" width=400></p>

## PR Review
Your PR will get reviewed soon from the maintainers of the project. If they suggest changes, do all the changes, commit the changes, rebase the branch, squash the commits and push the changes. If everything looks good, your PR will be merged. That's it! Thank you for your contribution! Feel free to suggest any changes to this documentation.

## Note
Contribution can be very small, that does not matter. We even love to receive a typo fix PR. Adding feature or fixing a bug is not the only way to contribute. You can send us a PR for adding documentation, fixing typos or adding tests.
