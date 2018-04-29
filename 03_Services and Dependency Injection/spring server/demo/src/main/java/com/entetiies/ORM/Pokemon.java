package com.entetiies.ORM;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "pokemons")
public class Pokemon
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eName;
    private Integer attack;
    private Integer defence;
    private Integer hp;
    private Integer speed;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String geteName()
    {
        return eName;
    }

    public void seteName(String eName)
    {
        this.eName = eName;
    }

    public Integer getAttack()
    {
        return attack;
    }

    public void setAttack(Integer attack)
    {
        this.attack = attack;
    }

    public Integer getDefence()
    {
        return defence;
    }

    public void setDefence(Integer defence)
    {
        this.defence = defence;
    }

    public Integer getHp()
    {
        return hp;
    }

    public void setHp(Integer hp)
    {
        this.hp = hp;
    }

    public Integer getSpeed()
    {
        return speed;
    }

    public void setSpeed(Integer speed)
    {
        this.speed = speed;
    }
}
