package net.homecredit.trl.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author kovar
 */
@Entity
@Table(name = "TRL_PHONE")
@SequenceGenerator(name = "phone_sequence_generator", sequenceName = "TRL_PHONE_SEQ", allocationSize = 1)
public class Phone extends AbstractTrustEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "phone_sequence_generator")
    private Long id;

    @NotNull
    private String phoneNumber;

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
