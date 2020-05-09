<h1 align="center">Employee Time Tracker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ebukaume/employee-time-tracker#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ebukaume/employee-time-tracker/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ebukaume/employee-time-tracker/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ebukaume/employee-time-tracker" />
  </a>
  <a href="https://twitter.com/ebukaume" target="_blank">
    <img alt="Twitter: ebukaume" src="https://img.shields.io/twitter/follow/ebukaume.svg?style=social" />
  </a>
</p>
<br>

<p>
  <a href="https://raw.githack.com/ebukaume/employee-time-tracker/master/dist/index.html" target="_blank">
    <img alt="Website" src="./docs/todolist.png" />
  </a>
</p>

<br>

This is a simple CLI-based PoC to show how employers might be able to truly track how long their employees spend working on their computers. 


## Built With

- NodeJs


## Assumptions

1. The user already has node installed or have the rights to install it.
2. Node.js does not have access to system-level events (like 'sleep', 'hibernate', 'shutdown', 'idle' etc) off the bat.
3. Thus, the script lets the employee pause and resume as need be.
4. Finally, the employee is not allowed to reboot their system or restart the script once started because of this would lose track of the start time.

NB: A fix for no.4 above is to have local storage (say a file), that stores only the current day's start time. Then the script checks this file on initialization. It then resynchronizes the start time, compensate for the lost time (as break time) and then starts recording from the current time.

I did not implement the above suggestion due to time constraint and because this is just a PoC. Also


## User Manual

HOW TO USE:

1. Make sure you have node (>= version 12) installed.
2. Run the index file inside the bin/ directory (node bin/index.js).
3. Follow the instructions on the display message to operate the script.

Use:
  start   - to the timer
  break   - to pause the timer when taking a break
  resume  - to resume after taking a break
  stop    - to stop the time AFTER YOU HAVE CLOSED FOR THE DAY.


## Usage

> Clone the repository to your local machine

```sh
$ git clone https://github.com/ebukaume/employee-time-tracker.git
```

> cd into the directory, install dependencies, build and start

```sh
$ cd employee-time-tracker
$ node bin/index.js
```


## Author

👤 **Ebuka Umeokonkwo**

- Github: [@ebukaume](https://github.com/ebukaume)
- Twitter: [@ebukaume](https://twitter.com/ebukaume)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ebukaume/employee-time-tracker/issues).

1. Fork it (https://github.com/ebukaume/employee-time-tracker/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request


## Show your support

Give a ⭐️ if you like this project!


## 📝 License

This project is [MIT](https://github.com/ebukaume/employee-time-tracker/blob/master/LICENSE) licensed.


## Contact me

I am looking for my next opportunity. Reach out to me if you are looking to hire!
_ebukaume@gmail.com_
