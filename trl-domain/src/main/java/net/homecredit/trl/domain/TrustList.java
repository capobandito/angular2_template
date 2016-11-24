package net.homecredit.trl.domain;

import net.homecredit.trl.enums.TrustListType;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlID;

/**
 * @author kovar
 */
@Entity
@Table(name = "TRL_TRUST_LIST")
@SequenceGenerator(name = "trust_list_sequence_generator", sequenceName = "TRL_TRUST_LIST_SEQ", allocationSize = 1)
public class TrustList {

    @Column(name = "REC_VERSION")
    private Integer version;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trust_list_sequence_generator")
    @XmlID
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "TYPE_CODE")
    private TrustListType type;

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TrustListType getType() {
        return type;
    }

    public void setType(TrustListType type) {
        this.type = type;
    }
}
