package ss5_access_modifier_static_method.bai_tap;

public class Student {
    private String name;
    private String classes ="C02";


    public Student(){
    }

    public Student(String name, String classes) {
        this.name = name;
        this.classes = classes;
    }

    protected void setName(String name){
        this.name = name;
    }
    void setClasses(String classes){
        this.classes=classes;
    }






}
