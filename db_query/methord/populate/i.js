User.findOne({ _id: "someId" })
  .populate({ path: "posts", select: "title" })
  .populate({ path: "profile", select: "bio avatar" });

User.findOne({ _id: "someId" }).populate("posts", "title");
User.findOne({ _id: "someId" }).populate("posts");
