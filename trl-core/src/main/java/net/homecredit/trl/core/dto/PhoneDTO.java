package net.homecredit.trl.core.dto;

import net.homecredit.trl.domain.Phone;

import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * JSON serializable DTO containing Phone data
 *
 */
public class PhoneDTO {

    private Long id;
    private String phoneNumber;

    public PhoneDTO() {
    }

    public PhoneDTO(Long id, String phoneNumber) {
        this.id = id;
        this.phoneNumber = phoneNumber;
    }

    public static PhoneDTO mapFromPhoneEntity(Phone phone) {
        return new PhoneDTO(phone.getId(), phone.getPhoneNumber());
    }

    public static List<PhoneDTO> mapFromPhonesEntities(List<Phone> phones) {
        return phones.stream().map((phone) -> mapFromPhoneEntity(phone)).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
