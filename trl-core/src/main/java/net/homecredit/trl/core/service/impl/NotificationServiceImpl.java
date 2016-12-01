package net.homecredit.trl.core.service.impl;

import net.homecredit.trl.core.repository.NotificationRepository;
import net.homecredit.trl.core.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pavel.zupka on 29.11.2016.
 */
@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository repository;

    @Override
    public int newNotificationsCount() {
        return repository.getNewNotificationsCount();
    }

}
