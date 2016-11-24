package net.homecredit.trl.enums;

/**
 * Created by jan.kovar on 24.2.2015.
 */
public enum TrustListRecordType implements Enumerable<String, String> {

    B("B", "Black-listed"), W("W", "White-listed"), R("R", "Gray-listed"), S("S", "Silver-listed");

    private String code;
    private String description;

    TrustListRecordType(String code, String description) {
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
