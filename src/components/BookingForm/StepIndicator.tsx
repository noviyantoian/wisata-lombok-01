import { CheckIcon } from "../icons";

interface StepIndicatorProps {
  current: number; // 1-based
  labels: string[];
}

export default function StepIndicator({ current, labels }: StepIndicatorProps) {
  return (
    <ol className="flex items-center">
      {labels.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <li
            key={label}
            className={`flex items-center ${i < labels.length - 1 ? "flex-1" : ""}`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                  done
                    ? "bg-teal text-white"
                    : active
                      ? "bg-coral text-white ring-4 ring-coral/20"
                      : "bg-night/10 text-night/50"
                }`}
              >
                {done ? <CheckIcon className="h-5 w-5" /> : step}
              </span>
              <span
                className={`hidden text-sm font-semibold sm:block ${
                  active ? "text-night" : "text-night/50"
                }`}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <span
                className={`mx-2 h-0.5 flex-1 rounded-full transition-colors duration-300 sm:mx-4 ${
                  done ? "bg-teal" : "bg-night/10"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
