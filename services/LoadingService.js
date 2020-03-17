/*
* Remember
hide() method is only available on the instance returned by show() method.
You can use $loading anywhere in your app like Vue.$loading
* */
import Vue from 'vue'

export const loader = Vue.$loading.show()
