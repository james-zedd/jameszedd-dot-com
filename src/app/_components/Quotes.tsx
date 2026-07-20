import { quotes } from "@/app/_data/Quotes"
import QuoteRandomizer from "@/app/_components/QuoteRandomizer"

export default function Quotes() {
  return (
    <section id="quotes" className="py-4">
      <QuoteRandomizer quotes={quotes} />
    </section>
  );
}