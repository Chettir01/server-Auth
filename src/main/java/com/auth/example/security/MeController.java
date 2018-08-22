package com.auth.example.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("api/me")
public class MeController {
    @GetMapping(produces = "application/json")
    public String getMe(TokenAuthentication token)
    {
        if (token != null)
            return token.asJson();
        else
            return "{}";
    }
}
