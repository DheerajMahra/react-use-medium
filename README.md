# react-use-medium

A React hook to fetch your Medium stories in a json format 📝

![react-use-medium logo](https://raw.githubusercontent.com/DheerajMahra/image-hosting/main/medium.png?token=AJPOPU3DGMSN7NVTWVJQ55DA5H5LK)

![Npm](https://img.shields.io/npm/v/react-use-medium?logo=npm&style=flat-square)
![GitHub](https://img.shields.io/github/license/DheerajMahra/react-use-medium?color=yellow&logo=github&style=flat-square)
![Npm](https://img.shields.io/npm/dm/react-use-medium?style=flat-square)

## Install

```
npm install react-use-medium
```

## Import

```js
import { useMedium } from "react-use-medium";
```

## Usage

```js
const { data, isFetched } = useMedium("<your-medium-username>");
```

| _Returns_            | _Description_                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `data` : _obj_       | an object having user's information and stories; `{}` if username not found                              |
| `isFetched` : _bool_ | `true` if username is a valid Medium username and data has been fetched; `false` for all other scenarios |

## Example

```js
import React from "react";
import { useMedium } from "react-use-medium";

export default function Blogs() {

  const { data, isFetched } = useMedium("dheerajmahra");
  return isFetched ? <BlogList data={data}> : null;

}
```

## License

**MIT &copy; [Dheeraj Mahra](https://github.com/dheerajmahra/react-use-medium/blob/master/LICENSE)**
