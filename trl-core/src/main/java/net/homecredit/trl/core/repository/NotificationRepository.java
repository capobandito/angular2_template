package net.homecredit.trl.core.repository;

import org.springframework.stereotype.Repository;

import java.util.concurrent.ThreadLocalRandom;

/**
 * Created by pavel.zupka on 29.11.2016.
 */
@Repository
public class NotificationRepository {

    public int getNewNotificationsCount() {
        return ThreadLocalRandom.current().nextInt(0, 100);
    }

}
