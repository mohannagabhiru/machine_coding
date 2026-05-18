import "./styles.css";

const STEPS_DATA = [
  { number: 1, name: "first" },
  { number: 2, name: "second" },
  { number: 3, name: "third" },
  { number: 4, name: "fourth" },
  { number: 6, name: "first" },
  { number: 7, name: "second" },
];

const Stepper = ({ steps = [], stepsCompleted = 0 }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => {
        const isCompleted = step.number <= stepsCompleted;
        const hasLine = step.number > 1;

        return (
          <div key={step.number} className="stepper-holder">
            {/* Safe conditional class rendering using clean ternaries */}
            {hasLine && (
              <div
                className={`step-line ${
                  isCompleted ? "finished" : "unfinished"
                }`}
              />
            )}

            <div
              className={`step-circle ${
                isCompleted ? "finished" : "unfinished"
              }`}
            >
              {step.number}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <div className="app">
      <Stepper steps={STEPS_DATA} stepsCompleted={3} />
    </div>
  );
}
