db.products.aggregate([
  {
    $lookup: {
      from: "reviews",
      localField: "_id",
      foreignField: "productId",
      as: "reviews"
    }
  }
])
// $lookup
// Joins data from another collection (similar to a SQL JOIN).

// from: "reviews"
// The collection to join with → reviews.

// localField: "_id" ==> 
// Field from the products collection used for matching.

// foreignField: "productId" ==> current table sai what in other table find
// Field from the reviews collection used for matching.

// as: "reviews"
// Name of the new field where matched review documents are stored.