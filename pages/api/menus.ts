
type Menu = {
    texto: string,
    link: string
}

const links: Menu[] = [
    {
        texto: 'Cirúrgias',
        link: 'cirurgias'
    },
    {
        texto: 'Internações',
        link: 'internacoes'
    }
]

export default function handler(req, res){
    res.status(200).json(links);
}