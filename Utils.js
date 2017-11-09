import React, { Component } from 'react';
import {
    Dimensions,
} from 'react-native';

const ScreenWidth=Dimensions.get('window').width;
const uiwidth=750;  //UI设计宽度750*1344
class Utils
{
    constructor()
    {
    }
   pxTodp(px)
   {
       return px*ScreenWidth/uiwidth;
   }
}

export default new Utils();