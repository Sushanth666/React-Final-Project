// import { useMemo, useState } from "react";

// import {
//   FaSearch,
//   FaFilter,
//   FaSortAmountDown,
// } from "react-icons/fa";

// import PackageCard from "../components/PackageCard";
// import packagesData from "../data/packages";

// import "./Packages.css";

// function Packages() {

//   const [packages] = useState(packagesData);

//   const [search, setSearch] = useState("");

//   const [category, setCategory] = useState("All");

//   const [sort, setSort] = useState("default");

//   const categories = [
//     "All",
//     ...new Set(packages.map((item) => item.category)),
//   ];

//   const filteredPackages = useMemo(() => {

//     let data = [...packages];

//     data = data.filter((item) =>
//       item.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );

//     if (category !== "All") {
//       data = data.filter(
//         (item) => item.category === category
//       );
//     }

//     switch (sort) {

//       case "price":
//         data.sort((a, b) => a.price - b.price);
//         break;

//       case "rating":
//         data.sort((a, b) => b.rating - a.rating);
//         break;

//       case "name":
//         data.sort((a, b) =>
//           a.title.localeCompare(b.title)
//         );
//         break;

//       default:
//         break;

//     }

//     return data;

//   }, [packages, search, category, sort]);

//   return (

//     <div className="packages-page">

//       {/* Hero */}

//       <section className="packages-hero">

//         <div className="container">

//           <div className="packages-content">

//             <span>Explore Amazing Trips</span>

//             <h1>Find Your Perfect Holiday Package</h1>

//             <p>
//               Search, filter and discover premium
//               travel packages at the best prices.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* Toolbar */}

//       <section className="container">

//         <div className="packages-toolbar">

//           <div className="toolbar-box">

//             <FaSearch />

//             <input
//               type="text"
//               placeholder="Search Package..."
//               value={search}
//               onChange={(e) =>
//                 setSearch(e.target.value)
//               }
//             />

//           </div>

//           <div className="toolbar-box">

//             <FaFilter />

//             <select
//               value={category}
//               onChange={(e) =>
//                 setCategory(e.target.value)
//               }
//             >

//               {categories.map((item) => (

//                 <option
//                   key={item}
//                   value={item}
//                 >
//                   {item}
//                 </option>

//               ))}

//             </select>

//           </div>

//           <div className="toolbar-box">

//             <FaSortAmountDown />

//             <select
//               value={sort}
//               onChange={(e) =>
//                 setSort(e.target.value)
//               }
//             >

//               <option value="default">
//                 Default
//               </option>

//               <option value="name">
//                 Name
//               </option>

//               <option value="price">
//                 Price
//               </option>

//               <option value="rating">
//                 Rating
//               </option>

//             </select>

//           </div>

//         </div>

//       </section>

//       {/* Package Cards */}

//       <section className="container">

//         <div className="packages-grid">

//           {filteredPackages.length > 0 ? (

//             filteredPackages.map((item) => (

//               <PackageCard
//                 key={item.id}
//                 item={item}
//               />

//             ))

//           ) : (

//             <div className="no-package">

//               <h2>No Packages Found</h2>

//               <p>
//                 Try another search or category.
//               </p>

//             </div>

//           )}

//         </div>

//       </section>

//     </div>

//   );

// }

// export default Packages;


import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useSearchParams } from "react-router-dom";

import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
} from "react-icons/fa";

import PackageCard from "../components/PackageCard";
import packagesData from "../data/packages";

import "./Packages.css";

function Packages() {

  const [searchParams] = useSearchParams();

  const heroSearch =
    searchParams.get("search") || "";

  const [packages] = useState(packagesData);

  const [search, setSearch] =
    useState(heroSearch);

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  useEffect(() => {

    setSearch(heroSearch);

  }, [heroSearch]);

  const categories = [

    "All",

    ...new Set(

      packages.map(
        (item) => item.category
      )

    ),

  ];

  const filteredPackages = useMemo(() => {

    let data = [...packages];

    data = data.filter((item) => {

      const text = (

        item.title +
        " " +
        item.location +
        " " +
        item.category

      ).toLowerCase();

      return text.includes(
        search.toLowerCase()
      );

    });

    if (category !== "All") {

      data = data.filter(

        (item) =>
          item.category === category

      );

    }

    switch (sort) {

      case "price":

        data.sort(
          (a, b) => a.price - b.price
        );

        break;

      case "rating":

        data.sort(
          (a, b) => b.rating - a.rating
        );

        break;

      case "name":

        data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        break;

      default:

        break;

    }

    return data;

  }, [
    packages,
    search,
    category,
    sort,
  ]);

  return (

    <div className="packages-page">
            {/* Hero */}

      <section className="packages-hero">

        <div className="container">

          <div className="packages-content">

            <span>
              Explore Amazing Trips
            </span>

            <h1>
              Find Your Perfect Holiday Package
            </h1>

            <p>
              Search, filter and discover premium
              travel packages at the best prices.
            </p>

          </div>

        </div>

      </section>

      {/* Search Toolbar */}

      <section className="container">

        <div className="packages-toolbar">

          {/* Search */}

          <div className="toolbar-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search Package..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* Category */}

          <div className="toolbar-box">

            <FaFilter />

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              {categories.map((item) => (

                <option
                  key={item}
                  value={item}
                >

                  {item}

                </option>

              ))}

            </select>

          </div>

          {/* Sort */}

          <div className="toolbar-box">

            <FaSortAmountDown />

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >

              <option value="default">
                Default
              </option>

              <option value="name">
                Name (A-Z)
              </option>

              <option value="price">
                Lowest Price
              </option>

              <option value="rating">
                Highest Rating
              </option>

            </select>

          </div>

        </div>

      </section>

      {/* Packages */}

      <section className="container">

        <div className="packages-grid">

          {filteredPackages.length > 0 ? (

            filteredPackages.map((item) => (

              <PackageCard
                key={item.id}
                item={item}
              />

            ))

          ) : (

            <div className="no-package">

              <h2>
                No Packages Found
              </h2>

              <p>
                No packages matched your search.
                Try another destination or category.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>

  );

}

export default Packages;