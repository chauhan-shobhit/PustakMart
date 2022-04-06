package com.pustakmart.authAndCartAndCheckout.service;

import com.pustakmart.authAndCartAndCheckout.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.pustakmart.authAndCartAndCheckout.dao.AuthRepository;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private AuthRepository authRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDetails loginUser(String email, String password) {

        if (passwordEncoder.matches(password,
                loadUserByUsername(email).getPassword())) {

            return loadUserByUsername(email);

        }
        System.out.println("abcd password " + password + " db name " +
                loadUserByUsername(email).getPassword());
        return null;

    }

    public User registerUser(User user) {
        System.out.println("Register User Service");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        authRepository.save(user);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return authRepository.findUserByEmail(username);

    }

}
