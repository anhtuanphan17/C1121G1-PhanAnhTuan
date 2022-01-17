package ss12_java_collection_framework.bai_tap.quan_ly_xe.controller;

import ss12_java_collection_framework.bai_tap.quan_ly_xe.service.ManagerService;

import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int choose = input.nextInt();

        while (true) {

            System.out.println(" CHƯƠNG TRÌNH QUẢN LÝ PHƯƠNG TIỆN GIAO THÔNG\n" +
                    "chọn chương trình\n" +
                    "1.Thêm mới phương tiện\n" +
                    "2. Hiển Thị Phương Tiện\n" +
                    "3. Xóa Phương Tiện\n" +
                    "4. Thoát\n");


            switch (choose) {
                case 1:
                    ManagerService.add();
                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;


            }


        }


    }

}
