
type Menu = {
    texto: string,
    link: string
}

const links: Menu[] = [
    {
        texto: 'Cesáreas',
        link: ''
    },
    {
        texto: 'Internações',
        link: ''
    }
]

export default function handler(req, res){
    res.status(200).json(links);
}