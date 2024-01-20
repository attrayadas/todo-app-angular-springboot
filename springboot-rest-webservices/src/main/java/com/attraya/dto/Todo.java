package com.attraya.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private Integer id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return Objects.equals(id, todo.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
