package service.impl;

import model.Product;
import repository.impl.ProductRepository;
import service.IProductService;

import java.util.List;

public class ProductService implements IProductService {
    ProductRepository productRepository = new ProductRepository();
    @Override
    public List<Product> findAll() {
        return productRepository.findAll() ;
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }


}

