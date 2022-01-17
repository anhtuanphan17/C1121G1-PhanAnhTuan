package ss12_java_collection_framework.bai_tap.quan_ly_xe.model;

public class Bike extends MeansofTransportation {
     private String capacity;



    public Bike(String numberPlate, String producer, String yearOfProduction, String owner,String capacity) {
        super(numberPlate, producer, yearOfProduction, owner);
        this.capacity=capacity;
    }

}
