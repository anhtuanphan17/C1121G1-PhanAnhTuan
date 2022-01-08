package ss6_inheritance.bai_tap.baitap3;

import ss6_inheritance.bai_tap.baitap3.MovablePoint;
import ss6_inheritance.bai_tap.baitap3.Point;

public class TestMoveablePoint {
    public static void main(String[] args) {

        Point point = new Point();
        point.setX(2);
        point.setY(5);

        MovablePoint movablePoint = new MovablePoint(2,5);
        movablePoint.move();
        System.out.println(movablePoint.getXY());



    }
}
