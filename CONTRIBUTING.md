<h1 align="center">Contributing</h1>

## 🔨 Setup & Run

### 1.) Fork The Repo

Click on **Fork** button present on the upper-right area of the screen to create a copy of this repository to your GitHub account.
![fork](https://user-images.githubusercontent.com/73980067/134885545-787243bc-34a7-4f85-9ff3-49c9d3c93bc3.jpeg)


### 2.) Clone The Repo
-> You can clone repo to your machine by using the below command.

```bash

git clone https://github.com/<YOUR_USERNAME>/commclassroom.git

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
2. Update your local Master to be in synch with the original repo.

```console

$ git pull upstream <name_of_branch>

```

3. Update the forked repo master by pushing the local repo up.

```console

$ git push origin <name_of_branch>

```


## Contributing & PR

1) Make sure to run ```npm run format ``` before PR  .
2) You Guys are free to use any package , Just Have Fun in Life 💚 .


### Contributors 💙
