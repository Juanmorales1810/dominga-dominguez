const SHEETS = {
    pescados:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=0&single=true&output=csv",
    carnes: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=837665956&single=true&output=csv",
    entradas:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=1719864108&single=true&output=csv",
    ceviches:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=1691195033&single=true&output=csv",
    vegetariano:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=317391562&single=true&output=csv",
    chupes: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=2025493624&single=true&output=csv",
    salsas: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=605623578&single=true&output=csv",
    agregados:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=1186913897&single=true&output=csv",
    salsasverdes:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=1716890737&single=true&output=csv",
    apanados:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=111747660&single=true&output=csv",
    parmesano:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=248340176&single=true&output=csv",
    alpilpil:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=1202101954&single=true&output=csv",
    menukids:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=164206130&single=true&output=csv",
    sopa: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=2066021936&single=true&output=csv",
    especialidades:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=1451717454&single=true&output=csv",
    cafeteria:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=316921012&single=true&output=csv",
    postres:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhT-0PjkNDVvPhfPm-e5-DMafbWvyugaenGg34b27nCy3JvziaR-mNOzILGcasgPpw0vTvl1DNaes_/pub?gid=261970413&single=true&output=csv",
};

// Función para convertir CSV en JSON
const parseCSV = (csv: string) => {
    return csv
        .split("\n")
        .slice(1) // Quita encabezados
        .map((row) => {
            const match = row.match(/^(.*?),(.*?),\((.*?)\)$/);
            if (match) {
                const [, title, price, description] = match;
                return {
                    title: title?.replace(/^"|"$/g, "").trim(),
                    price: parseFloat(price),
                    description:
                        description?.replace(/^"|"$/g, "").trim() || "",
                };
            } else {
                const [title, price, ...descriptionParts] = row.split(",");
                const description = descriptionParts
                    .join(",")
                    .replace(/^"|"$/g, "")
                    .trim();
                return {
                    title: title?.replace(/^"|"$/g, "").trim(),
                    price: parseFloat(price),
                    description: description || "",
                };
            }
        })
        .filter((item) => item !== null);
};

export const getMenu = async () => {
    const data: Record<string, any[]> = {};

    await Promise.all(
        Object.entries(SHEETS).map(async ([category, url]) => {
            const response = await fetch(url);
            const text = await response.text();
            data[category] = parseCSV(text);
        })
    );

    return JSON.stringify(data);
};
