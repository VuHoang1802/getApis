export const getListStory = async (url)=>{
    const data = await fetch(url);
    const result = await data.json();
    return result;
}

//'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'

export const getListPart = async ()=>{
    const data = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const result = await data.json();
    return result;
}

export const getDetailStory = async (listID) =>{
    let listNewDetail = [];
    for (const id of listID) {
        var changeUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
        const data = await fetch(changeUrl);
        const result = await data.json();
        listNewDetail.push(result)
    }
    return listNewDetail;
}