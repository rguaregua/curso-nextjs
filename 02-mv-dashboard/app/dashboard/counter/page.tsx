import { CartCounter } from "@/app/components/shopping/CartCounter";

export const metadata = {
  title: "Contador",
  description: "Página de contador con incrementos y decrementos"
};

export default function CounterPage() {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl">Page Counter</h1>
                <CartCounter value={10} />
            </div>
        </>
    )
}