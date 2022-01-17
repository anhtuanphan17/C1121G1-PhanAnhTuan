package ss12_java_collection_framework.bai_tap.quan_ly_xe.model;

public abstract class MeansofTransportation {
    private String numberPlate;
    private String Producer;
    private String yearOfProduction;
    private String owner;

    public MeansofTransportation() {

    }

    public MeansofTransportation(String numberPlate, String producer, String yearOfProduction, String owner) {
        this.numberPlate = numberPlate;
        Producer = producer;
        this.yearOfProduction = yearOfProduction;
        this.owner = owner;
    }


}
