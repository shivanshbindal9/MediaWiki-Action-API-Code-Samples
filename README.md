<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/MediaWiki_logo_1.png" height="400px" alt="MediaWiki"/> </p>

# MediaWiki Action API Code Samples
The MediaWiki action API is a web service that allows access to some wiki-features like authentication, page operations, and search. It can provide Meta information about the wiki and the logged-in user.

The code snippets in several programming languages are developed to assist developers for easy use of MediaWiki action API's.

Currently, the code snippets are present in two programming languages ```Python``` and ```Javascript```. The detailed documentation of various API modules present in these languages can be found at
* [Python](python/)
* [Javascript](javascript/)

### Demo apps
* [Article ideas generator](python/demos/article-ideas-generator): 
Demo app that suggests articles from various categories that don't yet exist on English Wikipedia. The app uses [Parse](https://www.mediawiki.org/wiki/API:Parse) and [Links](https://www.mediawiki.org/wiki/API:Links) module.
* [Nearby places viewer](python/demos/nearby-places-viewer): 
Demo of geo search for wiki pages near a location using the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) and MediaWiki Action API's [Geosearch](https://www.mediawiki.org/wiki/API:Geosearch) module.
* [Picture of the day viewer](python/demos/picture-of-the-day-viewer):
Demo app that uses [prop=images](https://www.mediawiki.org/wiki/API:Images) module to fetch Wikipedia's Picture of the Day (POTD) from a template page and displays it on a webpage. The app also allows users to go backward or forward a date to view other POTD.
* [User Contributions](python/demos/UserContributions)
A sample app that uses MediaWiki Action [API:Usercontribs](https://www.mediawiki.org/wiki/API:Usercontribs) allows you to see the latest top 50 edits made by a user. This app uses Flask Framework as backend.

### Installation
```
$ git clone https://github.com/wikimedia/MediaWiki-Action-API-Code-Samples.git
$ cd MediaWiki-Action-API-Code-Samples
Install the necessary python modules with pip
$ python3 name_of_the_file.py #Enter any credentials if required in the file
```

### Contributing code samples
First, propose an idea for a code sample, demo app, etc. by creating an issue around it in the repository. After discussing your idea with the repo contributors, start working, and then send a pull request, when you've your changes ready to be accepted/ merged! You can autogenerate python files for GET Requests demos where feasible by following the instructions below:
```
$ cd MediaWiki-Action-API-Code-Samples
$ Add module information to `modules.json`
$ cd python
$ python autogenerator.py
$ Make desired changes to the newly generated file(s)
```
