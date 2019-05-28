export const getListStory = async ()=>{
    const data = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const result = await data.json();
    return result;
}

export const getDetailStory = async (id) =>{
    var changeUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    const data = await fetch(changeUrl);
    const result = await data.json();
    return result;
}