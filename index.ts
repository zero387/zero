
//bai1

/* type countyr = "VN" | "US" | "UK" 

function getShippingCost(countyr:string):number {
    switch (countyr) {
        case "VN":
            return 100000;
        case "US":
            return 200000;
        case "UK":
            return 300000;    

        default:
            throw new Error("Invalid country");
    }
}
function addbai1(): void {
    let countyr  = document.getElementById("bai1") as HTMLInputElement
    if (countyr.value === "VN" || countyr.value === "US" || countyr.value === "UK")  {
        let result = getShippingCost(countyr.value)
        console.log("gia van chuyen la", result);
    }else {
        console.log(console.log("Invalid country"););
    }
}

 */

//bai 2

/* let myTuple:[number, string, boolean] = [
    1,
    "hello",
    true
]

let [num,str,bool] = myTuple
console.log(num,str,bool); */

//bai3

/* type myAlias = string | number | {name: string , age: number}
let username:myAlias = "hoanguser"
let age:myAlias = 56
let user:myAlias = {
    name: "hoang",
    age: 56
}  */

//bai 4
/* 
function checkSuc():void {
    let data1 = document.getElementById("success") as HTMLInputElement
    let data2:string = data1.value;
    if (data2 === "success") {
        return console.log(true);

    } else {
        return console.log(false);
    }
} */

//bai 5
/* let myTuple:[string, number] = ['hoanguser',56] */

//bai 6

/* type Coordinates = [number, number];
let locations: Coordinates = [21.028511, 105.804817]; // Latitude và Longitude của Hà Nội
 */

//bai 7 
//định nghĩa type alias
/* type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

//literal type 
let method : HTTPMethod;

method = "GET";
console.log(method);
method = "POST"
console.log(method);
method = "PUT"
console.log(method);
method = "DELETE"
console.log(method); */

// bai 8

/* let a:[string,number,number]
a =["a",2,2000]
function gia(a:[string,number,number]):number {
    return a[1]*a[2]
}
gia(a) */

// bai 9 
/* type ResponseStatus = {
    status: 'success' | 'error',
    message: string
} */

//bai 10
/* let a:[string,number,number]
a =["hoa",13,2000] */

//bai 11
/* type RGB=[number,number,number]
let cor:RGB =[0,0,0] */

//bai 12
/* type typeA=[number,string,number]

function mota(a:typeA):string {
    const [a1,b1,c1]=a
    return `${a1},${b1},${c1}`
}

let a2:typeA = [123456, "2024-05-15", 2500.75];
mota(a2) */

///////////////
//bai 1 
/* type unionType = "number" | "boolean" | "string" | "null" | "undefined";

function parseInput(q: unionType): any {
    switch (q) {
        case "number":
            return 0; // Ví dụ trả về giá trị số
        case "boolean":
            return true; // Ví dụ trả về giá trị boolean
        case "string":
            return "example"; // Ví dụ trả về giá trị chuỗi
        case "null":
            return null; // Trả về null
        case "undefined":
            return undefined; // Trả về undefined
        default:
            throw new Error("Invalid input type");
    }
} */

//bai 2
/* type Person = {
    name: string;
    age: number;
    address: string;
};

function validatePerson(obj: any): obj is Person {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj.address === 'string'
    );
}


const validPerson = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
};

const invalidPerson = {
    name: "Jane Doe",
    age: "30", 
    address: "123 Main St"
};

console.log(validatePerson(validPerson)); 
console.log(validatePerson(invalidPerson)); 
 */