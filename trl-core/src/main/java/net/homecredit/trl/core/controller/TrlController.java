package net.homecredit.trl.core.controller;

import net.homecredit.trl.core.dto.PhoneDTO;
import java.security.Principal;
import java.sql.Time;
import java.util.List;

import net.homecredit.trl.core.dto.PhonesDTO;
import net.homecredit.trl.core.service.TrlService;
import net.homecredit.trl.domain.Phone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 *
 *  REST service for meals - allows to update, create and search for meals for the currently logged in user.
 *
 */
@Controller
@RequestMapping("phone")
public class TrlController {

    @Autowired
    private TrlService trlService;

    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET)
    public PhonesDTO search(Principal principal) {

        List<Phone> result = trlService.findAll();

        return new PhonesDTO(PhoneDTO.mapFromPhonesEntities(result));
    }

}