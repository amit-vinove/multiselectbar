# React Multiselect Dropdown Bar

## Description

A React component which provides multi select functionality with various features like Easy customization, search option, Avatar icon with Dynamic colors , Responsive Design and Lightweight library.

## 🏳️‍🌈 Getting Started

## 1. Installation 🔧

```
npm install multiselectbar

```

---

## 2. Basic Usage 📑

```js
import MultiSelectBar from "multiselectbar";

const optionsDB = [
  { name: "Amit Kumar", isSelected: false },
  { name: "Arun Sharma", isSelected: false },
  { name: "Vikas Kumar", isSelected: false },
  { name: "Manoj Singh", isSelected: false },
  { name: "Pradeep Verma", isSelected: false },
  { name: "Sarthak Sharma", isSelected: false },
];

const colorsDB = ["#0d46b7", "#d9004c", "#013220", "#ffc40c", "#008b8b"];

<MultiSelectBar
  options={optionsDB} // Passing Options in the props to display in the dropdown
  colors={colorsDB} // Passing Colors in the props to display in dropdown Avatar
  borderColor="#0d46b7"
  tagColor="#dbd8d8"
  tagTextColor="black"
  tagHoverColor="#3ba2ff"
  tagHoverTextColor="white"
  tagTextSize="20px"
  tagCrossSize="18px"
  placeholder="Search here..."
  placeholderSize="18px"
  listTextSize="21px"
  listHoverColor="#147fdc"
  dropdownHeight="280px"
  dropdownMarginTop="1px"
  inputCrossSize="18px"
  inputDropSize="23px"
/>;
```

---

## 3. Props 💬

| Prop                | Type     | Default          | Description                                                                                                                                                       |
| :------------------ | :------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`           | `array`  | `[]`             | Dropdown options                                                                                                                                                  |
| `colors`            | `array`  | `[]`             | Avatar Icons Colors                                                                                                                                               |
| `borderColor`       | `string` | `#0d46b7`        | CSS color Code to change the border color of the dropdown by default it is '#0d46b7'                                                                              |
| `borderColor`       | `string` | `#0d46b7`        | CSS color Code to change the border color of the dropdown by default it is '#0d46b7'                                                                              |
| `tagColor`          | `string` | `#dbd8d8`        | CSS color Code to change the background color of the selected options knowns as tag in the input bar. By default it is '#dbd8d8'                                  |
| `tagTextColor`      | `string` | `#black`         | CSS color Code to change the background color of the selected options Text known as tag Text in the input bar. By default it is '#black'                          |
| `tagHoverColor`     | `string` | `#3ba2ff`        | CSS color Code to change the background color of the selected options Tags on Hover known as tag Hover Color in the input bar. By default it is '#3ba2ff'         |
| `tagHoverTextColor` | `string` | `white`          | CSS color Code to change the background color of the selected options Tags Name on Hover known as tag Hover Text Color in the input bar. By default it is 'white' |
| `tagTextSize`       | `string` | `20px`           | CSS Props to change the text size of the selected options Tags Name known as tag Text Size in the input bar. By default it is '20px'                              |
| `tagCrossSize`      | `string` | `18px`           | CSS Props to change the cross icons size of the selected options Tags known as tag Cross Size in the input bar. By default it is '18px'                           |
| `placeholder`       | `string` | `Search here...` | Props to change the placeholder text in the input bar. By default it is 'Search here...'                                                                          |
| `placeholderSize`   | `string` | `18px`           | Props to change the placeholder text size in the input bar. By default it is '18px'                                                                               |
| `listTextSize`      | `string` | `21px`           | Props to change the text size of the options visible in the dropdown bar. By default it is '21px'                                                                 |
| `listHoverColor`    | `string` | `#147fdc`        | CSS Props to change the color of the text visible in the dropdown bar. By default it is '#147fdc'                                                                 |
| `dropdownHeight`    | `string` | `280px`          | Props to change the height of the dropdown bar. By default it is '280px'                                                                                          |
| `dropdownMarginTop` | `string` | `1px`            | Props to change the increase the height between the dropdown bar and input bar. By default it is '1px'                                                            |
| `inputCrossSize`    | `string` | `18px`           | Props to change the size of the cross button visible in the input bar . By default it is '18px'                                                                   |
| `inputDropSize`     | `string` | `23px`           | Props to change the size of the dropdown button visible in the input bar . By default it is '23px'                                                                |

---
