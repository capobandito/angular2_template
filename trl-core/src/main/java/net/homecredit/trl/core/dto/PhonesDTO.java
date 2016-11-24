package net.homecredit.trl.core.dto;

import java.util.List;

/**
 *
 * JSON serializable DTO containing data concerning a phone search request.
 *
 */
public class PhonesDTO {

    private List<PhoneDTO> phones;

    public PhonesDTO(List<PhoneDTO> phones) {
        this.phones = phones;
    }

    public List<PhoneDTO> getPhones() {
        return phones;
    }

    public void setPhones(List<PhoneDTO> phones) {
        this.phones = phones;
    }
}
