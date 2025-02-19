interface MenuItem {
    title: string;
    price: number;
    description: string;
}

interface Props {
    menuItems: Array<MenuItem>;
}
function formatPrice(price: number): string {
    return price
        .toLocaleString("es-CL", { style: "currency", currency: "CLP" })
        .replace("CLP", "")
        .trim();
}
export default function SalsaVerdes(props: Props) {
    const { menuItems } = props;
    return (

        <section>
            <div className="container mx-auto md:px-4 py-20">
                <h1
                    className="sticky z-20 bg-zinc-900/70 backdrop-blur-lg border-zinc-50/20 rounded-lg shadow-md py-2 top-16 w-full text-3xl font-bold text-center mb-4 text-primary"
                >
                    Salsas Verdes
                </h1>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {
                        menuItems.map((item, index) => (
                            <div key={index} className="bg-zinc-400/10 backdrop-blur-lg border-zinc-50/20 rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h2>
                                        <span className="text-lg font-bold text-primary">
                                            {formatPrice(item.price)}
                                        </span>
                                    </div>
                                    <p className="text-zinc-300">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}