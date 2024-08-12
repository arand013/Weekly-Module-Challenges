import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import net.jpmchase.ctcrcm.service.MyEmailServiceImpl;
import net.jpmchase.ctcrcm.entity.EmailStatusEntity;
import net.jpmchase.ctcrcm.repository.EmailStatusStorageRepository;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.lang.reflect.InvocationTargetException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class MyEmailServiceImplTest {

    @Autowired
    private MyEmailServiceImpl myEmailServiceImpl;

    @Autowired
    private EmailStatusStorageRepository emailStatusStorageRepository;

    @BeforeEach
    void setup(){

        MockitoAnnotations.openMocks(this);
        myEmailServiceImpl = Mockito.mock(MyEmailServiceImpl.class);
    }

    @Test
    public void testSaveEmailStatusEntity() {
        // Set up mock objects
        EmailStatusEntity emailStatusEntity = new EmailStatusEntity();

        DateTimeFormatter formatter = new DateTimeFormatter.ofPattern("yyyy-MM0-dd HH:mm:ss");
        LocalDateTime runDate = LocalDateTime.parse("2000-12-01 12:01:01", formatter);

        emailStatusEntity.setRunDate(runDate);
        emailStatusEntity.setJob_name("job_name");
        emailStatusEntity.setJob_status("job_status");
        emailStatusEntity.setSuccess_count(1);
        emailStatusEntity.setFailed_count(0);
        emailStatusEntity.setTotal_count(10);
        emailStatusEntity.setEmail_send_status("success");
        emailStatusEntity.setBatch_id(1);
        emailStatusEntity.setFailure_reason("failure_reason");
        emailStatusEntity.setBatchIds("batchIds");
        emailStatusEntity.setDuplicate_count(0);

        when(emailStatusStorageRepository.save(any(EmailStatusEntity.class))).thenReturn(emailStatusEntity);

        // Call the method
        myEmailServiceImpl.saveEmailStatusEntity(runDate, "job_name", "job_status", 1, 0, 10, "success", 1,
                "failure_reason", "batchIds", 0);

        // Verify the result
        assertEquals(runDate, emailStatusEntity.getRunDate());
        assertEquals("job_name", emailStatusEntity.getJob_name());
        assertEquals("job_status", emailStatusEntity.getJob_status());
        assertEquals(1, emailStatusEntity.getSuccess_count());
        assertEquals(0, emailStatusEntity.getFailed_count());
        assertEquals(10, emailStatusEntity.getTotal_count());
        assertEquals("success", emailStatusEntity.getEmail_send_status());
        assertEquals(1, emailStatusEntity.getBatch_id());
        assertEquals("failure_reason", emailStatusEntity.getFailure_reason());
        assertEquals("batchIds", emailStatusEntity.getBatchIds());
        assertEquals(0, emailStatusEntity.getDuplicate_count());
    }


    @Test
public void testSendEmail_SuccessfulEmailSending() {
    // Arrange
    MyEmailServiceImpl myEmailService = new MyEmailServiceImpl();
    myEmailService.previousDay = 1;
    LocalDate prevDate = LocalDate.now().minusDays(1);
    LocalDateTime currentDate = prevDate.atTime(23, 59, 59);
    String run_date = currentDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    List<RcmBatchProcessEntity> rcmBatchProcessEntity = new ArrayList<>();
    // Act
    List<EmailDetails> emailDetailsList = myEmailService.sendEmail();
    // Assert
    assertNotNull(emailDetailsList);
    assertEquals(1, emailDetailsList.size());
}



@Test
public void testSendEmail_FailureToEmailSending() {
    // Arrange
    MyEmailServiceImpl myEmailService = new MyEmailServiceImpl();
    myEmailService.previousDay = 0;
    LocalDate prevDate = LocalDate.now().minusDays(1);
    LocalDateTime currentDate = prevDate.atTime(23, 59, 59);
    String run_date = currentDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    List<RcmBatchProcessEntity> rcmBatchProcessEntity = new ArrayList<>();
    // Act
    List<EmailDetails> emailDetailsList = myEmailService.sendEmail();
    // Assert
    assertNotNull(emailDetailsList);
    assertEquals(0, emailDetailsList.size());
}











@Test
public void testEmailSender_SuccessfulEmailSending() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException{
    // Arrange
    MyEmailServiceImpl myEmailService = new MyEmailServiceImpl();

    Converter<EmailNotificationRequest, EmailDetails> converterForMailService = Mockito.mock(Converter.class);
    myEmailService.converterForMailService = converterForMailService;
    MailService mailService = Mockito.mock(MailService.class);
    ReflectionTestUtils.setField(myEmailService, "mailService", mailService);


    EmailNotificationRequest emailNotificationRequest = new EmailNotificationRequest();
    String run_date = "2023-03-01 23:59:59";
    EmailStatusEntity emailStatusValidator = new EmailStatusEntity();
    emailStatusValidator.setEmail_send_status(MyEmailServiceEnum.SUCCESS.getValue());

    List<EmailDetails> emailDetails; 

    Method myEmailImplEmailSenderMethod = MyEmailServiceImpl.class.getDeclaredMethod("emailSender", EmailNotificationRequest.class, String.class, EmailStatusEntity.class);
    myEmailImplEmailSenderMethod.setAccessible(true);

    emailDetails = (List<EmailDetails>) myEmailImplEmailSenderMethod.invoke(myEmailServiceImpl, emailNotificationRequest, run_date, emailStatusValidator);


    // Assert
    assertNotNull(emailDetailsList);
    assertEquals(1, emailDetailsList.size());
}




@Test
public void testEmailSender_FailureToEmailSending() {
    // Arrange
    MyEmailServiceImpl myEmailService = new MyEmailServiceImpl();
    EmailNotificationRequest emailNotificationRequest = new EmailNotificationRequest();
    String run_date = "2023-03-01 23:59:59";
    EmailStatusEntity emailStatusValidator = new EmailStatusEntity();
    emailStatusValidator.setEmail_send_status(MyEmailServiceEnum.FAILURE.getValue());
    // Act
    List<EmailDetails> emailDetailsList = myEmailService.emailSender(emailNotificationRequest, run_date, emailStatusValidator);
    // Assert
    assertNotNull(emailDetailsList);
    assertEquals(0, emailDetailsList.size());
}

// llama 3.1 8B 

    @Test
    public void testEmailSendBodyResponse_Success() {
        // Arrange
        String emailStatus = MyEmailServiceEnum.SUCCESS.getValue();

        // Act
        List<EmailDetails> result = myEmailServiceImpl.emailSendBodyResponse(emailStatus);

        // Assert
        assertEquals(1, result.size());
        EmailDetails emailDetails = result.get(0);
        assertEquals(1, emailDetails.getSendTo().size());
        assertEquals(MyEmailServiceEnum.NA.getValue(), emailDetails.getSendTo().get(0));
        assertEquals(1, emailDetails.getCcTo().size());
        assertEquals(MyEmailServiceEnum.NA.getValue(), emailDetails.getCcTo().get(0));
        assertEquals("Email was sent successfully", emailDetails.getMessage());
        assertEquals(MyEmailServiceEnum.NA.getValue(), emailDetails.getSubject());
    }

/// Llmada 405B 

// Test case for EmailSednBodyResponse. 
    @Test
    public void testEmailSendBodyResponse_Failure() {
        // Arrange
        String emailStatus = MyEmailServiceEnum.FAILURE.getValue();

        // Act
        List<EmailDetails> result = myEmailService.emailSendBodyResponse(emailStatus);

        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        EmailDetails emailDetails = result.get(0);
        assertEquals(MyEmailServiceEnum.NA.getValue(), emailDetails.getSendTo().get(0));
        assertEquals(MyEmailServiceEnum.NA.getValue(), emailDetails.getCcTo().get(0));
        assertEquals("Email Ccould not be sent becasue off failure in status", emailDetails.getBody());
        assertEquals(MyEmailServiceEnum)2

    }
}