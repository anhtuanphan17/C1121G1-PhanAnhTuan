package ss12_java_collection_framework.bai_tap.arraylist_linkedlist_in_java_collections.service;

import ss12_java_collection_framework.bai_tap.arraylist_linkedlist_in_java_collections.model.Product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class ProductManager implements IProductManager {


   private static ArrayList<Product> productArray = new ArrayList<>();

    static {

        Product product1 = new Product("Tivi", "212", 25);
        Product product2 = new Product("Tu Lanh", "215", 50);
        Product product3 = new Product("May Tinh", "216", 16);
        Product product4 = new Product("Quat", "219", 7);
    }




    @Override
    public void display() {
        for(Product product: productArray){
            System.out.println(product);
        }

    }

    @Override
    public void add() {
        Scanner input = new Scanner(System.in);
        System.out.println("Nhap ten san pham");
        String name = input.nextLine();
        System.out.println("Nhap id san pham");
        String id = input.nextLine();
        System.out.println("Nhap gia thanh");
        double price = input.nextDouble();
        Product product = new Product(name,id,price);
        productArray.add(product);
        System.err.println("Them moi thanh cong");

    }

    @Override
    public void edit() {
        Scanner input  = new Scanner(System.in);
        System.out.println("input id of product you want to revise");
        String id = input.nextLine();
        for(int i=0;i<productArray.size();i++){
            if(productArray.get(i).getId().equals(id)){
                System.out.println("input new name ");
                String newName= input.nextLine();
                productArray.get(i).setProductName(newName);
                System.out.println("input new price ");
                double newPrice= input.nextDouble();
                productArray.get(i).setPrice(newPrice);
            }
        }

    }

    @Override
    public void remove() {
        Scanner input = new Scanner(System.in);
        System.out.println("Nhap id can xoa");
        String id = input.nextLine();
        for(int i=0;i<productArray.size();i++){
            if(productArray.get(i).getId().equals(id)){
               productArray.remove(productArray.get(i));
            }else{
                System.out.println("this id is not in the list");
            }
        }

    }

    @Override
    public void search() {

    }

    @Override
    public void sort() {

    }
}
