# BitBucketTimeFormat
The purpose of this repo is to create a Chrome extension which reformats relative time into normalized DateTime.
This is currently based on the "time" element found in these products. The "time" element has either a "title" attribute
or a "datetime" attribute which are used to reformat the to the desired DateTime.

### Usage
1. Install to Chrome
2. Click the Extension icon
3. Enter the Atlasian BitBucket URL of your choice
    - add multiple urls separated by commas
4. Choose the Date format of your choice
5. Click Save

### Known Limitations
On some Atlasian products (JIRA) some time formats are updated by the page which will override the chrome extensions update.

### Revision History
> **1.0.1**  
Added datetime attribute when title is not available

> **1.0.0**  
Initial commit
> - On pages listed in extension config, search for time elements and use title attribute to update to chosen DateTime format