// =================================================================
//? obtener datos de dos estructuras y ordenarlos en descending
// =================================================================
const paddockType = [
	{ id: 1, name: "paltos" },
	{ id: 2, name: "avellanos" },
	{ id: 3, name: "cerezas" },
	{ id: 4, name: "nogañes" },
];

const paddocks = [
	{
		paddocManagerId: 6,
		farmId: 1,
		paddockTypeId: 1,
		harvestYear: 2019,
		area: 1200,
	},
	{
		paddocManagerId: 1,
		farmId: 3,
		paddockTypeId: 4,
		harvestYear: 2019,
		area: 500,
	},
	{
		paddocManagerId: 5,
		farmId: 3,
		paddockTypeId: 2,
		harvestYear: 2019,
		area: 2000,
	},
	{
		paddocManagerId: 2,
		farmId: 2,
		paddockTypeId: 3,
		harvestYear: 2021,
		area: 8401,
	},
	{
		paddocManagerId: 2,
		farmId: 2,
		paddockTypeId: 3,
		harvestYear: 2021,
		area: 8401,
	},
];

const areaOfPaddocks = {};
// recorrer los paddocks para hacer la suma
paddocks.forEach((paddock) => {
	// recuperar los paddockTypeId y area de los paddocks(destructuration)
	const { paddockTypeId, area } = paddock;
	// nullish coalescing operator(??) devuelve el valor de la derecha si el valor de la izquierda es nulo o indefinido
	areaOfPaddocks[paddockTypeId] = areaOfPaddocks[paddockTypeId] ?? 0; //? si no existe el paddockTypeId, lo crea con valor 0
	// o támbien podemos usar logical asignment operator(??=) forma corta, no hace la asignación si no es necesario
	// areaOfPaddocks[paddockTypeId] ??= 0

	// sumar el area de todos los paddocks segun el paddockType {1: 1200, 2: 2000, 3: 8401}
	areaOfPaddocks[paddockTypeId] += area;
});
// agregar una propiedad a cada elemento del paddockType con la suma total de area
const result = paddockType.map((p) => ({
	...p,
	totolSum: areaOfPaddocks[p.id],
}));
//? respuesta ordenada en descending
const resultDescent = paddockType
	.map((p) => ({
		...p,
		totolSum: areaOfPaddocks[p.id],
	}))
	.sort((a, b) => b.totolSum - a.totolSum);

//? respuesta ordenada en descending PERO solo los nombres de cada productos
const result2 = paddockType
	.map((p) => ({
		...p,
		totolSum: areaOfPaddocks[p.id],
	}))
	.sort((a, b) => b.totolSum - a.totolSum)
	.map((p) => p.name);

areaOfPaddocks;
paddockType;
result;
result2;

// ========================================================================
// write a function that logs the 5 cities that occur the most in the array
// below in order from the most number of occurrences to least
// ========================================================================

const citiesList = [
	"nashville",
	"nashville",
	"los angeles",
	"nashville",
	"memphis",
	"barcelona",
	"los angeles",
	"sevilla",
	"madrid",
	"canary islands",
	"barcelona",
	"madrid",
	"barcelona",
	"nashville",
	"london",
	"berlin",
	"madrid",
	"nashville",
	"london",
	"madrid",
];

function logMostOcurrCities(cityCount) {
	const cities = {};

	citiesList.forEach((el) => {
		cities[el] = !cities[el] ? 1 : (cities[el] += 1);
	});

	//? cities y cantidad de cities
	// return cities
	//? only cities en un array
	// return Object.keys(cities)
	//? asigned cities to name
	// return Object.keys(cities).map((city) => ({ nombre: city }));
	//? cities tienes los name y lo usamos como parametro para buscar cantida de cada city en el citiesList
	// return Object.keys(cities).map((city) => ({ count: cities[city] }));
	//? return final
	return Object.keys(cities)
		.map((city) => ({ name: city, cityCount: cities[city] }))
		.sort((a, b) => b.cityCount - a.cityCount)
		.splice(0, cityCount) //hace el corte hasta el parametro ingresado
		.map((city) => city.name);
}
console.log(logMostOcurrCities(5));
