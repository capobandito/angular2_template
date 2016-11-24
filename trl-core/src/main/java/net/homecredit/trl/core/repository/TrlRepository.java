package net.homecredit.trl.core.repository;

import net.homecredit.trl.domain.Phone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

//@Repository
//public interface TrlRepository extends CrudRepository<Phone, String> {
//}

@Repository
public class TrlRepository<T> {

    public List<Phone> findAll(){
        List<Phone> phones = new ArrayList<Phone>();
        Phone a = new Phone();
        a.setId(1l);
        a.setPhoneNumber("123-456-780");
        phones.add(a);
        Phone b = new Phone();
        b.setId(2l);
        b.setPhoneNumber("111-222-333");
        phones.add(b);
        return phones;
    }

}
