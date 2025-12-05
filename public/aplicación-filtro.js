export default async function getFiltro(condicion, estado) {
    const res = await fetch('/filtros.json');
    const json = await res.json();
    const filtros = json.filtros || [];

    const match = filtros.find(
        f => f.tiempo === condicion && f.estado === estado
    );

    if (match) {
        return match.archivo;
    }
    
    return "efectos-pantalla-despejado-dia.png";
}
