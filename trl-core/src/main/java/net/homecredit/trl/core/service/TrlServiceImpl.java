package net.homecredit.trl.core.service;

import net.homecredit.trl.core.repository.TrlRepository;
import net.homecredit.trl.domain.Phone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Marek.Hlavacek on 5/14/2016.
 */
@Service("trlService")
public class TrlServiceImpl implements TrlService {

    @Autowired
    TrlRepository trlRepository;

    @Transactional(readOnly = true)
    public List<Phone> findAll() {
        Iterable iterable = trlRepository.findAll();
        List list = new ArrayList<Phone>();
        iterable.forEach(list::add);
        return list;
    }
}
