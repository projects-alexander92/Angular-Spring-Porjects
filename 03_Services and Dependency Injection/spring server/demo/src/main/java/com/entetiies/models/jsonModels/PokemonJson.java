package com.entetiies.models.jsonModels;

import com.google.gson.annotations.SerializedName;

public class PokemonJson
{
    @SerializedName("base")
    private BaseJson baseJson;
    @SerializedName("ename")
    private String eName;

    public BaseJson getBaseJson()
    {
        return baseJson;
    }

    public void setBaseJson(BaseJson baseJson)
    {
        this.baseJson = baseJson;
    }

    public String geteName()
    {
        return eName;
    }

    public void seteName(String eName)
    {
        this.eName = eName;
    }
}
