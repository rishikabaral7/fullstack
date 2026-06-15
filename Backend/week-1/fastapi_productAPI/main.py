from fastapi import FastAPI
from model import Product

app = FastAPI()

products = [
    Product(id=1, name="Samsung S25", price= 120000, quantity=10  ),
    Product(id=2, name="Iphone 17", price= 12000, quantity=8  ),
    Product(id=3, name="Iphone 17 pro", price= 120000, quantity=9  ),   
    ]

@app.get("/product")
def get_products():
    return products

@app.get("/product/{id}")
def get_product_by_id(id:int):
    for product in products:
        if product.id == id:
            return product
        return{"message": "Product added successfully"}

@app.post("/product")
def add_product(product: Product):
    products.append(product)
    return product

@app.put("/product/{id}")
def update_product(id:int, product:Product):
        for i in range(len(products)):
            if products[i].id == id:
                products[i] = product
                return product
            
@app.delete("/product/{id}")
def delete_product(id:int):
    for product in products:
        if product.id == id:
            products.remove(product)
            return{"message":"product delete successfully"}
            
            