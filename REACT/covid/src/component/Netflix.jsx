var a = 10;
const Netflix = () => {
    return(
    <>
        <h1>My favorite netflix series</h1>
        <ol>
            <li>DARK</li>
            <li>THE 100</li>
            <li>PATALLOK</li>
            <li>RANKGROK</li>
            <li>{a}</li>
            <li>{test()}</li>
        </ol>
    </>
    )

}
function test() {
    return 'abc';
}

const check = 'Hello';

 
export {Netflix,test,check};