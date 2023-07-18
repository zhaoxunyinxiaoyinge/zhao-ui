 const isAarray=(arr:string|number[]):boolean=>{
    return Array.isArray(arr);
}

 const isNumber=(val:number |string):boolean=>{
    return typeof val==="number";
}

 const isObject=(val:any)=>{
    return typeof val==='object';
}

export  {
    isAarray,
    isNumber,
    isObject
}