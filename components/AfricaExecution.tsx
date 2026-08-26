import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { executionCapabilities, executionSteps } from "@/lib/execution";
import { reveal } from "@/lib/reveal";

/** A shared partnership proposition for the home and partner journeys. */
export function AfricaExecution({ id = "africa-execution-heading" }: { id?: string }) {
  return (
    <section className="band wrap" aria-labelledby={id}>
      <div className="section-head execution__head">
        <div>
          <span className="label">Africa execution</span>
          <h2 className="display t-1" id={id} style={{ marginTop: 14 }}>
            Global ideas. African context. <em>Real execution.</em>
          </h2>
        </div>
        <p>
          Bring the idea — early, half-formed or ready to move. YOCED helps partners understand
          what it needs to become here, then makes the next useful piece with them.
        </p>
      </div>

      <div className="execution__capabilities">
        {executionCapabilities.map((capability, index) => (
          <div key={capability.title} data-accent={capability.accent} {...reveal(index * 45)}>
            <span className="code">{String(index + 1).padStart(2, "0")}</span>
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
          </div>
        ))}
      </div>

      <div className="execution__journey" aria-labelledby={`${id}-journey`}>
        <div>
          <span className="label">A collaboration can move like this</span>
          <h3 className="display t-2" id={`${id}-journey`}>
            Start where the work is.
          </h3>
        </div>
        <ol>
          {executionSteps.map((step, index) => (
            <li key={step.code} {...reveal(index * 35)}>
              <span className="code">{step.code}</span>
              <strong>{step.title}</strong>
              <span>{step.body}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="execution__foot">
        <p>
          There is no fixed package to buy. The route adapts to the question, the place and what
          a partnership is trying to prove.
        </p>
        <Link href="/contact?topic=africa-project" className="btn btn--solid">
          Bring us an idea <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
