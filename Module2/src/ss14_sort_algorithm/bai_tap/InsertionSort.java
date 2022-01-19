package ss14_sort_algorithm.bai_tap;

public class InsertionSort {

    public static void insertionSort(int [] list){
        for(int i=1;i<list.length;i++){
            int pos=i;
            int temp=0;
            while(pos>0&&list[pos]<list[pos-1]){
                temp=list[pos];
                list[pos] = list[pos-1];
                pos--;


                
            }

        }
    }
}
