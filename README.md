![version-1.0.1](http://img.shields.io/badge/Version-1.0.1-00cc00.svg?style=flat) &nbsp; ![MIT](http://img.shields.io/badge/License-MIT-dd6ad5.svg?style=flat) &nbsp; ![minified-download-664b](http://img.shields.io/badge/Minified%20Download-664b-136ad5.svg?style=flat)

attrExtend
============
A simple plugin that extends jQuery attribute modification similar to *Class functions. Crafted for a need of simple reusable development processes by [tbremer @ MISE.io](//mise.io).

How to use
-----------
attrExtend ports the same features of jQuery's native *Class functions. Most parts of this extension are chainable.

API
-----------
| **FUNCTION**       | **RETURNS**   | **ARGUMENTS**       | **EXAMPLE**                                       |
| ------------------ | ------------- |-------------------- | ------------------------------------------------- |
| **hasAttr**       | true or false | attribute           | $(element).hasAttr('attribute')                    |
|**attrHasProp**    | true or false | attribute, property | $(element).attrHasProp('attribute', 'property')    |
|**attrAddProp**    | jQuery Object | attribute, property | $(element).attrAddProp('attribute', 'property')    |
|**attrRemoveProp** | jQuery Object | attribute, property | $(element).attrRemoveProp('attribute', 'property') |
