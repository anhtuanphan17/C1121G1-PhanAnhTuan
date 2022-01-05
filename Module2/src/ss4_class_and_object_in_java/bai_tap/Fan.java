package ss4_class_and_object_in_java.bai_tap;

public class Fan {
    private static final int SLOW  = 1;
    private static final int MEDIUM =2;
    private static final int FAST = 3;
    private int speed;
    private boolean isOn = false;
    private double radius = 5;
    private String color = " blue ";

    public Fan(int speed, boolean isOn, double radius, String color) {
        this.speed = speed;
        this.isOn = isOn;
        this.radius = radius;
        this.color = color;
    }


    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        if(speed == this.SLOW){
            this.speed==
        };
    }

    public boolean isOn() {
        return isOn;
    }

    public void setOn(boolean on) {
        isOn = on;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
