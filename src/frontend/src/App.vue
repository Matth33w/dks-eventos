<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

  body {
    background-color: #222222;
  }

  h1, h2, h3, h4, h5, h6, a, input, p, label {
    font-family: 'Raleway';
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  a {
    color: #f16122;
    transition: 200ms;
  }

  a:hover {
    opacity: 0.5;
  }

  .text-input {
    margin: 12px 0;
  }

  .text-input label {
    color: white;
  }

  .text-input input {
    width: 100%;
    border-radius: 8px;
    font-size: 16px;
    padding: 12px;
    margin-top: 6px;
    border: 2px solid #f16122;
    transition: 200ms;
  }

  .text-input input:focus {
    box-shadow: #f16122 4px 4px;
  }

  .check-input {
    display: flex;
    align-items: center;
  }

  .check-input label {
    color: white;
    margin: 8px 0;
  }

  .check-input .check-wrapper {
    width: 20px;
    height: 20px;
    margin-left: 6px;
    border-radius: 6px;
    position: relative;
    background-color: white;
    border: 1px solid #f16122;
    border-radius: 6px;
  }

  .check-input .check-wrapper input {
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  .check-input .check-wrapper input ~ img {
    width: 0%;
    height: 0%;
    position: absolute;
    pointer-events: none;
    transition: 200ms;
  }

  .check-input .check-wrapper input:checked ~ img {
    display: inline;
    width: 100%;
    height: 100%;
  }

  .button-1 {
    padding: 8px 32px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #f16122;
    color: white;
    margin: 8px 0;
    transition: 200ms;
  }

  .button-1:hover {
    background-color: white;
    color: #f16122;
  }
</style>
