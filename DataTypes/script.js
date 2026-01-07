// Primitive => directly copy hunxa
//numbers, string, null, undefined, symbol, bigint, boolean 

// numbers
// let num1=12;
// let num2=num1;
// num2=num2+5;

// string ``.'',""
// let name='john';

// Boolean
// True or false;

// null
// let user=null;

// undefined
// let a;

// Bigint
// let a=9007199254740991n;

// symbol
// let a=Symbol("hello");
// let b=Symbol("hello");

// let obj={
//     id:12,
//     name:'john'
// };
// let u1=Symbol("id");
// obj[u1]=1;

// Dynamic
// let a=45;
// a="apple";
// a=true;
// a=null;
// a=undefined;


// let name="john"    bad practice name should contain a name
// name=true 


// type coercion: datatype automatically change hunxa

// falsy:false, 0, null, undefined, " ", document.all 
if(1){
    // code
}

// ------------------------------------------------------------------------ //
// reference => diorectly copy garna hudaina (),{},[]
// array,object, function

// let arr1=[1,2,3,4];
// arr2=arr1;
// arr2.pop();
// changes bith arr2 and arr1