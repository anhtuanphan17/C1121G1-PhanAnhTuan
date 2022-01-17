package ss12_java_collection_framework.bai_tap.quan_ly_xe.model;

public class Truck extends MeansofTransportation{
     private String truckLoad;



    public Truck(String numberPlate, String producer, String yearOfProduction, String owner, String truckLoad) {
        super(numberPlate, producer, yearOfProduction, owner);
        this.truckLoad = truckLoad;
    }



}
