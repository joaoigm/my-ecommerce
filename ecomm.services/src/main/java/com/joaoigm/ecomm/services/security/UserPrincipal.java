package com.joaoigm.ecomm.services.security;

import com.joaoigm.ecomm.services.models.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Map;

public class UserPrincipal implements UserDetails {
    private Long id;
    private String email;
    private String password;

    public UserPrincipal(Long id, String email, String password){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public static UserPrincipal create(User user){
        return new UserPrincipal(user.getId(), user.getEmail(), user.getEncodedPassword());
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

}
