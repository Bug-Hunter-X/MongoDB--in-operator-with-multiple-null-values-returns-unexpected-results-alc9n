```javascript
// Correct use of $eq operator to find null values
db.collection('myCollection').find({ field: { $eq: null } });

//Alternative direct comparison to null
db.collection('myCollection').find({ field: null });
```