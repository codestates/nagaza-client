export function getCategories() {
    return ['구기운동', '하이킹', '클라이밍', '웨이트', '아쿠아스포츠', '러닝', '요가', '사이클링', '기타', 'US'];
}
//
export function getData() {
    // create some random data
    let categories = getCategories(), data = [];
    //
    for (let i = 0; i < countries.length; i++) {
        data.push({
            categories: countries[i],
            gender: ["남성", "여성"],
            sales: Math.random() * 100000,
            expenses: Math.random() * 50000
        });
    }
    //
    return data;
}