const router = require("express").Router();
const bookModel = require("../models/bookmodels");


//add new book
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
//get all books
router.get("/allbooks",async (req, res) => {
  let books;
  try {
    books = await bookModel.find();
    res.status(200).json({books });
  } catch (error) {
    console.log(error);
  }
});
//get all books by id
router.get("/allbooks/:id",async (req, res) =>{
  let books;
  try {
    books = await bookModel.findById(req.params.id);
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

//update book by id
router.put('/updbooks/:id' ,async (req,res)=>{
  const id = req.params.id;
  const{bookname,desc,autror,image,price} =req.body;
  let book;
 try {
  book=await bookModel.findByIdAndUpdate(id,
    {bookname,desc,autror,image,price});
  await book.save().then(()=>res.json({massage:"books updated successfully"}));
 } catch (error) {
  console.log(error);
 }
});

router.delete("/delbooks/:id",async (req,res)=>{
  let id=req.params.id;
  try {
    await bookModel.findByIdAndDelete(id).then(()=>res.status(200).json({massage:"Books deleted successfully"})); 
  } catch (error) {
    console.log(error);
  }
} )
module.exports = router;
