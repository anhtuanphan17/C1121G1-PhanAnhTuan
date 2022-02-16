package case_study.service;
import case_study.models.Customer;

import java.util.LinkedList;
import java.util.Scanner;

public class CustomerService implements IService,ICustomerService {

    static Scanner scanner = new Scanner(System.in);
       static LinkedList<Customer> customerLinkedList = new LinkedList<>();



    static{
        customerLinkedList.add(new Customer("1234","Hoa","12/3/1990","Female","1321234","096415466752","adjads5ohd@gmail.com","Gold","DN"));
        customerLinkedList.add(new Customer("1233","Thanh","12/3/1991","Female","1234341","09641541263","1sda@gmail.com","Silver","DN"));
        customerLinkedList.add(new Customer("1232","Nhu","12/3/1992","Female","365362","09641546124","adjaohd@gmail.com","Member","HCM"));
        customerLinkedList.add(new Customer("1231","Hoang","12/3/1993","Male","67643244","09641546124","adja1sd1ohd@gmail.com","Diamond","HN"));
    }


    @Override
    public void displayListCustomer() {
        for(Customer customer : customerLinkedList){
            System.out.println(customer);
        }
    }

    @Override
    public void addNewCustomer() {
        System.out.println("input customer number");
        String customerNumber = scanner.nextLine();
        System.out.println("input name");
        String name = scanner.nextLine();
        System.out.println("input date of birth");
        String dateOfBirth = scanner.nextLine();
        System.out.println("input gender");
        String gender = scanner.nextLine();
        System.out.println("input idNumber");
        String idNumber = scanner.nextLine();
        System.out.println("input phone number");
        String phoneNumber = scanner.nextLine();
        System.out.println("input email");
        String email = scanner.nextLine();
        System.out.println("input type of customer ");
        String typeOfCustomer = scanner.nextLine();
        System.out.println("input address");
        String address = scanner.nextLine();

        customerLinkedList.add(new Customer(customerNumber,name,dateOfBirth,gender,idNumber,phoneNumber,email,typeOfCustomer,address));

        System.err.println("added successfully");

    }


    @Override
    public void editCustomer() {
            System.out.println("input customer number of customer you want to revise");
            String customerNumber = scanner.nextLine();
            boolean flag = true;
            for (Customer customer : customerLinkedList) {

                if (customer.getCustomerNumber().equals(customerNumber)) {
                    System.out.println("input name");
                    String name = scanner.nextLine();
                    customer.setName(name);
                    System.out.println("input date of birth");
                    String dateOfBirth = scanner.nextLine();
                    customer.setDateOfBirth(dateOfBirth);
                    System.out.println("input gender");
                    String gender = scanner.nextLine();
                    customer.setGender(gender);
                    System.out.println("input idNumber");
                    String idNumber = scanner.nextLine();
                    customer.setIdNumber(idNumber);
                    System.out.println("input phone number");
                    String phoneNumber = scanner.nextLine();
                    customer.setPhoneNumber(phoneNumber);
                    System.out.println("input email");
                    String email = scanner.nextLine();
                    customer.setEmail(email);
                    System.out.println("input type of customer ");
                    String typeOfCustomer = scanner.nextLine();
                    customer.setTypeOfCustomer(typeOfCustomer);
                    System.out.println("input address");
                    String address = scanner.nextLine();
                    customer.setAddress(address);
                    flag = false;
                    break;
                }

                if (flag) {
                    System.err.println("this customer number is not available in current list");

                }
            }

    }

    @Override
    public void returnMainMenu() {

    }
}
