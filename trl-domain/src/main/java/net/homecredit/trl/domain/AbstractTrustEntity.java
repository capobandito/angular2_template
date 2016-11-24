package net.homecredit.trl.domain;

import net.homecredit.trl.enums.TrustListInsertionType;
import net.homecredit.trl.enums.TrustListRecordStatus;
import net.homecredit.trl.enums.TrustListRecordType;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author buchta
 */
@MappedSuperclass
public abstract class AbstractTrustEntity {

    @Column(name = "REC_VERSION")
    private Integer version;

    @Column(name = "CREATED_BY")
    private String createdBy;

    @Column(name = "CREATED_TS")
    private DateTime createdDate;

    @Column(name = "MODIFIED_BY")
    private String lastModifiedBy;

    @Column(name = "MODIFIED_TS")
    private DateTime lastModifiedDate;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "ID_TRUST_LIST")
    private TrustList trustList;

    @NotNull
    @Column(name = "STATUS")
    private TrustListRecordStatus status = TrustListRecordStatus.ACTIVE;

    @NotNull
    @Column(name = "TYPE")
    private TrustListRecordType recordType;

    @Column(name = "NOTE")
    private String note;

    @Column(name = "IMPORT_VERSION")
    private Long importVersion;

    @NotNull
    @Column(name = "VALID_FROM_DT")
    private LocalDate validFrom;

    @Column(name = "VALID_TO_DT")
    private LocalDate validTo;

    @Column(name = "INSERTION_TYPE")
    private TrustListInsertionType insertionType = TrustListInsertionType.MANUAL;

    public TrustListRecordStatus getStatus() {
        return status;
    }

    public void setStatus(TrustListRecordStatus status) {
        this.status = status;
    }

    public TrustListRecordType getRecordType() {
        return recordType;
    }

    public void setRecordType(TrustListRecordType recordType) {
        this.recordType = recordType;
    }

    public String getNote() {
        return note;
    }

    public void setNote(final String note) {
        this.note = note;
    }

    public Long getImportVersion() {
        return importVersion;
    }

    public void setImportVersion(final Long importVersion) {
        this.importVersion = importVersion;
    }

    public LocalDate getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(final LocalDate validFrom) {
        this.validFrom = validFrom;
    }

    public LocalDate getValidTo() {
        return validTo;
    }

    public void setValidTo(final LocalDate validTo) {
        this.validTo = validTo;
    }

    public TrustListInsertionType getInsertionType() {
        return insertionType;
    }

    public void setInsertionType(final TrustListInsertionType insertionType) {
        this.insertionType = insertionType;
    }

    public TrustList getTrustList() {
        return trustList;
    }

    public void setTrustList(TrustList trustList) {
        this.trustList = trustList;
    }

}
