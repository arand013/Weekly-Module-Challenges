import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class Plain {

        //Possibly named getEmailDetails
    public List<EmailDetails> updateEmailStatus(){

        List<EmailDetails> emptyList = new ArrayList<>();

        String emailSentStatus = "success";

        LocalDate prevDate = LocalDate.now().minusDays(previousDay);

        LocalDate currentDate = prevDate.atTime(23,59, 59);

        String run_Date = currentDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        List<RCMBatchProcessEntity> rcmBatchProcessEntity = emailDetailsRespository.findByDate(run_Date);


        if(rcmBatchProcessEntity.size() > 0) {
            batchProcessTableUpdate(rcmBatchProcessEntity, currentDate);
        } else if (rcmBatchProcessEntity.size == 0) {

            // replace enum with string of failure "" 
            emailSentStatus = MyEmailServiceImplEnum.FAILURE.getValue();
            saveEmailStatusEntity( currentDate, "", "", 0, 0,0, emailSentStatus, 0, "", MyEmailServiceImplEnum.NA.getValue(), 0 );
        }

        return emptyList; 

    }


    public void saveEmailStatusEntity(LocalDateTime runDate, String job_name, String job_status, int success_count,
        int failed_count, int total_count,
        String email_send_status, long batch_id, String failure_reason, String batchIds, int duplicateCount) {
    EmailStatusEntity emailStatusEntity = new EmailStatusEntity();

    emailStatusEntity.setRunDate(runDate);
    emailStatusEntity.setJob_name(job_name);
    emailStatusEntity.setJob_status(job_status);
    emailStatusEntity.setSuccess_count(success_count);
    emailStatusEntity.setFailed_count(failed_count);
    emailStatusEntity.setTotal_count(total_count);
    emailStatusEntity.setEmail_send_status(email_send_status);
    emailStatusEntity.setBatch_id(batch_id);
    emailStatusEntity.setFailure_reason(failure_reason);
    emailStatusEntity.setBatchIds(batchIds);
    emailStatusEntity.setDuplicate_count(duplicateCount);

    emailStatusStorageRepository.save(emailStatusEntity);

    }

public List<EmailDetails>  sendEmail(){
List<EmailDetails> emptyList = new ArrayList<>();

EmailNotificationRequest emailNotificationRequest = new EmailNotificationRequest;
LocalDate prevDate = LocalDate.now().minusDays(previousDay);

LocalDateTime currentDate = prevDate.atTime(23,59,59);
String run_date = currentDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
List<RcmBatchProcessEntity> rcmBatchProcessEntity = emailDetailsRespository.findByDate(run_date);

EmailStatusEntity emailStatusValidator = emailSendStatus.validate(run_date);

return emailSender(emailNotificationRequest, run_date, emailStatusValidator);
}

@NotNull
private List<EmailDetails> emailSender(final EmailNotificationRequest emailNotificationRequest, final String run_date, final EmailStatusEntity emailStatusValidator) {
List<EmailDetails> emptyList; 
if(emailStatusValidator.getEmail_send_status().equallIgnoreCase(MyEmailServiceEnum.SUCCESS.getValue())) {

    createEmailNotification(emailNotificationRequest, emailStatusValidator, MyEmailServiceEnum.NA.getValue(), run_date);
    EmailDetails emailDetailsFilled = converterForMailService.convert(emailNotificationRequest); 
    try {
        mailService.sendNotificationRequest(emailDetailsFilled);
        } catch (Exception e) {
            logger.error(e.getMessage());
    }
    emptyList = emailSendBodyResponse(MyEmailServiceEnum.SUCCESS.getValue());
    return emptyList;
}
emptyList = emailSendBodyResponse(MyEmailServiceEnum.FAILURE.getValue());
return emptyList;
}

public List<EmailDetails> emailSendBodyResponse( String emailStatus){
    List<EmailDetails> emptyList = new ArrayList<>();

    if(emailStatus.equalsIgnoreCase(MyEmailServiceEnum.FAILURE.getValue())){

        List<String> emptySendTo = new ArrayList<>();
        emptySendTo.add(MyEmailServiceEnum.NA.getValue());
        List<String> emptyCCTo = new ArrayList<>();
        emptySendTo.add(MyEmailServiceEnum.NA.getValue());
        EmailDetails failedEmail = new EmailDetails(emptySendTo, emptyCcTo, "Email Ccould not be sent becasue off failure in status", MyEmailServiceEnum.NA.getValue());
        emptyList.add(failedEmail);
    } else {
        List<String> emptySendTo = new ArrayList<>();
        emptySendTo.add(MyEmailServiceEnum.NA.getValue());
        List<String> emptyCCTo = new ArrayList<>();
        emptySendTo.add(MyEmailServiceEnum.NA.getValue());
        EmailDetails failedEmail = new EmailDetails(emptySendTo, emptyCcTo, "Email was sent successfully", MyEmailServiceEnum.NA.getValue());
        emptyList.add(failedEmail);
    }
    return emptyList;
}


    
}
