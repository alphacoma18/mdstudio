# MD Studio News

## 2023/08/19

### Migration

The application is currently scheduled for a MongoDB migration.

The current schema embeds a recursive document type of _projects_, _files_, and _folders_.However MongoDB has a maximum document size of 16MB and so we will migrate from [embedding](https://www.mongodb.com/basics/embedded-mongodb) to [referencing](https://www.mongodb.com/docs/manual/reference/database-references/). This not only allow us to store more data w/o hitting the limit, but also make queries between for your data faster in addition to indexing.

### Not Receiving Emails?

For authentication, users can signin using their emails or social media accounts which is securely handled by [next-auth](https://next-auth.js.org/).

We use the [dot tech](https://get.tech/) service for our domain and emailing. However, we have identified that emails are not being sent to the users inbox. In the meantime, we will use Gmail to send emails to users under the email address <markdownstudio@gmail.com>. In addition, users can also use this email to contact us or through the company email <comadevelopment.llc@gmail.com>.

### Further Functionality Updates

While already deployed and installable on Google Play Store, is by no means complete. Most buttons, while displayed, are not yet functional. The app was untouched for months with the exception of package updates. However, we are now back on track and will be working on the app as we have in the past.

### Pull from VS Code repo itself?

We designed the application to take inspiration of [VS Code's](https://code.visualstudio.com/) UI. However, we are now considering to pull from the VS Code repo itself and do a complete overhaul of whole application with our own modifications. Please share your thoughts on this by contacting us!
