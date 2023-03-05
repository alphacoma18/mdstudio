# Bugs

```ts
// pages\api\editor\update\[id].ts
await db_projects.findOneAndUpdate(
 {
  userId: mongooseId(session!.user.userId),
  "projects.fileSystem._id": mongooseId(id as string),
 },
 {
  $set: {
   "projects.$.fileSystem.$[file].content": content,
  },
 },
 {
  arrayFilters: [{ "file._id": mongooseId(id as string) }],
 }
);

// VS

await db_projects
 .updateOne(
  {
   userId: mongooseId(session!.user.userId),
  },
  {
   $set: {
    "projects.$[project].fileSystem.$[file].content": content,
   },
  },
  {
   arrayFilters: [
    {
     "project._id": mongooseId(projectId),
    },
    {
     "file._id": mongooseId(id as string),
    },
   ],
   // THIS IS IMPORTANT
   strict: false,
  }
 )
 .exec();
```

In using typegoose, we further abstract away from mongoose and mongodb.
While we reap the benefits of type safety, we are more vulnerable to existing and unresolved bugs
due to a wider surface area. An example of which is the code above.

We just want to update the content without returning the document. However, while we used the same code on
`updateOne` instead of `findOneAndUpdate`, we get the error `Error: Could not find path "projects.0.fileSystem.0._id" in schema`. After some digging, we found out that this is a known issue with mongoose and mongodb. The solution is to use `strict: false` in the options.
