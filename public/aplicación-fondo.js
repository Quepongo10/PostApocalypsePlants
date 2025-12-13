export default async function getFondo(condicion, estado) {
    const res = await fetch('/PostApocalypsePlants/filtros.json');
    const json = await res.json();
    const filtros = json.filtros || [];

    const match = filtros.find(
        f => f.tiempo === condicion && f.estado === estado
    );

    if (match) {
        return match.fondo;
    }

    return "fondo-despejado-dia.png";
}