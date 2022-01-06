import React, { useState, useEffect } from "react";



const productsData = {
    note: "",
    notification: "",
    Books: [
      {
        bookID: 65342,
        img: "https://source.unsplash.com/200x300/?book",
        year: 2018,
        bookTitle: "Story Time",
        LibraryInfo: {
          Status: "Out",
          returnDate: "7 Jan"
        }
      },
      {
        bookID: 65332,
        img: "https://source.unsplash.com/200x300/?book",
        year: 2018,
        bookTitle: "Story Time",
        LibraryInfo: {
          Status: "Out",
          returnDate: "7 Jan"
        }
      }
    ]
  };

export default function IdeaList() {
    const [products, setData] = useState(productsData);
    const [toggle, setToggle] = useState({});
    useEffect(() => {
      setData({});
     // Axios.get("https://stylmate1.firebaseio.com/hair.json").then((response) => {
        // console.log(response.data);
        setData(productsData);
      
    }, [toggle]);
    return (
      <div className="App">
        {/* <button onClick={() => setToggle(!toggle)}>fetch</button> */}
        {products?.["Books"]?.length &&
          products["Books"].map((product) => (
            <div key={Math.random() * 10000}>
              <img src={product.img} width="200" alt="" />
              <p>{product.bookTitle}</p>
              <p>{product.year}</p>
              <p>
                {"Library Status: " +
                  product.LibraryInfo.Status +
                  "\n" +
                  product.LibraryInfo.returnDate}
              </p>
              <p></p>
            </div>
          ))}
      </div>
    );
  }