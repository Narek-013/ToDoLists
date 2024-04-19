 const UseRequest = () => {

  
   const postItem = async (url, newItem) => {
     const result = await fetch(`${url}`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(newItem),
     });
     return result.json();
   };

   const getItems = async (url) => {
     const result = await fetch(url);
     const res = await result.json();
     return res;
   };

   const delItem = async (url, id) => {
     const result = await fetch(`${url}${id}`, {
       method: "DELETE",
     });
     return result;
   };

   const changeChecked = async (url, el) => {
     const chagne = await fetch(`${url}/${el.id}`, {
       method: "PATCH",
       body: JSON.stringify({ isCompleted: !el.isCompleted }),
     });
     return chagne;
   };

    const changeText = async (url, el,ev) => {
      const chagne = await fetch(`${url}/${el.id}`, {
        method: "PATCH",
        body: JSON.stringify({ text: ev }),
      });
      return chagne;
    };
  
  const delCompItem = async (url, completed,i) => {
    const del = await fetch(`${url}/${completed[i].id}`, {
      method: "DELETE",
    });
    let delItem = await del.json()
    return delItem;
  };  


   return {
     postItem,
     getItems,
     delItem,
     changeChecked,
     changeText,
     delCompItem,
   };
 };

export default UseRequest;