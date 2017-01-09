## angular-search-box

Dropdown directive for AngularJS: Includes server side pagination & search records.


### Dependencies. 
1. Twitter Bootstrap
2. jQuery
3. Font Awesome



### Usage
Include search and select in your module dependencies:
```js
var app = angular.module('your-app-module', ['angular-search-box']);
```
In view:

```html
<search-box selected-item="country" values="countries" key="Key" total-records="totalRecords" on-scroll="search(searchKey, pagenumber)"</search-box>
```

Option             | Description
 ----------------- | ---------------------------- 
selected-item  | Item get selected on clicking results
values  | List of results got grom API/Data
total-records | Total number of records fetched to be utilized in pagination
on-scroll | Get called while scrolling
key | Mapping key to identify selected item

In controller, set the values for totalRecords,key, values:

```js
appRoot.controller('countryController', ['$scope', 'countryService', function ($scope, countryService) {
    var fetchingRecords = false;
    $scope.getCountries = function (searchKey, pagenumber) {
      if (fetchingRecords)
        return;
      fetchingRecords = true;
      countryService.getCountries(searchKey, pagenumber)
      .then(function (result) {
          if (pagenumber === 1) {
            $scope.totalRecords = result.TotalRecords;
            $scope.countries = result.Records;
          }else {
            $scope.countries = $scope.countries.concat(result.Records);
          }
          fetchingRecords = false;
      },function (errorMessage) {
        window.console.warn(errorMessage);
        fetchingRecords = false;
      });
    };
    $scope.countries = [];
    $scope.country = {
        Key: "India",
        Value: "In"
    };
    $scope.getCountries("", 1);

  }]);
```
The complete code is available in demo folder. Please refer.

## Contributing

If you have questions with the instructions above, feel free to add them as issues in the repository. 

*By contributing to this repository you are agreeing to make your content available subject to the license of this repository.*

### Process
    1. Add/discuss the changes in a GitHub issue.
    2. Create a Pull Request, provide enough details like why it is needed and reference the issue.
    3. The Pull Request will be evaluated and either merged or declined.

## License (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
