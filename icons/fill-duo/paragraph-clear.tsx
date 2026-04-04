import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParagraphClear({
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
        <path
          d="M2.00101 13.75C2.00101 13.3358 2.33679 13 2.75101 13H6.50101C6.91522 13 7.25101 13.3358 7.25101 13.75C7.25101 14.1642 6.91522 14.5 6.50101 14.5H2.75101C2.33679 14.5 2.00101 14.1642 2.00101 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 10.25C2.00101 9.83579 2.33679 9.5 2.75101 9.5H6.50101C6.91522 9.5 7.25101 9.83579 7.25101 10.25C7.25101 10.6642 6.91522 11 6.50101 11H2.75101C2.33679 11 2.00101 10.6642 2.00101 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 6.75C2.00101 6.33579 2.33679 6 2.75101 6H15.251C15.6652 6 16.001 6.33579 16.001 6.75C16.001 7.16421 15.6652 7.5 15.251 7.5H2.75101C2.33679 7.5 2.00101 7.16421 2.00101 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 3.25C2.00101 2.83579 2.33679 2.5 2.75101 2.5H15.251C15.6652 2.5 16.001 2.83579 16.001 3.25C16.001 3.66421 15.6652 4 15.251 4H2.75101C2.33679 4 2.00101 3.66421 2.00101 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5313 9.96967C10.2384 9.67678 9.76356 9.67678 9.47067 9.96967C9.17778 10.2626 9.17778 10.7374 9.47067 11.0303L11.1903 12.75L9.47067 14.4697C9.17778 14.7626 9.17778 15.2374 9.47067 15.5303C9.76356 15.8232 10.2384 15.8232 10.5313 15.5303L12.251 13.8107L13.9707 15.5303C14.2636 15.8232 14.7384 15.8232 15.0313 15.5303C15.3242 15.2374 15.3242 14.7626 15.0313 14.4697L13.3117 12.75L15.0313 11.0303C15.3242 10.7374 15.3242 10.2626 15.0313 9.96967C14.7384 9.67678 14.2636 9.67678 13.9707 9.96967L12.251 11.6893L10.5313 9.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ParagraphClear;
