package com.entetiies.models.jsonModels;

import com.google.gson.annotations.SerializedName;

public class BaseJson
{
    @SerializedName("Attack")
    private int attack;
    @SerializedName("Defense")
    private int defence;
    @SerializedName("HP")
    private int hp;
    @SerializedName("Speed")
    private int speed;

    public int getAttack()
    {
        return attack;
    }

    public void setAttack(int attack)
    {
        this.attack = attack;
    }

    public int getDefence()
    {
        return defence;
    }

    public void setDefence(int defence)
    {
        this.defence = defence;
    }

    public int getHp()
    {
        return hp;
    }

    public void setHp(int hp)
    {
        this.hp = hp;
    }

    public int getSpeed()
    {
        return speed;
    }

    public void setSpeed(int speed)
    {
        this.speed = speed;
    }
}
