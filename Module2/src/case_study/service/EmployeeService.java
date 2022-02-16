package case_study.service;

import case_study.models.Employee;

import java.util.ArrayList;
import java.util.Scanner;

public class EmployeeService implements IService, IEmployeeService {

    static Scanner scanner = new Scanner(System.in);
    private static ArrayList<Employee> employeesArrayList = new ArrayList<>();

    static {
        employeesArrayList.add(new Employee("1234", "Tan", "26/12/1965", "male", "1246535", "0989898989", "pasdjad@gmail.com", "Dai Hoc", "staff", "706"));
        employeesArrayList.add(new Employee("1235", "Hung", "1/2/1996", "male", "12461235", "09898989234", "asdas@gmail.com", "Cao Dang", "leader", "710"));
        employeesArrayList.add(new Employee("1236", "Dung", "6/2/1995", "male", "12461232", "0989898212", "asd1wsd@gmail.com", "Trung Cap", "staff", "706"));

    }


    @Override
    public void displayListEmployees() {
        for (Employee employee : employeesArrayList) {
            System.out.println(employee);
        }
    }


    @Override
    public void addNewEmployee() {
        System.out.println("input employee Number: ");
        String employeeNumber = scanner.nextLine();
        System.out.println("input name");
        String name = scanner.nextLine();
        System.out.println("input dateOfBirth");
        String dateOfBirth = scanner.nextLine();
        System.out.println("input gender ");
        String gender = scanner.nextLine();
        System.out.println("input idNumber");
        String idNumber = scanner.nextLine();
        System.out.println("input phoneNumber");
        String phoneNumber = scanner.nextLine();
        System.out.println("input email");
        String email = scanner.nextLine();
        System.out.println("input academic level");
        String academicLevel = scanner.nextLine();
        System.out.println("input position");
        String position = scanner.nextLine();
        System.out.println("input salary");
        String salary = scanner.nextLine();

        employeesArrayList.add(new Employee(employeeNumber, name, dateOfBirth, gender, idNumber, phoneNumber, email, academicLevel, position, salary));
        System.err.println("added successfully");
        displayListEmployees();

    }

    @Override
    public void editEmployee() {
        System.out.println("Enter employee number you want to revise");
        String employeeNumber = scanner.nextLine();
        boolean flag =true;
        for (Employee employee : employeesArrayList) {
            if (employee.getEmployeeNumber().equals(employeeNumber)) {
                System.out.println("input name");
                String name = scanner.nextLine();
                employee.setName(name);
                System.out.println("input dateOfBirth");
                String dateOfBirth = scanner.nextLine();
                employee.setDateOfBirth(dateOfBirth);
                System.out.println("input gender ");
                String gender = scanner.nextLine();
                employee.setGender(gender);
                System.out.println("input idNumber");
                String idNumber = scanner.nextLine();
                employee.setIdNumber(idNumber);
                System.out.println("input phoneNumber");
                String phoneNumber = scanner.nextLine();
                employee.setPhoneNumber(phoneNumber);
                System.out.println("input email");
                String email = scanner.nextLine();
                employee.setEmail(email);
                System.out.println("input academic level");
                String academicLevel = scanner.nextLine();
                employee.setAcademicLevel(academicLevel);
                System.out.println("input position");
                String position = scanner.nextLine();
                employee.setPosition(position);
                System.out.println("input salary");
                String salary = scanner.nextLine();
                employee.setSalary(salary);

                displayListEmployees();
                flag =false;
                break;


            }

        }if(flag){
            System.err.println("this employee number is not available in current list");
        }

    }

    @Override
    public void returnMainMenu() {

    }

}
