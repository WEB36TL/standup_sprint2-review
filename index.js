// ? Split this string and return the splitted stuff

let splitThis =
	"Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances. Thomas Jefferson 1743 - 1826"

function splitString(str) {
	let test = str.split(" ")
	return test
}
const splitted = splitString(splitThis)
// console.log(splitted)

// ? How old was Thomas Jefferson

function tjAge(arr) {
	const died = arr[arr.length - 1]
	const born = arr[arr.length - 3]
	return died - born
}

// console.log(tjAge(splitted))

/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */

const artists = [
	{
		id: 0,
		name: "Amedeo Modigliani",
		years: "1884 - 1920",
		genre: "Expressionism",
		nationality: "Italian",
		bio:
			"Amedeo Clemente Modigliani (Italian pronunciation: [ameˈdɛːo modiʎˈʎaːni]; 12 July 1884 – 24 January 1920) was an Italian Jewish painter and sculptor who worked mainly in France. He is known for portraits and nudes in a modern style characterized by elongation of faces, necks, and figures that were not received well during his lifetime but later found acceptance. Modigliani spent his youth in Italy, where he studied the art of antiquity and the Renaissance. In 1906 he moved to Paris, where he came into contact with such artists as Pablo Picasso and Constantin Brâncuși. By 1912 Modigliani was exhibiting highly stylized sculptures with Cubists of the Section d'Or group at the Salon d'Automne.",
		wikipedia: "http://en.wikipedia.org/wiki/Amedeo_Modigliani",
		paintings: 193
	},
	{
		id: 1,
		name: "Vasiliy Kandinskiy",
		years: "1866 - 1944",
		genre: "Expressionism,Abstractionism",
		nationality: "Russian",
		bio:
			"Wassily Wassilyevich Kandinsky (Russian: Васи́лий Васи́льевич Канди́нский, tr. Vasíliy Vasílʹevich Kandínskiy) (16 December [O.S. 4 December] 1866 – 13 December 1944) was a Russian painter and art theorist.",
		wikipedia: "http://en.wikipedia.org/wiki/Wassily_Kandinsky",
		paintings: 288
	},
	{
		id: 2,
		name: "ZDiego Rivera",
		years: "1886 - 1957",
		genre: "Social Realism,Muralism",
		nationality: "Mexican",
		bio:
			"Diego María de la Concepción Juan Nepomuceno Estanislao de la Rivera y Barrientos Acosta y Rodríguez, known as Diego Rivera (Spanish pronunciation: [ˈdjeɣo riˈβeɾa]; December 8, 1886 – November 24, 1957) was a prominent Mexican painter. His large frescoes helped establish the Mexican mural movement in Mexican art. Between 1922 and 1953, Rivera painted murals in, among other places, Mexico City, Chapingo, Cuernavaca, San Francisco, Detroit, and New York City. In 1931, a retrospective exhibition of his works was held at the Museum of Modern Art in New York. Rivera had a volatile marriage with fellow Mexican artist Frida Kahlo.",
		wikipedia: "http://en.wikipedia.org/wiki/Diego_Rivera",
		paintings: 70
	}
]

// ? Return the name of the artist with most painting
function mostPainting(arr) {
	let artistName = ""
	arr = arr.sort((a, b) => {
		return b.paintings - a.paintings
	})
	return arr
}

// console.log(mostPainting(artists))

// ? Return artist from youngest to oldest
function sortAge(arr) {
	let age = arr
		.map((item) => {
			// return `${item.name}: ${item.years.split(" - ")[1] - item.years.split(" - ")[0]}`
			return {
				name: item.name,
				age: item.years.split(" - ")[1] - item.years.split(" - ")[0]
			}
		})
		.sort((a, b) => a.age - b.age)

	return age
}

// console.log(sortAge(artists))

/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */
/* ---------------------------------- Next ---------------------------------- */

var regionalFlavors = [
	"Pink Bubblegum",
	"Caramel Macchiato",
	"York Peppermint Pattie",
	"Cotton Candy",
	"Orange Sherbet",
	"Grape Ice",
	"Watermelon Ice",
	"Miami Vice Sorbet",
	"Splish Splash®",
	"Wild 'n Reckless Sherbet",
	"Lemon Custard",
	"Oregon Blackberry",
	"Bananas ‘n Strawberries",
	"Mississippi Mud",
	"Banana Nut",
	"Rum Raisin",
	"Creole Cream Cheese",
	"Chocolate Almond",
	"Fudge Brownie",
	"Black Walnut",
	"Cotton Candy Crackle",
	"Quarterback Crunch",
	"Chocolate Chocolate Chip Cheesecake",
	"Caramel 'n' Cookies"
]

// ? Remove everything with "nut" in it

function removeNut(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].includes("nut") || array[i].includes("Nut")) {
			array.splice(i, 2)
		}
	}

	return array
}

console.log("Nut --> ", removeNut(regionalFlavors))

// ? Add a new flavor

function addFlavor(array) {
	return
}

// console.log(addFlavor(regionalFlavors))
