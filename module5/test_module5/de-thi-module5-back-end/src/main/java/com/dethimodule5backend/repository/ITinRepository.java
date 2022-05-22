package com.dethimodule5backend.repository;

import com.dethimodule5backend.model.Tin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITinRepository extends JpaRepository<Tin, Integer> {
}
