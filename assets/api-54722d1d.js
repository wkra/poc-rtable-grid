const t="https://dummyjson.com/products?",c=async(a=1,o=10,s="")=>{const n=s?`&${s}`:"";return await(await fetch(`${t}limit=${o}&skip=${a}${n}`)).json()},i={fetchData:c,baseUrl:t};export{i as a};
