#    2.0 React Hooks:

👍[Github Code: ](https://github.com/bappasahabapi/react-core-concept/tree/2.0-react-useState-hook)

📚[Article To Read Link](https://hygraph.com/blog/usestate-react)
⭐ [Simple CRUD Using useState Hook](https://dev.to/bappasahabapi/simple-crud-using-react-usestate-hook-1ceo)


- React hooks are  introduced in 2019 in react version 16.8_+
- Hooks can not be used inside class component.

**What hooks solved?**

- State 
- Life Cycle Method
- Duplicate Code
- Sharing Same Logic

**Hook Rules**

- Hook is used in top level.

##  useState hook


```javascript
const [todo,setTodo]=useState()
```

- এখানে, প্রথম ইনডেক্সে থাকবে `ভেরিয়েবল` (todo) এবং দ্বিতীয় ইনডেক্সে থাকবে `ফাংশন` (setTodo)

- This hook return an array.

আমরা একটি অ্যারে থেকে মান গুলি নিতে চাইব, এবং `আমাদের অ্যারে ডিস্ট্রাকচারিং` করতে হবে  that is  অবজেক্ট ডিস্ট্রাকচারিং করার মত।

**অবজেক্ট ডিস্ট্রাকচারিং:**

```javascript

 const  state={
        todo:' ',
        warning:null
    }
 const {todo,warning}=state
```

**Array ডিস্ট্রাকচারিং:**
```javascript
const array=[‘bappa’,’appa’,’totot’];
const [a,b,c]=array; // a=’bappa’ consol log 

```
---- 


### ✅ Example:1 where useState take object as argument

```javascript
  const [todo, setTodo] = useState({
    title: " ",
    description: " ",
  });
```


**Solution code is**

```javascript
import React from "react";
import { useState } from "react";

export default function Example1Todo() {
  const [todo, setTodo] = useState({
    title: " ",
    description: " ",
  });

//   const handleChangeInput = (e) => {};

  const { title, description } = todo;
  return (
    <div>
      <hr />
      <h4>Example1 too</h4>
      <p style={{ backgroundColor: "yellow" }}>Title:{title}</p>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <br />
      <br />
      <textarea
        placeholder="enter your text"
        name="text"
        value={description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <hr />
    </div>
  );
}

```

**Refactor of the code is**

```javascript
import React, { useState } from "react";

export default function Example1Todo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value, // this will dynamically update value
    });
  };

  const { title, description } = todo;

  return (
    <div>
      <hr />
      <h4>Example1 Todo</h4>
      <p style={{ backgroundColor: "yellow" }}>Title: {title}</p>
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter your text"
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <hr />
    </div>
  );
}

```

### Example:2 where useState take previous value as  argument

```javascript
  const [todo, setTodo] = useState(0);
```
**This is not the good practice**
```javascript
import React, { useState } from 'react'

function Counter() {

    const [count, setCount]=useState(0)
    return (
        <div>
            {count}
            <p>
                <button
                
                type='button'
                onClick={()=>setCount(count+1)}
                >
                    Add 1
                </button>
            </p>
        </div>
    )
}

export default Counter
```

**This is the good practice**
```javascript
<button
                
    type='button'
    onClick={()=>setCount((prevState)=>prevState+1)}
    >
    Add 1
    </button>

// good practice

    // let j =0;
    // const addTen=()=>{
    //     while(j<10){
    //         setCount(
    //             (prevState)=>prevState+1
    //         );
    //         j++;
    //     }
    // }
```
