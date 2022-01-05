package ss4_class_and_object_in_java.bai_tap;

import java.util.Date;

public class StopWatch {
    private Date startTime;
    private Date endTime;

    public StopWatch(){
         this.startTime=  new Date();

    }
    public Date setStarTime(){
      return   this.startTime=new Date();
    }
    public Date getEndTime(){
        return  this.endTime=new Date();
    }




}
