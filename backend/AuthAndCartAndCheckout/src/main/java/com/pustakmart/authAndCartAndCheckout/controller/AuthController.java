package com.pustakmart.authAndCartAndCheckout.controller;

import com.pustakmart.authAndCartAndCheckout.model.AuthRequest;
import com.pustakmart.authAndCartAndCheckout.model.AuthResponse;
import com.pustakmart.authAndCartAndCheckout.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pustakmart.authAndCartAndCheckout.service.AuthService;
import com.pustakmart.authAndCartAndCheckout.util.JwtUtil;

@RestController
@RequestMapping("api/users")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody AuthRequest authRequest) throws Exception {

        // return new ResponseEntity<>(authService.loginUser(authRequest.getEmail(),
        // authRequest.getPassword()),
        // HttpStatus.OK);

        authService.loginUser(authRequest.getEmail(), authRequest.getPassword());

        final UserDetails userDetails = authService.loadUserByUsername(authRequest.getEmail());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthResponse(jwt));

    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {

        return new ResponseEntity<>(authService.registerUser(user),
                HttpStatus.OK);

    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello.....";
    }

}
