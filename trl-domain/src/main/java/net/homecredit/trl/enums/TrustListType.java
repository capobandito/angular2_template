package net.homecredit.trl.enums;

/**
 * Created by jan.kovar on 24.2.2015.
 */
public enum TrustListType {

    PERSON, DOCUMENT, EMAIL, PHONE, COMPANY, ZIP, ADDRESS, AREA, TERRORIST, TERRORIST_COMPANY, CONTACT;

    public static TrustListType forName(final String entityName) {
        return TrustListType.valueOf(entityName.toUpperCase());
    }
}
