// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function calculates the volume of a sphere
 */
"use strict"

function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius").value)

  // process
  const volume = 4/3 * Math.PI * radius**3

  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³"
}
