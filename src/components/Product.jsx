import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {addCart} from "../redux/actions/index";


const Product = () => {
   
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => { 
      dispatch(addCart(product)); 
  }


 
  useEffect(() => {
   const getProduct = async () => { 
       setLoading(true);
       const response  = await fetch(`https://fakestoreapi.com/products/${id}`);
       setProduct(await response.json());
       setLoading(false);
   }
   getProduct();
  }, []);
  const Loading = () => { 
    return( 
        <>
       Loading...
        </>
    )
}
  const ShowProduct = () => { 
      return ( 
          <>
          <div className="col-md-6">
              <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
          <div className="col-md-6">
              <h4 className='text-uppercase text-black-50'>{product.category}</h4>
              <h1 className='display-6'>{product.title}</h1>
              <p className="lead fw-bolder">
                  Rating {product.rating && product.rating.rate}
                  <i className="fa fa-star"></i>
              </p>
              <h3 className='display-7 fw-bold my-1'> ${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Buy Now</button>
                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="row">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height="180px"  />
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className='lead fw-bold'>
                            1 x ${product.price} = $
                             { product.price}
                        </p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                </div>
          </div>
          </>
      )
  }

  return (
    <div className="container">
        <div className="row">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    </div>
  )
}

export default Product