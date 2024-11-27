const gg = ({x,y,z}) => {
    x += 2;
    y += 4;
    z += 6;
    console.log(x,y,z);
};
const values = {x:2, y:2, z:2};
gg(values);