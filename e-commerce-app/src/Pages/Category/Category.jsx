import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const categoryArr = [
  {
    id: 1,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 1",
    categoryId: "category1",
  },
  {
    id: 2,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 2",
    categoryId: "category2",
  },
  {
    id: 3,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 3",
    categoryId: "category3",
  },
  {
    id: 4,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 4",
    categoryId: "category4",
  },
  {
    id: 5,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 5",
    categoryId: "category5",
  },
];

const Category = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px ",
        }}
        className="w-full p-2"
      >
        <h1 className="text-lg font-bold mt-2 ml-2 mb-3">Main Categories</h1>
        <div className="grid grid-cols-3 grid-rows-[auto] gap-5">
          {categoryArr.map(({ imageUrl, title, categoryId }, index) => (
            <CategoryUnitItems
              key={index}
              imageUrl={imageUrl}
              title={title}
              categoryId={categoryId}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;

const CategoryUnitItems = ({ imageUrl, title, categoryId }) => (
  <Link to={`/category/${categoryId}`}>
    <IconButton
      sx={{
        color: "gray",
        borderRadius: "6px",
        padding: "1px",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px ",
        }}
        className="m-1 w-full py-6 px-3 rounded-md flex flex-col items-center"
      >
        <img
          src={imageUrl}
          alt={title}
          className="rounded-full w-[50px] h-[50px]"
        />
        <h2 className="text-[10px] text-black font-bold mt-3">{title}</h2>
      </div>
    </IconButton>
  </Link>
);