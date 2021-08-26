const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a)
console.log(b)

export default function sample() {
    return (
        <div>
            <div>
                a의 값은 : {a}
            </div>
            <div>
                b의 값은 : {b}
            </div>
        </div>
    );
}