package net.homecredit.trl.core.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({
        "net.homecredit.trl.core.repository",
        "net.homecredit.trl.core.service",
        "net.homecredit.trl.core.controller"})
public class CoreConfig{
}
