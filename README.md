#marklar

##Description

A random name generator for Node.js based on Markov chains.

Give marklar a list of names (words) and it will generate similar-sounding names in a random fashion. More input will provide better, and more varied, output.


##Installation

`npm install marklar`

If you want to save the dependency in your project's packages.json file, do:

`npm install --save marklar`


##Usage

You can assign source names directly:
```
var marklar = require('marklar');

marklar.nameList['colors'] = ['red', 'green', 'yellow', 'blue', 'orange', 'black', 'purple'];
var name = marklar.getName('colors')); // blueng
```
Or, you can provide the path to a newline-delimited list of names:
```
var marklar = require('marklar');

marklar.nameFile['colors'] = './color-names.txt';
var name = marklar.getName('colors'));
```

If you need a batch of names generated, you can do:

`var name = marklar.getNames('colors', 10)); // an array of 10 names`

##Motivation
I wrote this to generate names for a guitar multi-effects random patch generator.

##Attribution
This package is essentially a wrapper around code by drow <drow@bin.sh>, sourced from http://donjon.bin.sh/code/name/name_generator.js.

##Licensing

  Please see the file called LICENSE.



