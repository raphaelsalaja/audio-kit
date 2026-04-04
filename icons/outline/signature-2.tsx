import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Signature2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="16.25"
          y1="12.25"
          y2="12.25"
        />
        <path
          d="M4.355,7.043c-2.828-1.258-2.271-4.867,.649-4.52,2.463,.293,4.082,5.945,3.68,10.372-.083,.913-.407,2.362-1.691,2.573-.96,.158-1.979-.276-2.418-1.193-1.591-3.497,4.057-9.262,6.166-8.158,1.132,.593,.419,2.574,1.307,2.769,.645,.142,1.116-1.127,1.709-.977,.55,.139,.449,1.007,1.039,1.173,.263,.074,.535,.047,.704-.125"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Signature2;
