package case_study.service;

import case_study.models.Facility;
import case_study.models.House;
import case_study.models.Room;
import case_study.models.Villa;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class FacilityService implements IFacilityService {

    static Scanner scanner = new Scanner(System.in);
    static Map<Facility, Integer> facilityList = new LinkedHashMap<>();

    static {
        facilityList.put(new Room("1","Room",32, 30, 3, "Day", "water"), 6);
        facilityList.put(new Villa("2","Villa",300, 30, 3, "Month", "Sea View", 100, 2), 10);
        facilityList.put(new House("3","House",100, 30, 3, "Month", "Superior", 3), 7);
        facilityList.put(new Room("4","Room",40, 30, 3, "Hour", "water"), 8);
    }


    @Override
    public void displayFacilityList() {
        Set<Facility> set = facilityList.keySet();
        for (Facility key : set) {
            System.out.println(key + "times of use: " + facilityList.get(key));

        }
    }



    @Override
    public void addNewVilla() {
        System.out.println("input facility code");
        String facilityCode = scanner.nextLine();
        System.out.println("input nameOfService");
        String nameOfService = scanner.nextLine();
        System.out.println("input squareMeter");
        double squareMeter = scanner.nextDouble();
        System.out.println("input rentalPrice");
        double rentalPrice = scanner.nextDouble();
        System.out.println("input maxCapacity");
        int maxCapacity = scanner.nextInt();
        System.out.println("input rentalType");
        String rentalType = scanner.nextLine();
        System.out.println("input roomStandard");
        String roomStandard = scanner.nextLine();
        System.out.println("input poolArea");
        double poolArea = scanner.nextDouble();
        System.out.println("input floor");
        int floor = scanner.nextInt();
        facilityList.put(new Villa(facilityCode,nameOfService,squareMeter, rentalPrice, maxCapacity, rentalType, roomStandard, poolArea, floor), 0);
        System.err.println("added villa successfully");

    }



    @Override
    public void addNewHouse() {
        System.out.println("input facility code");
        String facilityCode = scanner.nextLine();
        System.out.println("input nameOfService");
        String nameOfService = scanner.nextLine();
        System.out.println("input squareMeter");
        double squareMeter = scanner.nextDouble();
        System.out.println("input rentalPrice");
        double rentalPrice = scanner.nextDouble();
        System.out.println("input maxCapacity");
        int maxCapacity = scanner.nextInt();
        System.out.println("input rentalType");
        String rentalType = scanner.nextLine();
        System.out.println("input roomStandard");
        String roomStandard = scanner.nextLine();
        System.out.println("input floor");
        int floor = scanner.nextInt();

        facilityList.put(new House(facilityCode,nameOfService,squareMeter, rentalPrice, maxCapacity, rentalType, roomStandard, floor), 0);
        System.err.println();

    }



    @Override
    public void addNewRoom() {
        System.out.println("input facility code");
        String facilityCode = scanner.nextLine();
        System.out.println("input nameOfService");
        String nameOfService = scanner.nextLine();
        System.out.println("input squareMeter");
        double squareMeter = scanner.nextDouble();
        System.out.println("input rentalPrice");
        double rentalPrice = scanner.nextDouble();
        System.out.println("input maxCapacity");
        int maxCapacity = scanner.nextInt();
        System.out.println("input rentalType");
        String rentalType = scanner.nextLine();
        System.out.println("input free included service");
        String freeIncludedService = scanner.nextLine();

        facilityList.put(new Room(facilityCode,nameOfService,squareMeter, rentalPrice, maxCapacity, rentalType, freeIncludedService), 0);
        System.err.println("added Successfully");

    }



    @Override
    public void displayListFacilityMaintenance() {

    }


    @Override
    public void backToMainMenu() {

    }
}
