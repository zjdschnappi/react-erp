const datas = [];
for(let i =0; i<100; i++){
    datas.push(
        {
            key:i,
            id: i,
            userName: `admin${i}`,
            cell:  `${i+200}`,
            qq: `${i+100}`,
            account: `${i*100}`,
            time: Mock.Random.date('yyyy-MM-dd'),
            belong: `admin${i}`,
            memo: `hello${i}`,
            status: i

        }
    )
}
export default datas;
