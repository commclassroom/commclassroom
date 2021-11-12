# Contributing Guidelines

🎉 First of all, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by a [Code of Conduct](https://github.com/commclassroom/commclassroom/blob/master/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [kunalkushwaha453@gmail.com](kunalkushwaha453@gmail.com)or [in our Discord community](https://discord.io/commclassroom).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report 📝, reproduce the behavior 💻 , and find related reports 🔎

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/commclassroom/commclassroom/blob/master/.github/ISSUE_TEMPLATE/bug_report.yml), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Perform a [cursory search](https://github.com/commclassroom/commclassroom/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on this repository and provide the following information by filling in [the template](https://github.com/commclassroom/commclassroom/blob/master/.github/ISSUE_TEMPLATE/bug_report.yml).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. **don't just say what you did, but explain how you did it**.
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion 📝 and find related suggestions 🔎

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/commclassroom/commclassroom/blob/master/.github/ISSUE_TEMPLATE/feature_request.yml), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

- **Perform a [cursory search](https://github.com/commclassroom/commclassroom/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of this project which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most users and is something that can or should be implemented.

### Your First Code Contribution

Unsure where to begin contributing to Atom? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues](https://github.com/commclassroom/commclassroom/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/commclassroom/commclassroom/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

The process described here has several goals:

- Maintain the project's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible!
- Enable a sustainable system for maintainers to review contributions

Please follow all instructions in [the template](hhttps://github.com/commclassroom/commclassroom/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Setting up a local environment

**1.** Fork [this](https://github.com/commclassroom/commclassroom) repository.

**2.** Clone your forked copy of the project.

```bash
git clone https://github.com/<your_user_name>/commclassroom.git
```

![s1](https://raw.githubusercontent.com/commclassroom/commclassroom/master/Img/s1.png)

**3.** Navigate to the project directory :file_folder:

```bash
cd commclassroom
```

**4.** Add a reference(remote) to the original repository.

```bash
git remote add upstream https://github.com/commclassroom/commclassroom.git
```

**5.** Check the remotes for this repository.

```bash
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```bash
git pull upstream master
```

**7.** Create a new branch.

```bash
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

![programming](https://raw.githubusercontent.com/commclassroom/commclassroom/master/Img/programming.gif)

**9.** Track your changes:heavy_check_mark:

```bash
git add .
```

**10.** Commit your changes

```bash
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repository

```bash
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure that you compare your feature branch to the desired branch of the repository you are supposed to make a PR to.

![s2](https://raw.githubusercontent.com/commclassroom/commclassroom/master/Img/s2.png)

**13.** Add an appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.

![s3](https://raw.githubusercontent.com/commclassroom/commclassroom/master/Img/s3.png)

**15.** Voila :exclamation: You have made a PR to the Community Classroom website repository :boom: Sit back patiently and relax while the project maintainers review your PR. Please understand at times the duration can vary from a few hours to a few days.

![done](https://raw.githubusercontent.com/commclassroom/commclassroom/master/Img/done.gif)

## Pull request review

Your PR will get reviewed soon from the maintainers of the project. If they suggest changes, do all the changes, commit the changes, rebase the branch, squash the commits and push the changes. If everything looks good, your PR will be merged. That's it! Thank you for your contribution! Feel free to suggest any changes to this documentation.

## Note

Contributions can be very small, that does not matter. We even love to receive a typo fix PR. Adding feature or fixing a bug is not the only way to contribute. You can send us a PR for adding documentation, fixing typos, adding tests, and so much more. 🎉
