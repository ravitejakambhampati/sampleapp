import React,{ useState } from "react";

export default function useLocalStorage(name) {
 let [value, setValue] = useState(name);

 return[value, setValue];
}