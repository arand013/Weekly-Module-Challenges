package net.jpmchase.ctcrcm.service

import net.jpmchase.ctcrcm.entity.EmailStatusEntity;
import net.jpmchase.ctcrcm.entity.LCRMStagingEntity;
import net.jpmchase.ctcrcm.entity.RCMBatchProcessEntity;
import net.jpmchase.ctcrcm.model.ContentKeyValue;
import net.jpmchase.ctcrcm.model.EmailDetails;
import net.jpmchase.ctcrcm.model.LCRMStaging;
import net.jpmchase.ctcrcm.repository.EmailDetailsRespository;
import net.jpmchase.ctcrcm.repository.EmailStatusEntity;
import net.jpmchase.ctcrcm.service.javaMailService;
import net.jpmchase.ctcrcm.util.MyEmailServiceEnum;

import org.jetbrains.annotations.NotNull;
import org.sllf4j.Logger;
import org.sllf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class MyEmailServiceImpl implements MyEmailService {
    private static final Logger logger = LoggerFactory.getLogger(MyEmailServiceImpl.class);

    @Autowired
    private LcrmRepository lcrmRepository;

    @Autowired
    private EmailDetailsRespository emailDetailsRespository;

    @Autowired
    private EmailStatusStorageRepository emailStatusStorageRepository;

    @Autowired
    private EmailSendStatus emailSendStatus;

    @Autowired
    private MailService MailService;

    @Value
    private string applicationURL;

    @Value
    private string emailList;

    @Value("1")
    private int previousDay;

    @Autowired
    private Converter<EmailNotificationRequest, EmailDetails> converterForMailService;


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

}



/* 
 * 
 *     public void saveEmailStatusEntity(LocalDateTime runDate, String job_name, String job_status, int success_count,
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

 */