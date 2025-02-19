export const prerender = false
import { useEffect, useState } from "react";
import Carnes from "./menu/Carnes";
import Pescados from "./menu/Pescados";
import { LoaderCircle } from "lucide-react";
import Entradas from "./menu/Entradas";
import Ceviches from "./menu/Ceviches";
import Vegetariano from "./menu/Vegetariano";
import Chupes from "./menu/Chupes";
import Salsas from "./menu/Salsas";
import Agregados from "./menu/Agregados";
import SalsaVerdes from "./menu/SalsasVerdes";
import Apanados from "./menu/Apanados";
import Parmesano from "./menu/Parmesano";
import AlPilPil from "./menu/Alpilpil";
import MenuKids from "./menu/MenuKids";
import Sopa from "./menu/Sopa";
import Especialidades from "./menu/Especialidades";
import Cafeteria from "./menu/Cafeteria";
import Postres from "./menu/Postres";

interface MenuItem {
    title: string;
    price: number;
    description: string;
}

interface MenuData {
    pescados: Array<MenuItem>;
    carnes: Array<MenuItem>;
    entradas: Array<MenuItem>;
    ceviches: Array<MenuItem>;
    vegetariano: Array<MenuItem>;
    chupes: Array<MenuItem>;
    salsas: Array<MenuItem>;
    agregados: Array<MenuItem>;
    salsasverdes: Array<MenuItem>;
    apanados: Array<MenuItem>;
    parmesano: Array<MenuItem>;
    alpilpil: Array<MenuItem>;
    menukids: Array<MenuItem>;
    sopa: Array<MenuItem>;
    especialidades: Array<MenuItem>;
    cafeteria: Array<MenuItem>;
    postres: Array<MenuItem>;
}

export default function MenuComponent() {
    const [menuData, setMenuData] = useState<MenuData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch("/api/menu");
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    if (loading) return <LoaderCircle size={64} className="m-auto animate-spin text-primary" />;
    if (error) return <p className="text-center text-red-500">Error al cargar el menú: {error}</p>;


    console.log(menuData);

    return (
        <>
            <Pescados menuItems={menuData.pescados} />
            <Carnes menuItems={menuData.carnes} />
            <Entradas menuItems={menuData.entradas} />
            <Ceviches menuItems={menuData.ceviches} />
            <Vegetariano menuItems={menuData.vegetariano} />
            <Chupes menuItems={menuData.chupes} />
            <Salsas menuItems={menuData.salsas} />
            <Agregados menuItems={menuData.agregados} />
            <SalsaVerdes menuItems={menuData.salsasverdes} />
            <Apanados menuItems={menuData.apanados} />
            <Parmesano menuItems={menuData.parmesano} />
            <AlPilPil menuItems={menuData.alpilpil} />
            <MenuKids menuItems={menuData.menukids} />
            <Sopa menuItems={menuData.sopa} />
            <Especialidades menuItems={menuData.especialidades} />
            <Cafeteria menuItems={menuData.cafeteria} />
            <Postres menuItems={menuData.postres} />
        </>
    );
};