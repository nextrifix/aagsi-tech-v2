"use client";

import { useMemo, useState } from "react";

type DecisionState = "ADOPT" | "PREPARE" | "MONITOR" | "RESIST";
type Industry = "Clinic" | "Restaurant" | "Retail" | "Agency" | "E-commerce" | "Professional Service";

type TechSignal = {
  id: string;
  label: string;
  value: number;
  maturity: number;
  readiness: number;
  cost: number;
  risk: number;
  complexity: number;
};

const industries: Industry[] = ["Clinic", "Restaurant", "Retail", "Agency", "E-commerce", "Professional Service"];

const industryWeights: Record<Industry, Omit<TechSignal, "id" | "label">> = {
  Clinic: { value: 0.95, maturity: 0.7, readiness: 0.75, cost: 0.5, risk: 0.95, complexity: 0.8 },
  Restaurant: { value: 0.8, maturity: 0.6, readiness: 0.6, cost: 0.85, risk: 0.7, complexity: 0.65 },
  Retail: { value: 0.9, maturity: 0.8, readiness: 0.7, cost: 0.75, risk: 0.75, complexity: 0.7 },
  Agency: { value: 0.95, maturity: 0.7, readiness: 0.85, cost: 0.65, risk: 0.65, complexity: 0.7 },
  "E-commerce": { value: 1, maturity: 0.8, readiness: 0.8, cost: 0.7, risk: 0.75, complexity: 0.8 },
  "Professional Service": { value: 0.85, maturity: 0.7, readiness: 0.75, cost: 0.7, risk: 0.85, complexity: 0.75 },
};

const signals: TechSignal[] = [
  {
    id: "answer-engine-visibility",
    label: "Answer Engine Optimization",
    value: 4.4,
    maturity: 4,
    readiness: 3.3,
    cost: 3.1,
    risk: 2.6,
    complexity: 2.8,
  },
  {
    id: "agentic-ops",
    label: "Agentic Operations",
    value: 4.1,
    maturity: 3,
    readiness: 2.7,
    cost: 2.2,
    risk: 3.4,
    complexity: 4.1,
  },
  {
    id: "geo-stack",
    label: "GEO + Local Signal Stack",
    value: 3.8,
    maturity: 3.9,
    readiness: 3.5,
    cost: 3.4,
    risk: 2.4,
    complexity: 2.9,
  },
  {
    id: "fully-autonomous-support",
    label: "Fully Autonomous Support Layer",
    value: 2.7,
    maturity: 2.3,
    readiness: 2,
    cost: 1.7,
    risk: 3.7,
    complexity: 4.4,
  },
];

const stateTone: Record<DecisionState, string> = {
  ADOPT: "text-emerald-300 border-emerald-400/40 bg-emerald-500/10",
  PREPARE: "text-cyan-300 border-cyan-400/40 bg-cyan-500/10",
  MONITOR: "text-amber-300 border-amber-400/40 bg-amber-500/10",
  RESIST: "text-rose-300 border-rose-400/40 bg-rose-500/10",
};

export default function DecisionLab() {
  const [industry, setIndustry] = useState<Industry>("Clinic");
  const [activeSignal, setActiveSignal] = useState<string>(signals[0].id);

  const currentSignal = signals.find((signal) => signal.id === activeSignal) ?? signals[0];

  const recommendation = useMemo(() => {
    const weights = industryWeights[industry];

    const weightedScore =
      (currentSignal.value * weights.value +
        currentSignal.maturity * weights.maturity +
        currentSignal.readiness * weights.readiness +
        currentSignal.cost * weights.cost +
        (5 - currentSignal.risk) * weights.risk +
        (5 - currentSignal.complexity) * weights.complexity) /
      (weights.value + weights.maturity + weights.readiness + weights.cost + weights.risk + weights.complexity);

    let state: DecisionState = "RESIST";
    if (weightedScore >= 4) state = "ADOPT";
    else if (weightedScore >= 3.2) state = "PREPARE";
    else if (weightedScore >= 2.4) state = "MONITOR";

    const reasons = {
      ADOPT: ["High business value now", "Execution risk is controllable", "Measurable gain inside one quarter"],
      PREPARE: ["Promising but not fully ready", "Build capability before rollout", "Run controlled pilots first"],
      MONITOR: ["Signal is relevant, timing is early", "Track maturity and cost movement", "Re-evaluate with new evidence"],
      RESIST: ["Low near-term payoff", "Risk and complexity are too high", "Protect focus on core operations"],
    };

    return {
      score: weightedScore,
      state,
      reasons: reasons[state],
    };
  }, [currentSignal, industry]);

  const bars: Array<{ label: string; value: number }> = [
    { label: "Business value", value: currentSignal.value },
    { label: "Technology maturity", value: currentSignal.maturity },
    { label: "Business readiness", value: currentSignal.readiness },
    { label: "Cost fit", value: currentSignal.cost },
    { label: "Risk control", value: 5 - currentSignal.risk },
    { label: "Implementation ease", value: 5 - currentSignal.complexity },
  ];

  return (
    <div className="border border-zinc-800 bg-zinc-950/70">
      <div className="grid gap-6 border-b border-zinc-800 p-5 md:grid-cols-[1.2fr_1fr] md:p-8">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">Interactive decision model</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setIndustry(item)}
                className={`px-3 py-1.5 text-xs transition ${
                  industry === item
                    ? "bg-zinc-100 text-zinc-950"
                    : "border border-zinc-700 text-zinc-300 hover:border-zinc-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Current recommendation</p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div className={`border px-3 py-1.5 text-sm font-semibold ${stateTone[recommendation.state]}`}>
              {recommendation.state}
            </div>
            <p className="text-xs text-zinc-400">Confidence {(recommendation.score / 5 * 100).toFixed(0)}%</p>
          </div>
          <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
            {recommendation.reasons.map((reason) => (
              <li key={reason}>• {reason}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 p-5 md:grid-cols-[1fr_1.2fr] md:p-8">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">Technology signal</p>
          <div className="space-y-2">
            {signals.map((signal) => (
              <button
                key={signal.id}
                type="button"
                onClick={() => setActiveSignal(signal.id)}
                className={`w-full border p-3 text-left text-sm transition ${
                  signal.id === currentSignal.id
                    ? "border-zinc-200 bg-zinc-100 text-zinc-950"
                    : "border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:border-zinc-600"
                }`}
              >
                {signal.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">How AAGSI evaluates it</p>
          <div className="space-y-3 border border-zinc-800 p-4">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
                  <span>{bar.label}</span>
                  <span>{bar.value.toFixed(1)} / 5</span>
                </div>
                <div className="h-1.5 bg-zinc-900">
                  <div className="h-full bg-zinc-200 transition-all duration-500" style={{ width: `${(bar.value / 5) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
