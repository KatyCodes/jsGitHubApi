# GitHub Api


#### _A list of my GitHub repositories, Oct. 14, 2016_

#### By _**Katy Henning**_

## Description

A site that shows a list of name and descriptions of any users' GitHub public repository.

## Setup/Installation Requirements

* Go to GitHub.com and acquire a Personal access token key  
  * if you do not have a GitHub Account you will need to sign up
* In GitHub go to Settings, then "Personal access tokens"
* Select "Generate new token"
* Do not select any of the options and then select "Generate new token"
* Copy the personal access token to someplace safe on your computer
* Clone the repository
* Using the command line, navigate to the project's root directory
* Install dependencies by running $ npm install , then running gulp install.
* Open the code in a text editor
* From your root folder create a file called ".env" and include this code as well as your personal access token as noted here:
  exports.apiKey = "YOUR-API-KEY-GOES-HERE";
* Then, while in your command line run $ gulp build
* Lastly type $ gulp serve


## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

For questions or comments, please contact me through GitHub.

## Technologies Used

* _JavaScript_
* _jQuery_
* _Bootstrap_
* _Browserify_
* _gulp_
* _Vinyl Source Stream_

### License

*This website is licensed under the MIT license.*  
Copyright (c) 2016 **_Katy Henning_**
