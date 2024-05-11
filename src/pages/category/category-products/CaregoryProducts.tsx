// import { Category } from "../../../types";
// import React, { useState, useEffect } from 'react';
// import "./CategoryProducts.scss";

// const CaregoryProducts = ({ products }: Pick<Category, "products">) => {
//     // console.log(products[0].category);
//     const [loading, setLoading] = useState(true);
//     return (
//         <div className="container__products">
//             <h1>Shop by category</h1>
//             {loading ? (
//                 <div className='loading'><span class="loader"></span></div>
//             ) :
//                 (
//                     <div className="products">

//                         {
//                             products.map(product =>
//                                 <div className="product" key={product.id}>
//                                     <img className="image" src={product.images[0]} alt="" />
//                                     <p>{product.title}</p>
//                                 </div>
//                             )
//                         }
//                     </div>
//                 )
//             }
//         </div>
//     );
// }

// export default CaregoryProducts;



import { Category } from "../../../types";
import { useState, useEffect } from 'react';
import "./CategoryProducts.scss";
import { Link } from "react-router-dom";

const CategoryProducts = ({ products }: Pick<Category, "products">) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="container__products">
            <h1>Shop by category</h1>
            {loading ? (
                <div className='loading'><span className="loader"></span></div>
            ) :
                (
                    <div className="products">
                        {
                            products.map((product: { id: number; images: string[]; title: string }) =>
                                <Link to={`/singlePage/${product.id}`}>
                                    <div className="product" key={product.id}>
                                        <img className="image" src={product.images[0]} alt="" />
                                        <p>{product.title}</p>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CategoryProducts;
