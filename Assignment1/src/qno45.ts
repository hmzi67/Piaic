interface Car_Info {
    manufacture:string,
    model:string,
    [key:string]: any;      //allows any additional properties
}

function createCar(manufacture:string, model:string, ...options: [string, any][]): Car_Info{
    const car_dict: Car_Info = {
        manufacture,
        model,
    };
    options.forEach(([key,value]) =>{
        car_dict[key] = value;
    });

    return car_dict;
}

const carInfo: Car_Info = createCar("Toyota", "GLI", ['color','black'], ['optional feature', 'Automatic'])
//Car Information
console.log("Car Info")
console.log(carInfo)