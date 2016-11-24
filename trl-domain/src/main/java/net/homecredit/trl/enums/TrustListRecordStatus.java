package net.homecredit.trl.enums;

/**
 * Created by jan.kovar on 24.2.2015.
 */
public enum TrustListRecordStatus implements Enumerable<String, String> {

    ACTIVE("ACTIVE", "Active state"), ARCHIVED("ARCHIVED", "Archived state");

    private String code;
    private String description;

    TrustListRecordStatus(String code, String description) {
        this.code = code;
        this.description = description;
    }

    public String getCode() {
        return code;
    }

    public String getValue() {
        return description;
    }

}
